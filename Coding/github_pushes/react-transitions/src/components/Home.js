import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <div className="title">
        <h1>Smooth transitioning</h1>
      </div>
      <section>
        <p>Click the links on header to change routes!</p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default Home;