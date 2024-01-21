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
      <Background bg={BannerBg}></Background>
      <BannerText className="container">
        <Title className="pt-5">Đừng quên nhé!</Title>
        <Title style={{ color: "#910a0a" }}>
          Nguyễn Thanh Bình
          <br />
          ♡
          <br />
          Bùi Thị Thu Hà
          <br />
          {"Hải Dương 25-02-2024"}
        </Title>
        <Button variant="outline-light">
          <Link className="nav-link px-4 py-2" to="/bank_code">
            Nhắn gửi yêu thương
          </Link>
        </Button>
      </BannerText>
    </SectionWrapper>
  );
}
