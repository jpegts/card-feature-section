import React from "react";
import { ICardComposition } from "../../interfaces/ICard";
import {
  CardIcon,
  CardInfos,
  CardTitle,
  Container,
  Description,
  Group,
  IconContainer,
  Item,
  Pane,
  Section,
  Title,
} from "./styles/Card";

const Card: React.FC & ICardComposition = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Card.Section = function CardSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

// eslint-disable-next-line no-shadow
Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Description = function CardDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Card.Pane = function CardPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Item = function CardItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Card.CardTitle = function CardCardTitle({ children, ...restProps }) {
  return <CardTitle {...restProps}>{children}</CardTitle>;
};

Card.CardInfos = function CardCardInfos({ children, ...restProps }) {
  return <CardInfos {...restProps}>{children}</CardInfos>;
};

Card.CardIcon = function CardCardIcon({ children, ...restProps }) {
  return (
    <IconContainer>
      <CardIcon {...restProps}>{children}</CardIcon>
    </IconContainer>
  );
};

export default Card;
