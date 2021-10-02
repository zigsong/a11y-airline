/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styled from 'styled-components';

const Section = styled.section`
  height: 100%;
  max-width: 960px;
  width: 100%;
  padding-top: 4rem;
  margin: auto;
  box-sizing: border-box;
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

const NavContainer = styled.ul`
  display: flex;
  gap: 1rem;

  & li {
    display: inline-block;
  }
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

function Home() {
  return (
    <Section>
      <Container>
        <h1>Welcome to Zig Airline</h1>
        <NavContainer>
          <li>
            <Link href="/">
              <NavLink>Home</NavLink>
            </Link>
          </li>
          <li>
            <Link href="/carousel">
              <NavLink>Carousel</NavLink>
            </Link>
          </li>
          <li>
            <Link href="/navigation">
              <NavLink>Navigation</NavLink>
            </Link>
          </li>
        </NavContainer>
      </Container>
    </Section>
  );
}

export default Home;
