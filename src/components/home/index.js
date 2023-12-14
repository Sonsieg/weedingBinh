import { MainWrapper } from "../../_principles/styles.js";
import { Banner } from "./banner/index.js";
import { Memory } from "./memory/index.js";
import { Schedule } from "./schedule/index.js";
import { WeddingDay } from "./wedding_day/index.js";
import { Whisper } from "./whisper/index.js";
import React from "react";

function Home() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <MainWrapper>
      <Banner />
      <Whisper />
      <WeddingDay />
      <Schedule />
      <Memory />
    </MainWrapper>
  );
}

export default Home;
