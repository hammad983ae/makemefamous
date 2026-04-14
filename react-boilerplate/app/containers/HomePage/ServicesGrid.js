import React from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.section`
  padding: 120px 40px;
  background-color: #000000;
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 80px;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TitleColumn = styled.div`
  max-width: 800px;
`;

const ServicesTitle = styled.h2`
  font-size: clamp(3rem, 6vw, 4.5rem);
  line-height: 1.1; /* Increased from 1 */
  font-weight: 900;
  margin-bottom: 24px;
`;

const ServicesSubtitle = styled.p`
  font-size: 1.25rem;
  color: #aaaaaa;
  max-width: 500px;
  line-height: 1.5; /* Added explicitly */
`;

const ServicesWatermark = styled.div`
  font-size: 8rem;
  font-weight: 900;
  color: #f6c61e;
  opacity: 0.05;
  line-height: 1;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  background-color: transparent;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: #131313;
  padding: 64px 48px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 480px;

  &:hover {
    background-color: #f6c61e;

    h3,
    p,
    li,
    .material-symbols-outlined {
      color: #000000 !important;
    }

    .icon-box {
      background-color: transparent;
    }

    .bullet {
      background-color: #000000;
    }
  }
`;

const IconBox = styled.div`
  width: 64px;
  height: 64px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
  transition: all 0.3s ease;
  flex-shrink: 0;

  .material-symbols-outlined {
    color: #f6c61e;
    font-size: 40px;
    display: block;
    line-height: 1;
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: #ffffff;
  transition: color 0.3s ease;
`;

const CardDescription = styled.p`
  color: #aaaaaa;
  line-height: 1.6;
  margin-bottom: 32px;
  transition: color 0.3s ease;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: auto 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BulletItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 0.875rem;
  color: #aaaaaa;
  text-transform: uppercase;
  transition: color 0.3s ease;
`;

const BulletPoint = styled.span`
  width: 6px;
  height: 6px;
  background-color: #f6c61e;
  transition: background-color 0.3s ease;
`;

export default function ServicesGrid() {
  const services = [
    {
      title: 'Social Media Marketing',
      description:
        "Amplifying your brand's presence across TikTok, Instagram, and Meta with data-backed content strategies.",
      bullets: [
        'Instagram, Facebook,Tik Tok, Youtube',
        'Meta Ad Campaigns Management',
      ],
      icon: 'share',
    },
    {
      title: 'Personal Branding',
      description:
        'Crafting an authoritative digital identity that turns expertise into influence and trust.',
      bullets: ['Authority Building', 'Thought Leadership'],
      icon: 'portrait',
    },
    {
      title: 'Website Development',
      description:
        'Building high-performance, premium web experiences engineered for speed and conversion.',
      bullets: ['Wordpress & Shopify', 'Premium Themes & Custom Websites'],
      icon: 'web',
    },
    {
      title: 'SEO',
      description:
        'Dominating the search landscape through technical authority and high-intent content clusters.',
      bullets: ['Semantic Optimization', 'Backlink Engineering'],
      icon: 'monitoring',
    },
    {
      title: 'Influencer Marketing & Event PR',
      description:
        'High-impact partnerships and strategic event activation to maximize cultural relevance.',
      bullets: ['Influencer Marketing', 'Event PR'],
      icon: 'campaign',
    },
  ];

  return (
    <ServicesWrapper>
      <ContentContainer>
        <HeaderRow>
          <TitleColumn>
            <ServicesTitle>How We Help.</ServicesTitle>
            <ServicesSubtitle>
              A multi-disciplinary approach to digital dominance. We don't just
              create content; we engineer influence.
            </ServicesSubtitle>
          </TitleColumn>
          <ServicesWatermark>SERVICES</ServicesWatermark>
        </HeaderRow>

        <Grid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <IconBox className="icon-box">
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>
              </IconBox>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <BulletList>
                {service.bullets.map((bullet, idx) => (
                  <BulletItem key={idx}>
                    <BulletPoint className="bullet" />
                    {bullet}
                  </BulletItem>
                ))}
              </BulletList>
            </ServiceCard>
          ))}
        </Grid>
      </ContentContainer>
    </ServicesWrapper>
  );
}
