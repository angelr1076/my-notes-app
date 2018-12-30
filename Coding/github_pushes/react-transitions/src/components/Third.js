import React from "react";
import styled from "styled-components";

function Third() {
  return (
    <Wrapper>
      <h1>Third</h1>
      <section>
        <p>
          And here is the third. Hope my transitions are smooth.
          {/* omitted */}
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default Third;