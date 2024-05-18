import React, { ReactElement } from "react";
import {
  AnchorText,
  HeaderWrapper,
  HomeWrapper,
  ListDetials,
  OrderList,
  SignUpButton,
  RowContainer,
  ColContainer,
} from "./subcomponents";
import { SectionContainer, SectionWrapper } from "../components/Wrappers";

const Home = (): ReactElement => {
  return (
    <HomeWrapper>
      <HeaderWrapper>
        <OrderList>
          <ListDetials>
            <AnchorText>HOME</AnchorText>
          </ListDetials>
          <ListDetials>
            <AnchorText>OUR BOOKS</AnchorText>
          </ListDetials>
          <ListDetials>
            <AnchorText>JOBS</AnchorText>
          </ListDetials>
          <ListDetials>
            <AnchorText>CONTACT US</AnchorText>
          </ListDetials>{" "}
          <ListDetials>
             <SignUpButton>Sign Up</SignUpButton> 
          </ListDetials>
        </OrderList>
      </HeaderWrapper>
      <SectionContainer background="transparent">
        <SectionWrapper>
          <RowContainer>
            <ColContainer></ColContainer>
            <ColContainer>fsfsf</ColContainer>
          </RowContainer>
        </SectionWrapper>
      </SectionContainer>
    </HomeWrapper>
  );
};

export default Home;
