import { AvatarHusband, AvatarWife } from "../../../assets/images";
import { SectionWrapper } from "../../../_principles/styles";
import {
  Avatar,
  Feeling,
  FeelingText,
  Heart,
  Husband,
  Image,
  Name,
  SubTitle,
  Text,
  Title,
  Wife,
  Wrapper,
} from "./styles";
import { AiFillHeart } from "react-icons/ai";

export function Whisper() {
  return (
    <SectionWrapper>
      <Wrapper className="container">
        <Title>Xin chào!</Title>
        <SubTitle>Mời bạn tham dự lễ thành hôn của bọn mình</SubTitle>
        <Feeling>
          <Wife>
            <Avatar>
              <Image src={AvatarWife} alt="wife" />
            </Avatar>
            <FeelingText>
              <Name>Bùi Thị Thu Hà</Name>
              <Text>
                Không quan trọng bạn bao nhiêu tuổi, giàu hay nghèo. Chỉ cần
                đúng người và đủ tuổi là có thể kết hôn.
              </Text>
            </FeelingText>
          </Wife>
          <Heart>
            <AiFillHeart />
          </Heart>
          <Husband>
            <Avatar>
              <Image src={AvatarHusband} alt="husband" />
            </Avatar>
            <FeelingText>
              <Name>Nguyễn Thanh Bình</Name>
              <Text>
                Ai rồi cũng phải cưới thôi các ông ạ. Cuộc đời sống được mấy lần
                10 năm, tại sao lại không tìm một người bên mình để cùng tận
                hưởng cuộc sống này :))
              </Text>
            </FeelingText>
          </Husband>
        </Feeling>
      </Wrapper>
    </SectionWrapper>
  );
}
