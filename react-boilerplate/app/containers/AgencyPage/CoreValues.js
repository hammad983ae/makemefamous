import React from 'react';
import styled from 'styled-components';

const ValuesWrapper = styled.section`
  padding: 160px 40px;
  background-color: #000000;
  max-width: 1440px;
  margin: 0 auto;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const ValueCard = styled.div`
  background-color: #0e0e0e;
  padding: 60px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  grid-column: ${props => (props.span ? `span ${props.span}` : 'span 12')};

  &:hover {
    border-color: #f6c61e;
    transform: translateY(-8px);
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
  }
`;

const Icon = styled.span`
  color: #f6c61e;
  font-size: 3rem;
  margin-bottom: 48px;
`;

const CardTitle = styled.h4`
  font-size: 2.25rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  color: #ffffff;
  margin-bottom: 24px;
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0;
`;

export default function CoreValues() {
  return (
    <ValuesWrapper>
      <div style={{ marginBottom: '80px' }}>
        <h4
          style={{
            color: '#F6C61E',
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            fontSize: '0.75rem',
            fontWeight: '900',
            marginBottom: '24px',
          }}
        >
          Strategic Pillars
        </h4>
        <h2
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
          }}
        >
          Driven by <br /> Precision.
        </h2>
      </div>

      <BentoGrid>
        <ValueCard span="7">
          <Icon className="material-symbols-outlined">analytics</Icon>
          <div>
            <CardTitle>Precision</CardTitle>
            <CardDescription>
              We don't guess. Every creative decision is backed by behavioral
              data and market intelligence. This ensures that our output doesn't
              just look good—it performs.
            </CardDescription>
          </div>
        </ValueCard>

        <ValueCard span="5">
          <Icon className="material-symbols-outlined">speed</Icon>
          <div>
            <CardTitle>Velocity</CardTitle>
            <CardDescription>
              In a digital-first economy, the fastest brands win. Our
              streamlined workflows allow us to launch high-fidelity products in
              weeks, not months.
            </CardDescription>
          </div>
        </ValueCard>

        <ValueCard span="5">
          <Icon className="material-symbols-outlined">diamond</Icon>
          <div>
            <CardTitle>Impact</CardTitle>
            <CardDescription>
              We prioritize outcomes over outputs. Our success is measured by
              the tangible growth and market dominance of our partners.
            </CardDescription>
          </div>
        </ValueCard>

        <ValueCard span="7">
          <Icon className="material-symbols-outlined">bolt</Icon>
          <div>
            <CardTitle>Innovation</CardTitle>
            <CardDescription>
              We constanty experiment with emerging tech—from AI-driven content
              engines to spatial computing—to give our clients an unfair
              competitive advantage.
            </CardDescription>
          </div>
        </ValueCard>
      </BentoGrid>
    </ValuesWrapper>
  );
}
