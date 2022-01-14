import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log("mount page");
  }, []);
  return (
    <>
      {state ? <RegistrationForm /> : <Title large>TEST</Title>}

      <button type="button" onClick={() => setState((prev) => !prev)}>
        CLICK
      </button>
    </>
  );

  // return (
  //   <div>
  //     <Title large>TEST</Title>
  //     <SubTitle>SubTitle</SubTitle>
  //   </div>
  // );
};

export default Registration;

const Title = styled.h1`
  font-size: ${(props: { large: boolean }) => (props.large ? "50px" : "20px")};
  color: red;
`;

// const SubTitle = styled.h2`
//   font-size: 10px;
// `;
