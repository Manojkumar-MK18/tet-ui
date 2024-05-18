import { Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden !important;
  background-color: rgb(219, 91, 12);
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 90px;
`;

export const OrderList = styled.ul`
  display: inline-block;
  list-style: none;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ListDetials = styled.li`
  float: left;
  border-right: 1px solid #eee;
  text-transform: uppercase;
  color: #555;
  position: relative;
  font-weight: 400; 
  padding: 0 20px;
  transition: all 0.2s linear;
`;

export const AnchorText = styled.span`
  color: inherit;
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 16px;
  height: 100%;
  color: #fff;
  line-height: 25px;
`;

export const SignUpButton = styled(Button)`
  border: 1px solid transparent;
  display: inline-flex;
  align-items: stretch;
  font-size: 1em;
  letter-spacing: 0;
  margin: 0;
  overflow: visible;
  position: relative;
  z-index: 0;
  text-decoration: none;
  text-transform: capitalize;
  justify-content: center;
  text-align: center;
  padding: 0.7em 2.45em;
  border-radius: 2.5rem;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ColContainer = styled.div<{ width?: string; margin?: string }>`
  width: ${({ width }) => (width ? width : "100%")};
  margin: ${({ margin }) => (margin ? margin : null)}; 
  display: flex;
  justify-content: end;
  padding: 0 20px;
  img{
    position: relative;
    left: 100px;
    top: -35px;
    object-fit: contain;
  }
`;

export const HomeFootertext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  float:left;
  margin-top: 10px; 
  span {
    color: rgb(255, 255, 255);
    font-size: 19px;
    line-height: 30px;
  }
  i {
    position: relative;
    top: 3px;
    right: -3px;
  }
`;
