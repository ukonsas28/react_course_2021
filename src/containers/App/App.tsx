import React, { useCallback, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import PageWrapper from "../../components/common/PageWrapper";
import MainPage from "../MainPage";
import NotFoundPage from "../NotFoundPage";
import OnePostPage from "../OnePostPage";
import PostEditPage from "../PostEditPage";
import PostsPage from "../PostsPage";
import RegistrationPage from "../RegistrationPage";
import { TestContext } from "./TestContext";

const App = () => {
  const contextValue = useMemo(() => {
    return {
      name: "Alex",
    };
  }, []);

  return (
    <TestContext.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<OnePostPage />} />
          <Route path="/posts/:id/edit" element={<PostEditPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </TestContext.Provider>
  );
};

export default App;
