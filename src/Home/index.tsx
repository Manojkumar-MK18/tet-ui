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
  HomeFootertext,
} from "./subcomponents";
import {
  SectionContainer,
  SectionWrapper,
  Subtitles,
  Title,
  TitleWrapper,
} from "../components";
import Person from '../assests/person.png'

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
            {/* <SignUpButton>Sign Up</SignUpButton>  */}
          </ListDetials>
        </OrderList>
      </HeaderWrapper>
      <SectionContainer background="transparent">
        <SectionWrapper width="100%">
          <RowContainer>
            <ColContainer width="40%">
              <img src={Person} alt="" />
            </ColContainer>{" "}
            <ColContainer width="70%" margin="-20px 0 0 ">
              <TitleWrapper alignItems="right" textAlign="right">
                <Subtitles
                  color="rgba(255, 255, 255, 0.58)"
                  font="24px"
                  lineHeight="41px"
                >
                  Online Education
                </Subtitles>
                <Title color="rgb(255, 255, 255)" font="70px" lineHeight="80px">
                  Lorem, ipsum dolor sitcon. <br /> consectetur.
                </Title>{" "}
                <Subtitles
                  color="rgba(255, 255, 255, 0.58)"
                  font="16px"
                  lineHeight="27px"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate voluptatibus voluptatem eos, sed quod hic illo
                  reiciendis exercitationem inventore laudantium tempora
                  necessitatibus magni quia fuga.
                </Subtitles>
                <HomeFootertext>
                  <span>
                    Learn Anything Online <i className="bx bxs-book-open"></i>
                  </span>
                  <span>
                    Over 20,0000 Videos <i className="bx bx-video"></i>
                  </span>
                  <span>
                    Over 3 Thousand Students{" "}
                    <i className="bx bxs-graduation"></i>
                  </span>
                </HomeFootertext>
              </TitleWrapper>
            </ColContainer>
          </RowContainer>
        </SectionWrapper>
      </SectionContainer>
    </HomeWrapper>
  );
};

export default Home;
