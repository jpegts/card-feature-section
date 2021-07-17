import React from "react";

export interface ICardComposition {
  Section: React.FC;
  Title: React.FC;
  Description: React.FC;
  Group: React.FC;
  Pane: React.FC;
  Item: React.FC<{ clr: string }>;
  CardTitle: React.FC;
  CardInfos: React.FC;
  CardIcon: React.FC<{ src: string }>;
}
