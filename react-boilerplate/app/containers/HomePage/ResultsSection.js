import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResultsWrapper = styled.section`
  padding: 120px 40px;
  background-color: #0e0e0e;
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 80px;
`;

const Title = styled.h2`
  font-size: clamp(3rem, 6vw, 4.5rem);
  line-height: 1.1; /* Increased from 1 */
  font-weight: 900;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 800;
  color: #f6c61e;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MainCase = styled.div`
  grid-column: span 8;
  position: relative;
  height: 500px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    grid-column: span 12;
  }
`;

const CaseImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  opacity: 0.5;
  transition: all 0.7s ease;

  ${MainCase}:hover & {
    filter: grayscale(0);
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    #000000 0%,
    rgba(0, 0, 0, 0.4) 60%,
    transparent 100%
  );
`;

const CaseContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 48px;
`;

const ResultValue = styled.h4`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  color: #f6c61e;
  line-height: 1.1; /* Increased from 1 */
  margin-bottom: 16px;
`;

const CaseTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 8px;
`;

const SideCase = styled.div`
  grid-column: span 4;
  background-color: #131313;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(246, 198, 30, 0.5);
  }

  @media (max-width: 1024px) {
    grid-column: span 12;
  }
`;

const SideValue = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 24px;
  letter-spacing: -0.05em;
`;

const SideTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
`;

const SideDescription = styled.p`
  color: #aaaaaa;
  line-height: 1.6;
`;

const CaseLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: transparent;
  color: #f6c61e;
  border: none;
  font-weight: 800;
  padding: 0;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    gap: 20px;
    transition: all 0.3s ease;
  }
`;

export default function ResultsSection() {
  return (
    <ResultsWrapper>
      <ContentContainer>
        <SectionHeader>
          <Title>Our Results.</Title>
          <Subtitle>Real Growth. Real Revenue.</Subtitle>
        </SectionHeader>

        <Grid>
          <MainCase>
            <CaseImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEgYBlWQkYLnX9w9Nlf_wh2ARjZAJkGAukBQ82CIpKq07yB9yzMpc-U1mrWyOHY0W35OOIK-zq-vbdhJaSc9AAyG3Y15IL3IZuJxDWfbEIWkCRKkCm1EhNAOELRqdizZ65pJ5a1mS9xE5tGNgwE-8xT0nvk6G0Ex9j0ycEwnr3aDvrldm5YKBKiWA9qH1rQWmMCIUNZpgB40lZMFTChVnYC4SrV3UoVALHJIUVKXR_KZyNCO5eWbMk8zoKZW0a_0d331xh6Ma0MNP6" />
            <ImageOverlay />
            <CaseContent>
              <ResultValue>19K Followers</ResultValue>
              <CaseTitle>Faaiza Amjad Studio</CaseTitle>
              <SideDescription>
                How we grew Faaiza Amjad Studio from 0 to 19K followers.
              </SideDescription>
            </CaseContent>
          </MainCase>

          <SideCase>
            <div>
              <SideValue>1.2M+</SideValue>
              <SideTitle>Organic Growth for SynthLabs</SideTitle>
              <SideDescription>
                A content-first SEO strategy that captured the entire
                top-of-funnel keyword space in 6 months.
              </SideDescription>
            </div>
            <CaseLink to="/portfolio">
              View Case Study{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </CaseLink>
          </SideCase>
        </Grid>
      </ContentContainer>
    </ResultsWrapper>
  );
}
