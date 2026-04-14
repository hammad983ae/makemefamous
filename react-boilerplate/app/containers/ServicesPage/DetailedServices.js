import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  background-color: #000000;
`;

const DarkSection = styled.section`
  padding: 120px 40px;
  background-color: #131313;
`;

const ServicesGrid = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background-color: rgba(255, 255, 255, 0.05);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

const ServiceCard = styled.div`
  background-color: #000000;
  padding: 48px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    background-color: #191919;
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background-color: #f6c61e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  .material-symbols-outlined {
    color: #000000;
    font-size: 36px;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: -0.05em;
`;

const CardText = styled.div`
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 40px;

  p {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;

  .material-symbols-outlined {
    color: #f6c61e;
    font-size: 20px;
    margin-right: 12px;
  }
`;

const LearnMore = styled.a`
  display: inline-flex;
  align-items: center;
  color: #f6c61e;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.125rem;
  letter-spacing: -0.05em;

  .material-symbols-outlined {
    margin-left: 12px;
    transition: transform 0.3s ease;
  }

  &:hover .material-symbols-outlined {
    transform: translateX(8px);
  }
`;

/* Why Us Section */
const WhyUsSection = styled.section`
  padding: 160px 40px;
  background-color: #000000;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 96px;
  border-bottom: 4px solid #f6c61e;
  padding-bottom: 48px;
  gap: 48px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const HeaderText = styled.div`
  max-width: 768px;
`;

const BigTitle = styled.h2`
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: 32px;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -0.05em;

  span {
    color: #f6c61e;
    font-style: italic;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.5rem;
  color: #a0a0a0;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: -0.02em;
`;

const Watermark = styled.span`
  font-size: 5rem;
  font-weight: 900;
  color: #f6c61e;
  opacity: 0.2;
  white-space: nowrap;
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background-color: rgba(255, 255, 255, 0.05);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GridItem = styled.div`
  background-color: ${props =>
    props.primary ? '#F6C61E' : props.dark ? '#0E0E0E' : '#131313'};
  color: ${props => (props.primary ? '#000000' : '#FFFFFF')};
  padding: 48px;
  position: relative;
  overflow: hidden;
  grid-column: ${props => (props.span ? `span ${props.span}` : 'span 1')};

  h4 {
    font-size: 2.25rem;
    font-weight: 900;
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: -0.05em;
  }

  p {
    font-size: 1.125rem;
    color: ${props => (props.primary ? '#000000' : '#A0A0A0')};
    text-transform: uppercase;
    font-weight: 500;
  }

  .huge-icon {
    position: absolute;
    bottom: -32px;
    right: -32px;
    font-size: 14rem;
    color: #f6c61e;
    opacity: 0.1;
  }
`;

const MasteryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .icons {
    display: flex;
    gap: 24px;

    div {
      width: 64px;
      height: 64px;
      border: 2px solid #f6c61e;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        color: #f6c61e;
        font-size: 30px;
      }
    }
  }
`;

const services = [
  {
    title: 'Social Media Marketing',
    icon: 'share',
    text: [
      'We create powerful social media strategies that help your brand connect, engage, and grow. From content creation to account management and paid campaigns, we ensure your presence stands out across all platforms. Our goal is to turn your audience into loyal customers through consistent and impactful communication.',
      'We offer three tailored packages designed to suit different business needs and budgets, ensuring you get the right level of support for your growth stage. For brands looking for something more specific, we also create fully customized social media marketing plans based on your unique goals, industry, and target audience—giving you flexibility along with results-driven strategies.',
    ],
    features: ['Viral Content Loops', 'Community Growth Systems'],
  },
  {
    title: 'Personal Branding',
    icon: 'portrait',
    text: [
      'Your personal brand is your identity—and we make it unforgettable. We help individuals build authority, credibility, and influence through strategic positioning, content planning, and online presence management. Whether you’re an entrepreneur or a public figure, we shape your image to reflect your true value.',
      'This service is ideal for professionals in any field who want to make a name and stand out—whether you’re a lawyer, doctor, chef, politician, or public figure. Never underestimate the power of social media—the more you are seen, the more trust and credibility you build. We position you as a leader in your industry, helping you gain recognition, authority, and long-term influence.',
    ],
    features: ['Authority Architecture', 'Thought Leadership'],
  },
  {
    title: 'Website Development',
    icon: 'web',
    text: [
      'We design and develop modern, responsive websites that not only look great but perform seamlessly. Our focus is on user experience, speed, and functionality to ensure your website represents your brand professionally and converts visitors into clients.',
      'A website is the foundation of your online presence and often the first impression of your business. It builds credibility, showcases your services, and acts as a 24/7 sales tool for your brand. In today’s digital world, having a professional website is essential for gaining trust, attracting customers, and staying ahead of the competition.',
    ],
    features: ['Custom UI/UX Design', 'Scalable Performance'],
  },
  {
    title: 'SEO',
    icon: 'monitoring',
    text: [
      'SEO (Search Engine Optimization) is the process of improving your website so it appears higher in search engine results when people search for your services. The higher you rank, the more visibility your business gets. The key benefits of SEO include increased website traffic, better brand credibility, higher chances of converting visitors into customers, and sustainable growth without relying heavily on paid ads.',
      'Our SEO strategies are designed to boost your visibility and rank your business higher on search engines. From keyword research to on-page and technical optimization, we help you attract organic traffic that drives long-term growth and consistent leads.',
    ],
    features: ['Technical SEO Audit', 'Content Cluster Strategy'],
  },
  {
    title: 'Influencer Marketing & Event PR',
    icon: 'campaign',
    text: [
      'We connect your brand with the right influencers and create impactful PR campaigns that maximize exposure. From collaborations to event coverage and media outreach, we ensure your brand gains the attention it deserves both online and offline.',
      'Influencer marketing helps you reach a highly targeted audience through trusted voices, increasing brand awareness and credibility instantly. Event PR, on the other hand, creates real-world engagement, builds strong brand perception, and generates buzz around your business. Together, they boost visibility, strengthen your reputation, and create meaningful connections that drive long-term growth.',
    ],
    features: ['Influencer Casting', 'Event PR Strategy'],
  },
];

export default function DetailedServices() {
  return (
    <MainWrapper>
      <DarkSection>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <IconWrapper>
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>
              </IconWrapper>
              <CardTitle>{service.title}</CardTitle>
              <CardText>
                {Array.isArray(service.text) ? (
                  service.text.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))
                ) : (
                  <p
                    style={{
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontSize: '0.875rem',
                    }}
                  >
                    {service.text}
                  </p>
                )}
              </CardText>
              <FeatureList>
                {service.features.map((feature, fIndex) => (
                  <FeatureItem key={fIndex}>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
              <LearnMore href="#">
                Learn More{' '}
                <span className="material-symbols-outlined">arrow_forward</span>
              </LearnMore>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </DarkSection>

      <WhyUsSection>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <SectionHeader>
            <HeaderText>
              <BigTitle>
                Engineered for <span>Impact</span>.
              </BigTitle>
              <DescriptionText>
                We don't just follow trends; we define the technical framework
                that makes them possible. Here is why market leaders choose
                Kinetic.
              </DescriptionText>
            </HeaderText>
            <Watermark>02 // WHY US</Watermark>
          </SectionHeader>

          <WhyGrid>
            <GridItem span="2">
              <h4>Industry Expertise</h4>
              <p>
                Proven experience in running high-performing campaigns across
                multiple industries, including service-based businesses.
              </p>
              <span className="material-symbols-outlined huge-icon">
                query_stats
              </span>
            </GridItem>

            <GridItem dark>
              <h4 style={{ fontSize: '1.5rem' }}>24/7 Support</h4>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '800',
                  letterSpacing: '0.1em',
                }}
              >
                Global coverage ensuring your campaigns never sleep and your
                systems stay optimal.
              </p>
            </GridItem>

            <GridItem primary>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '60px' }}
              >
                verified
              </span>
              <div>
                <h4 style={{ fontSize: '1.875rem', marginBottom: '8px' }}>
                  99% Success
                </h4>
                <p style={{ fontSize: '0.875rem', fontWeight: '900' }}>
                  Campaign retention rate.
                </p>
              </div>
            </GridItem>

            <GridItem dark>
              <h4 style={{ fontSize: '1.5rem' }}>
                Creative + Strategic Execution
              </h4>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '800',
                  letterSpacing: '0.1em',
                }}
              >
                We combine eye-catching content with data-backed strategies to
                maximize performance.
              </p>
            </GridItem>

            <GridItem span="3">
              <MasteryWrapper>
                <div style={{ flex: 1 }}>
                  <h4>Customized Marketing Plans</h4>
                  <p style={{ fontSize: '1.25rem' }}>
                    No one-size-fits-all. Every strategy is tailored to your
                    business goals and target audience.
                  </p>
                </div>
                <div className="icons">
                  <div>
                    <span className="material-symbols-outlined">hub</span>
                  </div>
                  <div>
                    <span className="material-symbols-outlined">share</span>
                  </div>
                </div>
              </MasteryWrapper>
            </GridItem>
          </WhyGrid>
        </div>
      </WhyUsSection>
    </MainWrapper>
  );
}
