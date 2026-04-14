import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.header`
  position: relative;
  padding: 96px 32px;
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 192px 32px;
  }
`;

const TaglineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
  }
`;

const Tagline = styled.span`
  color: #f6c61e;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.4em;
  text-transform: uppercase;
`;

const Divider = styled.div`
  height: 1px;
  width: 96px;
  background-color: rgba(246, 198, 30, 0.5);
`;

const Title = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3.75rem, 12vw, 8rem);
  font-weight: 700;
  line-height: 0.85;
  letter-spacing: -0.05em;
  color: #ffffff;
  margin-bottom: 32px;
  max-width: 850px;
  text-transform: uppercase;

  span {
    color: #f6c61e;
    font-style: italic;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.25rem;
  max-width: 500px;
  line-height: 1.6;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: -0.01em;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: -48px;
  right: -48px;
  width: 600px;
  height: 600px;
  background-color: rgba(246, 198, 30, 0.05);
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
`;

export default function PortfolioHero() {
  return (
    <HeroWrapper>
      <BackgroundGlow />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <TaglineContainer>
          <Tagline>The Portfolio</Tagline>
          <Divider />
        </TaglineContainer>
        <Title>
          The <span>Work</span> <br />
          that Works.
        </Title>
        <Description>
          Measuring success through cultural velocity. We build brands that
          don't just exist—they vibrate.
        </Description>
      </div>
    </HeroWrapper>
  );
}
