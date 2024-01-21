import React from "react";
import { Background, BannerText, Title } from "./styles";
import { BannerBg } from "../../../assets/images";
import { SectionWrapper } from "../../../_principles/styles";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Banner() {
  return (
    <SectionWrapper>
      <Background bg={BannerBg}></Background>
      <BannerText className="container">
        <Title className="pt-5">Đừng quên nhé!</Title>
        <Title style={{ color: "#910a0a", fontSize: 28 }}>
          Nguyễn Thanh Bình
          <br />
          ♡
          <br />
          Bùi Thị Thu Hà
          <br />
          {"Hải Dương 25-02-2024"}
        </Title>
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <button style={{ background:"#910a0a", color:'white', fontSize: 18 }} class="btn btn-default">
                <Link className="nav-link px-4 py-2" to="/bank_code">
                  Nhắn gửi yêu thương
                </Link>
              </button>
            </div>
          </div>
        </div>
      </BannerText>
    </SectionWrapper>
  );
}
