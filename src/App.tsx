import React from "react";
import Card from "./components/card";
import {
  primaryBlue,
  primaryCyan,
  primaryOrange,
  primaryRed,
} from "./styles/style-guide-var";

const App: React.FC = () => (
  <>
    <Card.Section>
      <Card>
        <Card.Title>
          <span>Reliable, efficient delivery</span>
          <br /> Powered by Technology
        </Card.Title>
        <Card.Description>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </Card.Description>
        <Card.Group>
          <Card.Pane>
            <Card.Item clr={primaryCyan}>
              <Card.CardTitle>Supervisor</Card.CardTitle>
              <Card.CardInfos>
                Monitors activity to identify project roadblocks
              </Card.CardInfos>
              <Card.CardIcon src='/card-feature-section/images/icon-supervisor.svg' />
            </Card.Item>
          </Card.Pane>
          <Card.Pane>
            <Card.Item clr={primaryRed}>
              <Card.CardTitle>Team Builder</Card.CardTitle>
              <Card.CardInfos>
                Scans our talent network to create the optimal team for your
                project
              </Card.CardInfos>
              <Card.CardIcon src='/card-feature-section/images/icon-team-builder.svg' />
            </Card.Item>
            <Card.Item clr={primaryOrange}>
              <Card.CardTitle>Karma</Card.CardTitle>
              <Card.CardInfos>
                Regularly evaluates our talent to ensure quality
              </Card.CardInfos>
              <Card.CardIcon src='/card-feature-section/images/icon-karma.svg' />
            </Card.Item>
          </Card.Pane>
          <Card.Pane>
            <Card.Item clr={primaryBlue}>
              <Card.CardTitle>Calculator</Card.CardTitle>
              <Card.CardInfos>
                Uses data from past projects to provide better delivery
                estimates
              </Card.CardInfos>
              <Card.CardIcon src='/card-feature-section/images/icon-calculator.svg' />
            </Card.Item>
          </Card.Pane>
        </Card.Group>
      </Card>
    </Card.Section>
  </>
);

export default App;
