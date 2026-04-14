import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CTAWrapper = styled.section`
  padding: 120px 40px;
  background-color: #000000;
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  background-color: #131313;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.4;
  mix-blend-mode: luminosity;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      #000000 0%,
      rgba(0, 0, 0, 0.9) 60%,
      transparent 100%
    );
  }
`;

const TextContent = styled.div`
  position: relative;
  z-index: 10;
  padding: 64px;
  max-width: 800px;

  @media (min-width: 768px) {
    padding: 120px;
  }
`;

const CTATitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 900;
  margin-bottom: 48px;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.05em;

  span {
    color: #f6c61e;
  }
`;

const CTADescription = styled.p`
  font-size: 1.5rem;
  color: #a0a0a0;
  margin-bottom: 64px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: -0.02em;
  max-width: 600px;
  line-height: 1.2;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background-color: #f6c61e;
  color: #000000;
  padding: 24px 48px;
  font-weight: 900;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: #ffffff;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: #ffffff;
  padding: 24px 48px;
  font-weight: 900;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    border-color: #ffffff;
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export default function ServicesCTA() {
  return (
    <CTAWrapper>
      <ContentContainer>
        <BackgroundImage>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcqdXrcofZjJELzgTAHvnUpsJW_xPzAlovETQswQNrSKn-1na_Lk1unsnhNwADORN3Nt_7-f59_XKPvZf6lg8x3pmDNjBSQ9S2xMSBXNy73_QNNLHXadbhxvNPWkqsIvqB2-3ryNh8_3ACNg-sawXJHqxJyJOGaWR8AMrFllgS1n-mr8WvI76Vtfi5NQbz_FPsHGxLIoZgmSx1l9Is9JyVUIv0hxIueNmNc6v7LI32YhPJjk3_4CS3-dQaYCV0BaXxPbqUhABhhbSi"
            alt="Futuristic server room background"
          />
        </BackgroundImage>
        <TextContent>
          <CTATitle>
            Ready to <br />
            <span>grow</span>?
          </CTATitle>
          <CTADescription>
            Take the first step towards a precision-crafted future. Schedule
            your discovery call with our lead strategists today.
          </CTADescription>
          <ButtonGroup>
            <PrimaryButton to="/contact">Book a discovery call</PrimaryButton>
            <SecondaryButton to="/portfolio">View Case Studies</SecondaryButton>
          </ButtonGroup>
        </TextContent>
      </ContentContainer>
    </CTAWrapper>
  );
}
