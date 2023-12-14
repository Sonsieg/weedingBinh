import { SectionWrapper } from "../../_principles/styles";
import { Bank, Logo, Momo } from "../../assets/images";
import { QrWrapper, Text, ThanksText, Wrapper } from "./styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function BankCode() {
  return (
    <SectionWrapper>
      <Wrapper>
        <Text> Gửi lời chúc đến chúng tớ</Text>
        <ThanksText>Chú rể Thanh Bình, cô dâu Thu Hà </ThanksText>
        <ThanksText>chân thành cảm ơn tình cảm của mọi người !!!</ThanksText>
        <br/>
        <br/>
        <br/>
        <QrWrapper>
          <LazyLoadImage alt={"imgBank"} effect="blur" src={Bank} />
          <LazyLoadImage alt={"imgMomo"} effect="blur" src={Momo} />
          <LazyLoadImage alt={"logo"} effect="blur" src={Logo} />
          <LazyLoadImage alt={"logo"} effect="blur" src={Logo} />
        </QrWrapper>
      </Wrapper>
    </SectionWrapper>
  );
}
