import React from 'react';
import styled from 'styled-components';

const NarrativeWrapper = styled.section`
  background-color: #f6c61e;
  color: #000000;
  padding: 160px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;

  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
  }
`;

const LargeText = styled.h3`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: -0.05em;

  span {
    -webkit-text-stroke: 1px #000000;
    color: transparent;
  }
`;

const SubText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 600;

  p {
    margin: 0;
  }

  .accent {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-weight: 900;
    border-bottom: 2px solid #000000;
    padding-bottom: 8px;
    align-self: flex-start;
  }
`;

export default function Narrative() {
  return (
    <NarrativeWrapper>
      <Content>
        <LargeText>
          WE ARE THE <br />
          <span>STRATEGIC ENGINE</span> <br />
          BEHIND THE <br />
          WORLD'S MOST <br />
          AMBITIOUS BRANDS.
        </LargeText>
        <SubText>
          <div className="accent">About Us</div>
          <p>
            Make Me Famous PR & Marketing, founded in 2023, is dedicated to
            helping brands and professionals grow, stand out, and build a strong
            online presence. We specialize in personal branding, digital
            marketing, website development and public relations, delivering
            creative strategies that drive real results.
          </p>
          <p>
            We believe every brand has a story, and our goal is to make it
            heard. With a strong focus on client satisfaction, we work closely
            with businesses to turn their vision into success.
          </p>
        </SubText>
      </Content>
    </NarrativeWrapper>
  );
}
