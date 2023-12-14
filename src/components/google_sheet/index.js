import styled from "styled-components";

function GoogleSheet() {
  const IframeWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    iframe {
      width: 100%;
      height: 100%;
    }
  `;

  return (
    <IframeWrapper>
      <iframe
        src="https://docs.google.com/spreadsheets/d/1qy-XZF_6w29xAWhlwxA9wr-0qowq3KeQOS6gEUdeCaI/edit#gid=0"
        title="google sheet"
      ></iframe>
    </IframeWrapper>
  );
}

export default GoogleSheet;
