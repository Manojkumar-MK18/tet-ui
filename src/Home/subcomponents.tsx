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
  position: relative;
`;

export const ListDetials = styled.li`
  float: left;
  border-right: 1px solid #eee;
  text-transform: uppercase;
  color: #555;
  position: relative;
  right: 40px;
  font-weight: 400;
  width: 200px;
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

export const RowContainer = styled(Row)``;
export const ColContainer = styled(Col)`
  padding-right: 10px;
  padding-left: 10px;
`;
