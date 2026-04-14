import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  padding: 0 40px;
  margin-bottom: 96px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
`;

const ContentFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const TextBlock = styled.div`
  max-width: 1200px;
`;

const Tagline = styled.span`
  color: #f6c61e;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: 0.3em;
  font-size: 0.75rem;
  margin-bottom: 24px;
  display: block;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: clamp(4.5rem, 15vw, 9rem);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.05em;
  line-height: 0.85;
  text-transform: uppercase;
  margin: 0;

  span {
    color: #f6c61e;
  }
`;

const IndicatorBox = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    width: 192px;
    height: 192px;
    border: 2px solid #f6c61e;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    .material-symbols-outlined {
      color: #f6c61e;
      font-size: 48px;
    }
  }
`;

export default function ContactHero() {
  return (
    <HeroWrapper>
      <ContentFlex>
        <TextBlock>
          <Tagline>READY TO SCALE?</Tagline>
          <Title>
            Let's Talk <br />
            <span>Strategy</span>.
          </Title>
        </TextBlock>
        <IndicatorBox>
          <span className="material-symbols-outlined">arrow_downward</span>
        </IndicatorBox>
      </ContentFlex>
    </HeroWrapper>
  );
}
