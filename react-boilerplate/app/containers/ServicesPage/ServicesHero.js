import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  position: relative;
  min-height: 700px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  background-color: #000000;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  opacity: 0.4;
  pointer-events: none;
  mix-blend-mode: luminosity;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 10;
`;

const TextContent = styled.div`
  max-width: 1100px;
`;

const Tagline = styled.span`
  color: #f6c61e;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 900;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.875rem;
  margin-bottom: 24px;
  display: block;
`;

const Title = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 0.9;
  margin-bottom: 40px;
  text-transform: uppercase;

  span {
    color: #f6c61e;
    font-style: italic;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #a0a0a0;
  max-width: 650px;
  line-height: 1.2;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: -0.02em;
`;

export default function ServicesHero() {
  return (
    <HeroWrapper>
      <BackgroundImage>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRvmEPvYsjj7IalfGqFdnsYxuN-Ru5mWQT7jUaxRjBktf7eZ8EZcy-6zb2WnL_JK7ntYaNBheqzUAvP89t5QwyOWOthfRivS-0I2gmYD0gEQzyIQNmX4HpEMUwTFtvbty_xs4a1FCQCd7D0FhW4Nuu64nEaE3MXvznBDZqUR2LgMyxSAWTe0a8FILP02J8iBcbON4RnJnRQic-kjkyg8x4L1ime2akSBvBQFG-y-mpwnZ_cMk0ah3JkYjcppHeBjaTxN-Bb0cprdKO"
          alt="Abstract geometric shapes"
        />
      </BackgroundImage>
      <ContentContainer>
        <TextContent>
          <Tagline>Our Expertise</Tagline>
          <Title>
            Precision-
            <br />
            <span>Crafted</span> Solutions
          </Title>
          <Subtitle>
            We merge high-velocity creativity with rigorous data analysis to
            transform your digital footprint into an unassailable market
            advantage.
          </Subtitle>
        </TextContent>
      </ContentContainer>
    </HeroWrapper>
  );
}
