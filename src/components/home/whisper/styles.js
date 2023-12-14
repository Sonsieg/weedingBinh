import styled from "styled-components";
import { colors } from "../../../_principles/colors";

export const Wrapper = styled.div`
  background-color: ${colors.white};
  padding: 60px 0;
`;

export const Title = styled.h3`
  font-size: 40px;
  text-align: center;
`;

export const SubTitle = styled.h4`
  font-size: 30px;
  text-align: center;
  margin-bottom: 60px;
`;

export const Feeling = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 15px - 20px) 30px calc(50% - 15px - 20px);
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media only screen and (max-width: 992px) {
    flex-wrap: wrap;
    grid-template-columns: 100%;
    padding: 0 8px;

    & > div {
      &:nth-child(2) {
        text-align: center;
      }
    }
  }
`;

const WifeHusband = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const Wife = styled(WifeHusband)``;

export const Husband = styled(WifeHusband)`
  flex-direction: row-reverse;

  ${Name} {
    text-align: right;
  }
`;

export const Avatar = styled.div`
  width: 150px;
  min-width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const FeelingText = styled.div``;

export const Text = styled.p`
  font-size: 20px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Heart = styled.div`
  color: ${colors.main};
  svg {
    width: 30px;
    height: 30px;
    animation: pp 0.6s ease alternate infinite;
  }
  @keyframes pp {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.6);
    }
  }
`;
