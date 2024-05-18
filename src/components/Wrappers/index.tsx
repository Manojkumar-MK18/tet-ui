import styled from "styled-components";
import { FontProsp, WrapperProsp } from "../utlis";

export const SectionContainer = styled.section<{ background?: string }>`
  width: 100%;
  height: auto;
  background-color: ${({ background }) => (background ? background : "#fff")};
  padding: 50px 0;
`;

export const SectionWrapper = styled.div<{ width?: string }>`
  margin: 0 auto;
  max-width: 1700px;
  height: auto;
  width: ${({ width }) => (width ? width : "90%")};
   
`;

export const TitleWrapper = styled.div<WrapperProsp>`
  margin: ${({ margin }) => (margin ? margin : "20px 0")};
  display: flex;
  height: ${({ height }) => (height ? height : null)};
  width: ${({ width }) => (width ? width : null)};
  flex-direction: column;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : null)};
  padding: ${({ padding }) => (padding ? padding : null)};
`;

export const Title = styled.h1<FontProsp>`
  font-size: ${({ font }) => (font ? font : `36px`)};
  color: ${({ color }) => (color ? color : "black")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : null)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : null)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : null)};
`;

export const Subtitles = styled.p<FontProsp>`
  position: relative;
  font-size: ${({ font }) => (font ? font : null)};
  color: ${({ color }) => (color ? color : "black")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : null)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : null)};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : null};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : null)};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : null)};
`;
