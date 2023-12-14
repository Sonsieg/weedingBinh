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
  font-size: 26px;
  text-align: center;
  margin-bottom: 60px;
  font-weight: bold;
  color: #790009
`;

export const Invitation = styled.h4`
  text-align: center;
  font-size: 46px;
`;

export const IconWrapper = styled.div`
  border: 1px solid ${colors.black};
  padding: 20px;
  border-radius: 50%;
  position: relative;

  @media only screen and (max-width: 320px) {
    padding: 5px;
  }

  &::after {
    content: "";
    display: block;
    background-color: ${colors.black};
    width: 1px;
    height: 86px;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, 0);
    @media only screen and (max-width: 320px) {
      top: 64px;
    }
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;

export const EventWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  margin-bottom: 80px;

  @media only screen and (max-width: 992px) {
    gap: 15px;
  }

  @media only screen and (max-width: 320px) {
    gap: 8px;
  }
`;

export const ScheduleWrapper = styled.div`
  @media only screen and (max-width: 992px) {
    padding: 0 8px;
  }
  ${EventWrapper}:last-child {
    margin-bottom: 0;
    ${IconWrapper}::after {
      display: none;
    }
  }
`;

export const EventLeft = styled.div`
  position: relative;
  width: 38%;
  padding: 15px;
  border: 1px solid ${colors.black};

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 16px solid ${colors.white};
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: -15px;
  }
  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 16px solid ${colors.black};
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: -16px;
  }
  @media only screen and (max-width: 320px) {
    &::after,
    &::before {
      display: none;
    }
  }
`;

export const EventRight = styled.div`
  position: relative;
  width: 38%;
  padding: 15px;
  border: 1px solid ${colors.black};

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-right: 16px solid ${colors.white};
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: -15px;
  }
  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-right: 16px solid ${colors.black};
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: -16px;
  }
  @media only screen and (max-width: 320px) {
    &::after,
    &::before {
      display: none;
    }
  }
`;

export const EventEmpty = styled.div`
  width: 38%;
`;

export const EventText = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media only screen and (max-width: 320px) {
    font-size: 16px;
  }
`;

export const EventTime = styled.div``;
