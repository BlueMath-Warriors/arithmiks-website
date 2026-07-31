import * as React from "react";
import * as containerStyles from "../../styles/global.module.css";
import Header from "../../components/Landing/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Landing/Footer";
import { SEO } from "../../components/seo";
import { useAuth } from "../../hooks/useAuth";
import WritePostForm from "../../components/Blog/WritePostForm";
import {
  Section,
  Header as BlogHeader,
  Left,
  SmallTxt,
  HeaderText,
  DescriptionText,
} from "../../components/Blog/BlogGrid/index.styled";
import { GhostButton, FilledButton } from "../../components/Blog/AuthBar/index.styled";

const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Blog", pathname: "/blogs" },
  { name: "Write a Post", pathname: "/blogs/write" },
];

const WriteBlogPage = () => {
  const { user, ready, login, signup } = useAuth();

  return (
    <>
      <div className={containerStyles.header_div}>
        <Header white={true} fixed={true} />
      </div>
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <Section>
          <BlogHeader>
            <Left>
              <SmallTxt>Blog</SmallTxt>
              <HeaderText as="h1">Write a Post</HeaderText>
              <DescriptionText>
                Submit a post for review — once approved, it goes live on the Arithmiks blog.
              </DescriptionText>
            </Left>
          </BlogHeader>

          {!ready && null}

          {ready && !user && (
            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 24 }}>
              <GhostButton type="button" onClick={login}>
                Log in
              </GhostButton>
              <FilledButton type="button" onClick={signup}>
                Sign up to write a post
              </FilledButton>
            </div>
          )}

          {ready && user && <WritePostForm />}
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default WriteBlogPage;

export const Head = () => (
  <SEO
    title="Write a Post - Arithmiks Blog"
    description="Submit a blog post for review on the Arithmiks blog."
    pathname="/blogs/write"
    breadcrumbItems={breadcrumbItems}
    hideImage
  />
);
