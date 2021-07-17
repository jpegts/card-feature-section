import styled from "styled-components/macro";
import {
  neutralDarkBlue,
  neutralGrayshBlue,
  neutralLightGray,
} from "../../../styles/style-guide-var";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;

  background-color: ${neutralLightGray};
  padding-top: 66px;
`;

export const Container = styled.div`
  width: 40%;
  min-width: 312px;
  text-align: center;
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
`;

export const Description = styled.p`
  line-height: 1.7rem;
  font-size: 1.01rem;
  color: ${neutralGrayshBlue};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 74px;
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: column;
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
`;
