import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import { useAuth } from "../../../hooks/useAuth";
import { CATEGORIES } from "../../../utils/blog";
import {
  FormWrap,
  Field,
  Row,
  Label,
  HelpText,
  TextInput,
  TextArea,
  Select,
  FileInputWrap,
  FileInputLabel,
  PreviewThumb,
  EditorWrap,
  SubmitButton,
  ErrorList,
  SuccessBox,
} from "./index.styled";

const POST_CATEGORIES = CATEGORIES.filter((category) => category.slug !== "all");

const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const WritePostForm = () => {
  const { getToken } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(POST_CATEGORIES[0]?.slug || "");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [coverPreview, setCoverPreview] = useState(null);
  const [coverDataUrl, setCoverDataUrl] = useState(null);
  const [coverName, setCoverName] = useState(null);
  const [status, setStatus] = useState({ submitting: false, errors: [], success: null });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCoverChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    setCoverDataUrl(dataUrl);
    setCoverName(file.name);
    setCoverPreview(dataUrl);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ submitting: true, errors: [], success: null });

    const token = await getToken();
    if (!token) {
      setStatus({ submitting: false, errors: ["You must be logged in to submit a post."], success: null });
      return;
    }

    try {
      const response = await fetch("/api/blog-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          excerpt,
          category,
          body,
          coverImageBase64: coverDataUrl,
          coverImageName: coverName,
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus({ submitting: false, errors: data.details || [data.error || "Submission failed."], success: null });
        return;
      }

      setStatus({ submitting: false, errors: [], success: data });
      setTitle("");
      setExcerpt("");
      setBody("");
      setCoverDataUrl(null);
      setCoverName(null);
      setCoverPreview(null);
    } catch {
      setStatus({ submitting: false, errors: ["Something went wrong. Please try again."], success: null });
    }
  };

  if (status.success) {
    return (
      <FormWrap as="div">
        <SuccessBox>
          {status.success.message}{" "}
          <a href={status.success.prUrl} target="_blank" rel="noopener noreferrer">
            View submission
          </a>
        </SuccessBox>
      </FormWrap>
    );
  }

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Row>
        <Field style={{ flex: 2 }}>
          <Label htmlFor="post-title">Title</Label>
          <TextInput
            id="post-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={150}
            required
          />
        </Field>
        <Field style={{ flex: 1 }}>
          <Label htmlFor="post-category">Category</Label>
          <Select id="post-category" value={category} onChange={(e) => setCategory(e.target.value)} required>
            {POST_CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </Select>
        </Field>
      </Row>

      <Field>
        <Label htmlFor="post-excerpt">Excerpt</Label>
        <HelpText>A short 1-2 sentence summary shown on the blog grid card.</HelpText>
        <TextArea
          id="post-excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          maxLength={300}
          required
        />
      </Field>

      <Field>
        <Label>Cover image</Label>
        <HelpText>Optional. JPG, PNG, or WebP, under 4MB. Falls back to a brand gradient if skipped.</HelpText>
        <FileInputWrap>
          <FileInputLabel>
            {coverName ? "Change image" : "Upload image"}
            <input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleCoverChange} />
          </FileInputLabel>
          {coverPreview && <PreviewThumb src={coverPreview} alt="Cover preview" />}
        </FileInputWrap>
      </Field>

      <Field>
        <Label>Post body</Label>
        <HelpText>Written in Markdown — use the toolbar for formatting.</HelpText>
        <EditorWrap data-color-mode="light">
          {mounted ? (
            <MDEditor value={body} onChange={setBody} height={360} preview="live" />
          ) : (
            <TextArea value={body} onChange={(e) => setBody(e.target.value)} style={{ minHeight: 360 }} />
          )}
        </EditorWrap>
      </Field>

      {status.errors.length > 0 && (
        <ErrorList>
          {status.errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ErrorList>
      )}

      <SubmitButton type="submit" disabled={status.submitting}>
        {status.submitting ? "Submitting…" : "Submit for review"}
      </SubmitButton>
    </FormWrap>
  );
};

export default WritePostForm;
