import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Section = styled.section`
  height: 100%;
  max-width: 960px;
  width: 100%;
  padding-top: 4rem;
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 24px;
    margin-bottom: 4rem;
  }
`;

const LinkWrapper = styled.div`
  margin-top: 2rem;
`;

const NavLink = styled.a`
  display: inline-block;
  color: #ffffff;
  background-color: #0077ff;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 18px;
  font-weight: 500;
`;

const Carousel = () => {
  return (
    <Section>
      <Container>
        <h1>지금 떠나기 좋은 여행</h1>
        <LinkWrapper>
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
        </LinkWrapper>
      </Container>
    </Section>
  );
};

export default Carousel;
