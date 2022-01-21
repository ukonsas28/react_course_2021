import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/common/PageWrapper";
import MainContent from "../../components/MainContent";

const MainPage: React.FC = () => {
  const [contentVisibility, setContentVisibility] = useState(false);
  const [wasOpen, setWasOpen] = useState(false);

  useEffect(() => {
    console.log("main page container mount");
  }, []);

  return (
    <PageWrapper>
      {contentVisibility && <MainContent setWasOpen={setWasOpen} />}
      <button
        disabled={!contentVisibility && wasOpen}
        type="button"
        onClick={() => setContentVisibility((prev) => !prev)}>
        {contentVisibility ? "Скрыть текст" : "Показать текст"}
      </button>
    </PageWrapper>
  );
};

export default MainPage;
