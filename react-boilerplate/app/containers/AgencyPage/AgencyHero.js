import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const HeroWrapper = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding-top: 120px;
  background-color: #000000;
  overflow: hidden;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.15;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1) contrast(1.2);
  }
`;

const OutlineTitle = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(8rem, 20vw, 24rem);
  font-weight: 900;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
  color: transparent;
  user-select: none;
  z-index: 1;
  letter-spacing: -0.05em;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
`;

const Tagline = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  .line {
    width: 48px;
    height: 2px;
    background-color: #f6c61e;
  }

  span {
    color: #f6c61e;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    font-size: 0.75rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1;
  font-weight: 900;
  color: #ffffff;
  max-width: 800px;
  text-transform: uppercase;
  letter-spacing: -0.02em;

  span {
    color: #f6c61e;
  }
`;

export default function AgencyHero() {
  return (
    <HeroWrapper>
      <BackgroundLayer>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
          alt="Agency background"
        />
      </BackgroundLayer>
      <OutlineTitle>AGENCY</OutlineTitle>

      <Content>
        <Tagline>
          <div className="line" />
          <span>Established 2023</span>
        </Tagline>
        <Title>
          Driven by Data. <br />
          Inspired by <span>Cinematic</span> <br />
          Creativity.
        </Title>
      </Content>
    </HeroWrapper>
  );
}
