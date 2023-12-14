import React from "react";
import {
  Address,
  Background,
  BannerText,
  Date,
  Description,
  Name,
  Title,
} from "./styles";
import { BannerBg } from "../../../assets/images";
import { SectionWrapper } from "../../../_principles/styles";
import { ButtonShowMore } from "../memory/styles";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Banner() {
  return (
    <SectionWrapper>
      <Background bg={BannerBg}>
        <div style={{position:'absolute', bottom:100, right: 380}}>
        <ButtonShowMore>
          <Button variant="outline-light">
            <Link className="nav-link px-4 py-2" to="/bank_code">
              Nhắn gửi yêu thương
            </Link>
          </Button>
        </ButtonShowMore>
        </div>
        <BannerText>
          <Title>Đừng quên nhé!</Title>
          <Description>
            <Address>{'Hải Dương'}</Address>
            <Name>
              Nguyễn Thanh Bình
              <br />
              ♡
              <br />
              Bùi Thị Thu Hà
            </Name>
            <Date>25-02-2024</Date>
          </Description>
        </BannerText>
      </Background>
    </SectionWrapper>
  );
}
