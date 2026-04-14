import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  margin-top: 128px;
  margin-bottom: 96px;
  padding: 0 40px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const DarkBox = styled.div`
  background-color: #111111;
  border: 4px solid #ffffff;
  padding: 48px;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 1024px) {
    padding: 96px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
`;

const Headline = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 7vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 32px;
  text-transform: uppercase;
  line-height: 1.1;
  letter-spacing: -0.05em;

  @media (min-width: 1024px) {
    font-size: 72px; /* 7xl */
  }

  span {
    color: #f6c61e;
    font-style: italic;
  }
`;

const Subtext = styled.p`
  color: #a0a0a0;
  font-size: 1.125rem;
  margin-bottom: 48px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.6;
`;

const SubscriptionRow = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: 0 auto;
  border: 2px solid #ffffff;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  padding: 20px 24px;
  color: #ffffff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #333333;
  }
`;

const Button = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 20px 40px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 900;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex-shrink: 0;

  &:hover {
    background-color: #f6c61e;
  }
`;

export default function NewsletterSection() {
  return (
    <SectionWrapper>
      <DarkBox>
        <Content>
          <Headline>
            Stay ahead of the <span>curve</span>.
          </Headline>
          <Subtext>
            Get monthly insights on high-frequency marketing delivered to your
            inbox.
          </Subtext>
          <SubscriptionRow>
            <Input type="email" placeholder="YOUR EMAIL" />
            <Button>Subscribe</Button>
          </SubscriptionRow>
        </Content>
      </DarkBox>
    </SectionWrapper>
  );
}
