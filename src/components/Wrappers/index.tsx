import styled from "styled-components";

export const SectionContainer = styled.section<{ background?: string }>`
  width: 100%;
  height: auto;
  background-color: ${({ background }) => (background ? background : "#fff")};
  padding: 50px 0;
`;

export const SectionWrapper = styled.div<{ width?: string }>`
  margin: 0 auto;
  max-width: 1500px;
  height: auto;
  width: ${({ width }) => (width ? width : "90%")};
  .borders {
    border-left: 5px solid #ff6100;
    border-radius: 3px;
    padding-right: 10px;
  }
`;
