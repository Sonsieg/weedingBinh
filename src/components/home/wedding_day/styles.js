import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 720px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -80px;
  opacity: 0.4;

  @media only screen and (max-width: 992px) {
    height: 860px;
    background-position: 40% 0;
  }

  @media only screen and (max-width: 320px) {
    height: 960px;
    background-position: 40% 0;
  }
`;

export const BannerText = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #910a0a;
  font-weight: bold;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 46px;
`;

export const Date = styled.h2`
  text-align: center;
  font-size: 46px;
  margin-bottom: 30px;
`;

export const Thanks = styled.p`
  text-align: center;
  font-size: 30px;
  margin-bottom: 200px;
`;

export const CountdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

export const SubText = styled.div`
  font-size: 28px;
`;

export const CountdownText = styled.div`
  display: flex;
  gap: 30px;
  @media only screen and (max-width: 992px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const ValueWrapper = styled.div`
  text-align: center;
`;

export const Value = styled.div`
  font-size: 50px;
  width: 80px;
  @media only screen and (max-width: 992px) {
    font-size: 36px;
    width: 70px;
  }
`;

export const Text = styled.div`
  font-size: 20px;
`;
