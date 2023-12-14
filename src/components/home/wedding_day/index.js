import React from "react";
import {
  Background,
  BannerText,
  CountdownText,
  CountdownWrapper,
  Date,
  SubText,
  Text,
  Thanks,
  Title,
  Value,
  ValueWrapper,
} from "./styles";
import { DoiChe } from "../../../assets/images";
import { SectionWrapper } from "../../../_principles/styles";
import Countdown from "react-countdown";

export function WeddingDay() {
  return (
    <SectionWrapper className="position-relative">
      <Background bg={DoiChe}></Background>
      <BannerText className="container">
        <Title>Ngày trọng đại</Title>
        <Date>25-02-2024</Date>
        <Thanks>
          Chúng tớ rất vui mừng để kỷ niệm ngày đặc biệt này với gia đình và bạn
          bè. Cảm ơn bạn rất nhiều vì đã ghé thăm!
        </Thanks>
        <CountdownWrapper>
          <SubText>Chỉ còn vài giờ nữa...</SubText>
          <Countdown
            date={"2024-02-25T10:30:00"}
            intervalDelay={0}
            precision={3}
            renderer={(props) => (
              <CountdownText>
                {props.days > 0 && (
                  <ValueWrapper>
                    <Value>{props.days}</Value>
                    <Text>NGÀY</Text>
                  </ValueWrapper>
                )}
                <ValueWrapper>
                  <Value>{props.hours}</Value>
                  <Text>GIỜ</Text>
                </ValueWrapper>
                <ValueWrapper>
                  <Value>{props.minutes}</Value>
                  <Text>PHÚT</Text>
                </ValueWrapper>
                <ValueWrapper>
                  <Value>{props.seconds}</Value>
                  <Text>GIÂY</Text>
                </ValueWrapper>
              </CountdownText>
            )}
          />
          <SubText>...là chúng tớ cưới rồi!</SubText>
        </CountdownWrapper>
      </BannerText>
    </SectionWrapper>
  );
}
