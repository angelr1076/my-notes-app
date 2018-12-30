import React from "react";
import styled from "styled-components";

function Second() {
  return (
    <Wrapper>
      <h1>Second</h1>
      <section>
        <p>
          This should be the second page.
          {/* omitted */}
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default Second;