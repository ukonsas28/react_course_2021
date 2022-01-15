import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/common/PageWrapper";
import MainContent from "../../components/MainContent";

const MainPage: React.FC = () => {
  const [contentVisibility, setContentVisibility] = useState(false);
  const [wasOpen, setWasOpen] = useState(false);
  //   const [stateSecond, setStateSecond] = useState(0);
  //   console.log("main page container");

  useEffect(() => {
    console.log("main page container mount");
  }, []);

  //   useEffect(() => {
  //     console.log(`component update stateSecond=${stateSecond}`);
  //   }, [stateSecond]);

  return (
    <PageWrapper>
      {contentVisibility && <MainContent setWasOpen={setWasOpen} />}
      <button
        disabled={!contentVisibility && wasOpen}
        type="button"
        onClick={() => setContentVisibility((prev) => !prev)}>
        {contentVisibility ? "Скрыть текст" : "Показать текст"}
      </button>
      {/* <button type="button" onClick={() => setStateSecond((prev) => prev + 1)}>
        UPDATE SECOND STATE
      </button> */}
    </PageWrapper>
  );
};

export default MainPage;
