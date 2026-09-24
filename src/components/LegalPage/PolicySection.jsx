import React from "react";
import {
  PolicyArticle,
  SectionTitle,
  SectionNumber,
  Blocks,
  Paragraph,
  BulletList,
  BulletItem,
  Bullet,
} from "./index.styled";

const PolicyBlock = ({ block }) => {
  if (block.type !== "ul") return <Paragraph>{block.text}</Paragraph>;
  return (
    <BulletList>
      {block.items.map((item) => (
        <BulletItem key={item.text}>
          <Bullet aria-hidden="true" />
          <span>
            {item.lead && <strong>{item.lead}</strong>}
            {item.lead && " "}
            {item.text}
          </span>
        </BulletItem>
      ))}
    </BulletList>
  );
};

/** One numbered policy section; its blocks are paragraphs, notes or bullet lists. */
const PolicySection = ({ section }) => (
  <PolicyArticle id={section.id} aria-labelledby={`h-${section.id}`}>
    <SectionTitle id={`h-${section.id}`}>
      <SectionNumber aria-hidden="true">{section.number}</SectionNumber>
      <span>{section.title}</span>
    </SectionTitle>
    <Blocks>
      {section.blocks.map((block, index) => (
        <PolicyBlock key={index} block={block} />
      ))}
    </Blocks>
  </PolicyArticle>
);

export default PolicySection;
