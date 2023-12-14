import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e9e9e9;
  padding: 60px 0;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 24px;
  @media only screen and (max-width: 992px) {
    font-size: 20px;
  }
`;

export const ThanksText = styled.div`
  text-align: center;
  font-size: 32px;
  margin-bottom: 10px;
`;

export const QrWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  gap: 40px;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
  @media only screen and (max-width: 992px) {
    grid-template-columns: 100%;
  }
`;
