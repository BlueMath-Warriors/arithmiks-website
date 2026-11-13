import React from "react";
import GradientIcon from "./GradientIcon";
import {
  Card,
  CardAccent,
  CardBody,
  CardHead,
  CardTitle,
  CardTag,
  CardText,
  Item,
  ItemText,
  Workloads,
  Workload,
  ExternalNote,
  Logos,
} from "./index.styled";

const LineIcon = ({ path }) => (
  <svg
    viewBox="0 0 24 24"
    width="15"
    height="15"
    fill="none"
    stroke="#1355FF"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
);

/**
 * One tier of the infrastructure diagram. Its body is a sentence, a list of
 * components, or a grid of workloads with an external-services note.
 *
 * @param {{ card: {
 *   accent: string, icon: string, iconStops?: [string, string, string],
 *   title: string, tag: string, text?: string,
 *   items?: { icon: string, title: string, note: string }[],
 *   workloads?: { icon: string, label: string }[],
 *   external?: { title: string, note: string, logos: { name: string, logo: string }[] },
 * } }} props
 */
const DiagramCard = ({ card }) => (
  <Card>
    <CardAccent $color={card.accent} aria-hidden="true" />
    <CardBody>
      <GradientIcon path={card.icon} stops={card.iconStops} />
      <CardHead>
        <CardTitle>{card.title}</CardTitle>
        <CardTag>{card.tag}</CardTag>
      </CardHead>
      {card.text && <CardText>{card.text}</CardText>}
      {card.items && (
        <div>
          {card.items.map((item) => (
            <Item key={item.title}>
              <LineIcon path={item.icon} />
              <ItemText>
                <span>{item.title}</span>
                <span>{item.note}</span>
              </ItemText>
            </Item>
          ))}
        </div>
      )}
      {card.workloads && (
        <Workloads>
          {card.workloads.map((workload) => (
            <Workload key={workload.label}>
              <LineIcon path={workload.icon} />
              {workload.label}
            </Workload>
          ))}
        </Workloads>
      )}
      {card.external && (
        <ExternalNote>
          <span>
            <strong>{card.external.title}</strong> · {card.external.note}
          </span>
          <Logos>
            {card.external.logos.map((logo) => (
              <img key={logo.name} src={`/services/stack/${logo.logo}.svg`} alt={logo.name} title={logo.name} />
            ))}
          </Logos>
        </ExternalNote>
      )}
    </CardBody>
  </Card>
);

export default DiagramCard;
