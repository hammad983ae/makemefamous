import React from 'react';
import styled from 'styled-components';

const ProcessWrapper = styled.section`
  padding: 120px 40px;
  background-color: #000000;
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 120px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1; /* Increased from 1 */
  text-transform: uppercase;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }
`;

const ConnectorLine = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(246, 198, 30, 0.2);
  display: none;

  @media (min-width: 1025px) {
    display: block;
  }
`;

const Step = styled.div`
  position: relative;
  z-index: 2;
`;

const NumberBox = styled.div`
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.25rem;
  font-weight: 900;
  margin-bottom: 40px;
  border: 1px solid ${props => props.border || 'rgba(255, 255, 255, 0.4)'};
  background-color: ${props => props.bg || '#131313'};
  color: ${props => props.color || '#FFFFFF'};
`;

const StepTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: -0.02em;
`;

const StepDescription = styled.p`
  color: #aaaaaa;
  line-height: 1.6;
  font-size: 1.125rem;
`;

export default function ProcessSection() {
  return (
    <ProcessWrapper>
      <ContentContainer>
        <SectionHeader>
          <Title>The Process.</Title>
        </SectionHeader>

        <Grid>
          <ConnectorLine />

          <Step>
            <NumberBox border="rgba(246, 198, 30, 0.4)" color="#F6C61E">
              01
            </NumberBox>
            <StepTitle>Deep Audit & Discovery</StepTitle>
            <StepDescription>
              We dismantle your current funnel, study your competitors, and find
              the "Alpha Gap" where growth is waiting.
            </StepDescription>
          </Step>

          <Step>
            <NumberBox border="rgba(255, 255, 255, 0.4)" color="#FFFFFF">
              02
            </NumberBox>
            <StepTitle>Creative & Technical Forge</StepTitle>
            <StepDescription>
              Our designers and data scientists build your high-converting
              assets and tracking infrastructure simultaneously.
            </StepDescription>
          </Step>

          <Step>
            <NumberBox bg="#F6C61E" color="#000000" border="none">
              03
            </NumberBox>
            <StepTitle>Continuous Optimization</StepTitle>
            <StepDescription>
              We don't just "set and forget." We iterate daily, scaling the
              winners and killing the losers to ensure maximum ROI.
            </StepDescription>
          </Step>
        </Grid>
      </ContentContainer>
    </ProcessWrapper>
  );
}
