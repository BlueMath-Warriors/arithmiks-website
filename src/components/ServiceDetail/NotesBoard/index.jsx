import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import { useNotesWheel } from "./useNotesWheel";
import {
  Section,
  Stage,
  DotGrid,
  Glow,
  Head,
  Board,
  Track,
  Note,
  Paper,
  PaperTint,
  PaperCurl,
  Meta,
  NoteNumber,
  Duration,
  Title as NoteTitle,
  Body,
  Tags,
  Tag,
  Pin,
  Connector,
  Progress,
} from "./index.styled";

// Each note's resting tilt and paper colour, in order, as in the design.
const TILTS = [-2.2, 1.6, -1.1, 2, -1.7, 1.2];
const PAPERS = ["#FFF3B5", "#DDE7FF", "#ECE1FB", "#FCE0EE", "#FFF3B5", "#DDE7FF"];

/**
 * "Offers" for design engagements: the stages as sticky notes pinned along a
 * board that slides past as the page scrolls.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   notes: { title: string, duration: string, text: string, tags: string[] }[] }} props
 */
const NotesBoard = ({ eyebrow, title, notes }) => {
  const { sectionRef, boardRef, trackRef, noteRefs, paperRefs, fillRef, isStatic } =
    useNotesWheel(TILTS);

  return (
    <Section id="process" aria-labelledby="xp-h" ref={sectionRef} $static={isStatic}>
      <Stage $static={isStatic}>
        <DotGrid aria-hidden="true" />
        <Glow aria-hidden="true" />
        <BandShell>
          <Head>
            <Eyebrow $gap="18px">{eyebrow}</Eyebrow>
            <Title id="xp-h" $balance>
              <HeadingText parts={title} />
            </Title>
          </Head>
        </BandShell>
        <Board ref={boardRef} $static={isStatic}>
          <Track ref={trackRef} $static={isStatic}>
            {notes.map((note, index) => {
              const tilt = TILTS[index] || 0;
              return (
                <Note
                  key={note.title}
                  ref={(node) => {
                    noteRefs.current[index] = node;
                  }}
                  $tilt={tilt}
                  $static={isStatic}
                >
                  <Paper
                    ref={(node) => {
                      paperRefs.current[index] = node;
                    }}
                    $paper={PAPERS[index % PAPERS.length]}
                  >
                    <PaperTint aria-hidden="true" />
                    <PaperCurl aria-hidden="true" />
                    <Meta>
                      <NoteNumber>{String(index + 1).padStart(2, "0")}</NoteNumber>
                      <Duration>{note.duration}</Duration>
                    </Meta>
                    <NoteTitle>{note.title}</NoteTitle>
                    <Body>{note.text}</Body>
                    <Tags>
                      {note.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </Tags>
                  </Paper>
                  <Pin aria-hidden="true" />
                  {!isStatic && index < notes.length - 1 && (
                    <Connector viewBox="0 0 64 20" fill="none" aria-hidden="true" $tilt={tilt}>
                      <path d="M6 10h46" stroke="#9AA6C0" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="3 5" />
                      <path d="m48 5 6 5-6 5" stroke="#9AA6C0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </Connector>
                  )}
                </Note>
              );
            })}
          </Track>
        </Board>
        {!isStatic && (
          <Progress aria-hidden="true">
            <span ref={fillRef} />
          </Progress>
        )}
      </Stage>
    </Section>
  );
};

export default NotesBoard;
