import React, { useState } from 'react';
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
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  text-align: center;
  font-size: 1rem;
  line-height: 1rem;
  background: transparent;
  margin: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Input = styled.input`
  width: 40px;
  text-align: center;
  border: none;
  border-bottom: 2px solid #777;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const HiddenCount = styled.span`
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
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

const SpinButton = () => {
  const [passengerCount, setPassengerCount] = useState(0);

  const increasePassengerCount = () => {
    if (passengerCount > 2) {
      alert('최대 3명까지 선택할 수 있습니다.');

      return;
    }

    setPassengerCount((passengerCount) => passengerCount + 1);
  };

  const decreasePassengerCount = () => {
    if (passengerCount < 1) return;

    setPassengerCount((passengerCount) => passengerCount - 1);
  };

  const handlePassengerCount = (event) => {
    const { valueAsNumber: value } = event.target;

    if (value < 1) {
      setPassengerCount(1);
    } else if (value > 3) {
      setPassengerCount(3);
    } else {
      setPassengerCount(event.target.value);
    }
  };

  return (
    <Section>
      <Container>
        <h1>승객 선택</h1>
        <div>성인</div>
        <div>
          <Button type="button" aria-label="성인 탑승자 한명 줄이기" onClick={decreasePassengerCount}>
            -
          </Button>
          <Input
            type="number"
            aria-labelledby="passenger-count"
            value={passengerCount}
            onChange={handlePassengerCount}
            min="1"
            max="3"
          />
          <HiddenCount id="passenger-count" className="visually-hidden" role="status" aria-live="assertive">
            성인 승객 {passengerCount}명
          </HiddenCount>
          <Button type="button" aria-label="성인 탑승자 한명 늘리기" onClick={increasePassengerCount}>
            +
          </Button>
        </div>
        <LinkWrapper>
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
        </LinkWrapper>
      </Container>
    </Section>
  );
};

export default SpinButton;
