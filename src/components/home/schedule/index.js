import { SectionWrapper } from "../../../_principles/styles";
import {
  EventEmpty,
  EventLeft,
  EventRight,
  EventText,
  EventTime,
  EventWrapper,
  IconWrapper,
  Invitation,
  ScheduleWrapper,
  SubTitle,
  Title,
  Wrapper,
} from "./styles";
import { FaGlassCheers } from "react-icons/fa";
import { GiLovers, GiForkKnifeSpoon, GiMusicalNotes } from "react-icons/gi";
import { Background } from "../banner/styles";
import { address } from "../../../assets/images";

export function Schedule() {
  return (
    <SectionWrapper>
      <Wrapper className="container">
        <Title>Chương trình tiệc cưới</Title>
        <Invitation>Mời bạn</Invitation>
        <SubTitle>
          {"Tới dự bữa cơm thân mật mừng hôn lễ của chúng tớ "}
          <br />
          <br />
          {
            "tại nhà hàng DUBAI thôn Cúc Thị, xã Kiến Quốc, huyện Ninh Giang, tỉnh Hải Dương "
          }
          <br />
          <br />
          <img src={address} alt="Logo" width="200" height="200"/>
        </SubTitle>
        <ScheduleWrapper>
          <EventWrapper>
            <EventLeft>
              <EventTime>10:00</EventTime>
              <EventText>Đón khách</EventText>
            </EventLeft>
            <IconWrapper>
              <FaGlassCheers />
            </IconWrapper>
            <EventEmpty></EventEmpty>
          </EventWrapper>
          <EventWrapper>
            <EventEmpty></EventEmpty>
            <IconWrapper>
              <GiLovers />
            </IconWrapper>
            <EventRight>
              <EventTime>10:30</EventTime>
              <EventText>Lễ thành hôn</EventText>
            </EventRight>
          </EventWrapper>
          <EventWrapper>
            <EventLeft>
              <EventTime>10:30</EventTime>
              <EventText>Dự tiệc</EventText>
            </EventLeft>
            <IconWrapper>
              <GiForkKnifeSpoon />
            </IconWrapper>
            <EventEmpty></EventEmpty>
          </EventWrapper>
          <EventWrapper>
            <EventEmpty></EventEmpty>
            <IconWrapper>
              <GiMusicalNotes />
            </IconWrapper>
            <EventRight>
              <EventTime>11:00</EventTime>
              <EventText>Chúc mừng hạnh phúc</EventText>
            </EventRight>
          </EventWrapper>
        </ScheduleWrapper>
      </Wrapper>
    </SectionWrapper>
  );
}
