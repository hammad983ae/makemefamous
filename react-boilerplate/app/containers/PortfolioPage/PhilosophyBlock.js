import React from 'react';
import styled from 'styled-components';

const PhilosophySection = styled.section`
  padding: 160px 32px;
  background-color: #131313;
  position: relative;
  overflow: hidden;
  margin-top: 128px;
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 128px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 64px;
  text-transform: uppercase;
  letter-spacing: -0.05em;

  span {
    color: #f6c61e;
  }

  .underlined {
    border-bottom: 8px solid #f6c61e;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 64px;
  margin-top: 64px;
`;

const StatItem = styled.div`
  .val {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    font-family: 'Space Grotesk', sans-serif;
    display: block;
    margin-bottom: 16px;
    letter-spacing: -0.05em;
  }
  .label {
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.3em;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  position: relative;
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(246, 198, 30, 0.1);
  filter: blur(100px);
  pointer-events: none;
`;

const TestimonialCard = styled.div`
  background-color: #000000;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 64px;
  position: relative;
  z-index: 10;
`;

const QuoteIcon = styled.span`
  color: #f6c61e;
  font-size: 4.5rem;
  display: block;
  margin-bottom: 40px;
`;

const QuoteText = styled.p`
  font-size: 1.875rem;
  font-weight: 300;
  line-height: 1.4;
  color: #ffffff;
  font-style: italic;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  .image {
    width: 64px;
    height: 64px;
    background-color: rgba(255, 255, 255, 0.1);
    filter: grayscale(1);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .details {
    .name {
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.875rem;
    }
    .role {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.4);
      text-transform: uppercase;
      letter-spacing: 0.4em;
      margin-top: 4px;
    }
  }
`;

export default function PhilosophyBlock() {
  return (
    <PhilosophySection>
      <ContentContainer>
        <LeftColumn>
          <Title>
            We don't follow <br />
            <span>Trends</span>. We build <br />
            Cultural <span className="underlined">Engines</span>.
          </Title>
          <StatsGrid>
            <StatItem>
              <span className="val">120+</span>
              <span className="label">Successful Campaigns</span>
            </StatItem>
            <StatItem>
              <span className="val">15+</span>
              <span className="label">Global Awards</span>
            </StatItem>
            <StatItem>
              <span className="val">22M</span>
              <span className="label">Combined Reach</span>
            </StatItem>
            <StatItem>
              <span className="val">4.9/5</span>
              <span className="label">Partner NPS</span>
            </StatItem>
          </StatsGrid>
        </LeftColumn>
        <RightColumn>
          <Glow />
          <TestimonialCard>
            <QuoteIcon className="material-symbols-outlined">
              format_quote
            </QuoteIcon>
            <QuoteText>
              "Make Me Famous provides amazing services all under one roof. The
              team is highly professional, creative, and truly understands brand
              growth. They helped me take my clothing brand from scratch to
              making millions. Thank you, Team - Make Me Famous!"
            </QuoteText>
            <AuthorInfo>
              <div className="image">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5AOzP3QDhL-VxwMT5y8BO0LZ1D9YJK7sM_7hQuey0Qpt9kKe5UQH-UsEgGBOs5ALPiHbtlEI1aV5fdfBaFXpvu6c_16yEhQe-a_qO6fHkuhh9nxj9ATE67bAPYbAdt99pQvM4hp-kQM1Vq8LWteTxHjUUrIDZhViu09c0LstuAX59ML199cStwFsDqWwyGBn7ft13inKts8SFptebNAJEsnNfR-ku87KRFELmRqd9414v3wA3_gcUhD9uyL4GoHMTy63TzDv1n1Jj"
                  alt="Faaiza Amjad"
                />
              </div>
              <div className="details">
                <p className="name">Faaiza Amjad</p>
                <p className="role">Owner</p>
              </div>
            </AuthorInfo>
          </TestimonialCard>
        </RightColumn>
      </ContentContainer>
    </PhilosophySection>
  );
}
