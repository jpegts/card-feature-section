import styled from "styled-components/macro";
import { media } from "../../../styles/global-style";
import {
  neutralDarkBlue,
  neutralGrayshBlue,
  neutralLightGray,
  primaryBlue,
  primaryCyan,
  primaryOrange,
  primaryRed,
} from "../../../styles/style-guide-var";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;

  background-color: ${neutralLightGray};
  padding-top: 66px;

  ${media.desktop} {
    padding-top: 52px;
  }
`;

export const Container = styled.div`
  width: 40%;
  min-width: 312px;
  text-align: center;

  ${media.desktop} {
    width: min(1400px, 60%);
  }
`;

export const Title = styled.h2`
  line-height: 36px;
  font-size: 1.6rem;
  margin-bottom: 0;
  color: ${neutralDarkBlue};

  span {
    font-weight: 200;
    letter-spacing: 0.8px;
    font-size: 1.5rem;
  }

  ${media.desktop} {
    line-height: 3.3rem;
    font-size: 2.4rem;

    span {
      font-size: 2.3rem;
    }
  }
`;

export const Description = styled.p`
  line-height: 1.7rem;
  font-size: 1.01rem;
  color: ${neutralGrayshBlue};

  ${media.desktop} {
    margin: 18px auto;
    max-width: 510px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 74px;

  ${media.desktop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 63px;
  }
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: column;

  ${media.desktop} {
    flex: 1;
    padding: 0 18px;
  }
`;
export const Item = styled.div<{ clr: string }>`
  height: 222px;
  width: 100%;
  background-color: white;
  margin-bottom: 10px;
  border-top: 4px solid ${({ clr }) => clr};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 25px;
  margin-bottom: 24px;
  box-shadow: 0px 12px 40px -20px ${neutralGrayshBlue};

  ${media.desktop} {
    height: 250px;
    margin-bottom: 28px;
    padding: 28px;

    ${({ clr }) => clr === primaryCyan && "padding: 30px"}
    ${({ clr }) => clr === primaryBlue && "padding: 30px 24px"}
    ${({ clr }) => clr === primaryOrange && "padding: 30px 28px"}
  }
`;

export const CardTitle = styled.h4`
  margin: 2px 3px;
  font-size: 20px;
  color: ${neutralDarkBlue};
`;

export const CardInfos = styled.p`
  margin: 4px 4px;
  font-size: 0.88rem;
  line-height: 1.48rem;
  color: ${neutralGrayshBlue};

  ${media.desktop} {
    margin-top: 11px;
    font-size: 0.87rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding-bottom: 4px;
`;

export const CardIcon = styled.div<{ src?: string }>`
  background-image: url(${({ src }) => src});
  height: 100%;
  width: 56px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left bottom;
  margin-right: 4px;

  ${media.desktop} {
    width: 63px;

    ${({ src }) =>
      src === "/card-feature-section/images/icon-supervisor.svg" &&
      "margin-right: -1px; background-position: bottom -1px right -1px"}

    ${({ src }) =>
      src === "/card-feature-section/images/icon-calculator.svg" &&
      "margin-right: 12px; margin-bottom: -2px"}

    ${({ src }) =>
      src === "/card-feature-section/images/icon-karma.svg" &&
      "margin-bottom: -4px"}
  }
`;
