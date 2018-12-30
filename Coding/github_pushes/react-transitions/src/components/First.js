import React from "react";
import styled from "styled-components";

function First() {
  return (
    <Wrapper>
      <h1>First</h1>
      <section>
        <p>
          Hello, this is the first page you're transitioning to from the home page.
          {/* omitted */}
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default First;