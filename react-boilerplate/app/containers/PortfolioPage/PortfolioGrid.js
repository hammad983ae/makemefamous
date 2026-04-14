import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

import imgStyleBuild from '../../images/portfolio/style-build.png';
import imgMutawaazeJewels from '../../images/portfolio/mutawaaze-jewels.png';
import imgMutawaazeModest from '../../images/portfolio/mutawaaze-modest.png';
import imgFaaizaAmjad from '../../images/portfolio/faaiza-amjad-studio.png';
import imgAdeebChowdhry from '../../images/portfolio/adeeb-chowdhry.png';
import imgZahurChowdhry from '../../images/portfolio/zahur-chowdhry.png';
import imgAestheticsLounge from '../../images/portfolio/aesthetics-lounge.png';
import imgOrionAesthetics from '../../images/portfolio/orion-aesthetics.png';
import imgRentie from '../../images/portfolio/rentie.png';
import imgHussainButt from '../../images/portfolio/hussain-butt.jpeg';
import imgAdenRehan from '../../images/portfolio/aden-rehan.jpeg';
import imgEyeinaShahzad from '../../images/portfolio/eyeina-shahzad.jpeg';
import imgTasmiahKhan from '../../images/portfolio/tasmiah-khan.jpeg';
import imgHadiyyaJaved from '../../images/portfolio/hadiyya-javed.jpeg';
import imgAhibaJalal from '../../images/portfolio/ahiba-jalal.jpeg';

const PortfolioSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
`;

const FilterBar = styled.div`
  position: sticky;
  top: 88px;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(12px);
  padding: 24px 0;
  margin-bottom: 80px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
`;

const FilterButton = styled.button`
  background-color: ${props => (props.active ? '#F6C61E' : 'transparent')};
  color: ${props => (props.active ? '#000000' : '#FFFFFF')};
  border: ${props =>
    props.active ? 'none' : '1px solid rgba(255, 255, 255, 0.2)'};
  padding: 12px 40px;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => (props.active ? '#000000' : '#F6C61E')};
    border-color: ${props => (props.active ? 'none' : '#F6C61E')};
  }
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SocialTile = styled.a`
  position: relative;
  display: block;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  background: #111;
  text-decoration: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.06);
  }

  &:hover > div {
    opacity: 1;
  }
`;

const TileOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.35s ease;
`;

const CaseStudy = styled.article`
  position: relative;
  overflow: hidden;
  background-color: ${props => (props.transparent ? 'transparent' : '#0E0E0E')};
  transition: all 0.3s ease;
  grid-column: ${props => (props.span ? `span ${props.span}` : 'span 1')};
  border: ${props =>
    props.border ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};

  @media (max-width: 767px) {
    grid-column: 1 / -1;
  }
`;

const Category = styled.span`
  color: #f6c61e;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: block;
`;

const CaseTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

const ArrowBox = styled.div`
  width: 64px;
  height: 64px;
  background-color: #f6c61e;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  ${CaseStudy}:hover & {
    transform: rotate(-45deg);
  }
`;

const DetailText = styled.p`
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.875rem;
  line-height: 1.65;
  margin: 0 0 16px 0;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const IframeShell = styled.div`
  width: 100%;
  min-height: 380px;
  height: min(52vh, 520px);
  background: #000000;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;

const IframeFooter = styled.div`
  padding: 32px 40px 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  color: #f6c61e;
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

const IframeNote = styled.p`
  margin: 12px 0 0 0;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const ImageFrame = styled.div`
  aspect-ratio: ${props => props.ratio || 'auto'};
  overflow: hidden;
  background: #131313;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ImageCardBody = styled.div`
  padding: 40px;
`;

const FILTERS = [
  { id: 'social', label: 'Social Media' },
  { id: 'influencer', label: 'Influencer' },
  { id: 'websites', label: 'Websites' },
];

const PORTFOLIO_ITEMS = [
  {
    key: 'eyeina-shahzad',
    kind: 'image',
    categories: ['influencer'],
    span: 4,
    border: true,
    category: 'Influencer',
    title: 'Eyeina Shahzad',
    image: imgEyeinaShahzad,
    imageAlt: 'Eyeina Shahzad Instagram',
    lines: [
      'Lifestyle & beauty influencer.',
      '650K Followers · @eyeina.shahzad',
    ],
    href: 'https://www.instagram.com/eyeina.shahzad',
  },
  {
    key: 'hussain-butt',
    kind: 'image',
    categories: ['influencer'],
    span: 4,
    border: true,
    category: 'Influencer',
    title: 'Hussain Butt (Butt Eats)',
    image: imgHussainButt,
    imageAlt: 'Hussain Butt - Butt Eats Instagram',
    lines: [
      'Food influencer & content creator.',
      '590K Followers · @butt.eats',
    ],
    href: 'https://www.instagram.com/butt.eats',
  },
  {
    key: 'aden-rehan',
    kind: 'image',
    categories: ['influencer'],
    span: 4,
    border: true,
    category: 'Influencer',
    title: 'Aden Rehan',
    image: imgAdenRehan,
    imageAlt: 'Aden Rehan Instagram',
    lines: ['Lifestyle & fashion influencer.', '422K Followers · @adenrehan'],
    href: 'https://www.instagram.com/adenrehan',
  },
  {
    key: 'tasmiah-khan',
    kind: 'image',
    categories: ['influencer'],
    span: 4,
    border: true,
    category: 'Influencer',
    title: 'Tasmiah Khan',
    image: imgTasmiahKhan,
    imageAlt: 'Tasmiah Khan Instagram',
    lines: [
      'Lifestyle & fashion influencer.',
      '273K Followers · @tasmiahkhann',
    ],
    href: 'https://www.instagram.com/tasmiahkhann',
  },
  {
    key: 'hadiyya-javed',
    kind: 'image',
    categories: ['influencer'],
    span: 4,
    border: true,
    category: 'Influencer',
    title: 'Hadiyya Javed',
    image: imgHadiyyaJaved,
    imageAlt: 'Hadiyya Javed Instagram',
    lines: [
      'Lifestyle & fashion influencer.',
      '205K Followers · @hadiyya.aazer',
    ],
    href: 'https://www.instagram.com/hadiyya.aazer',
  },
  {
    key: 'ahiba-jalal',
    kind: 'image',
    categories: ['influencer'],
    span: 4,
    border: true,
    category: 'Influencer',
    title: 'Ahiba Jalal',
    image: imgAhibaJalal,
    imageAlt: 'Ahiba Jalal Instagram',
    lines: [
      'Lifestyle & fashion influencer.',
      '202K Followers · @ahibakhurram',
    ],
    href: 'https://www.instagram.com/ahibakhurram',
  },
  {
    key: 'pakistanileather',
    kind: 'iframe',
    categories: ['websites'],
    span: 6,
    border: true,
    category: 'Websites',
    title: 'Pakistani Leather',
    iframeSrc: 'https://pakistanileather.com/',
    href: 'https://pakistanileather.com/',
  },
  {
    key: 'rentie',
    kind: 'image',
    categories: ['websites'],
    span: 6,
    border: true,
    category: 'Websites',
    title: 'Rentie',
    image: imgRentie,
    imageAlt: 'Rentie website',
    lines: ['One Of A Kind Solutions for You.', 'rentie.net'],
    href: 'https://www.rentie.net/',
  },
  {
    key: 'vimeo-reel',
    kind: 'iframe',
    categories: ['websites'],
    span: 4,
    border: true,
    category: 'Video',
    title: 'Campaign Reel',
    iframeSrc: 'https://player.vimeo.com/video/1175083313?title=0&byline=0',
    href: 'https://vimeo.com/1175083313',
    note: 'Vimeo player embed — full-screen viewing on Vimeo.',
  },
  {
    key: 'agricindustry',
    kind: 'iframe',
    categories: ['websites'],
    span: 4,
    border: true,
    category: 'Websites',
    title: 'Agric Industry',
    iframeSrc: 'https://agricindustry.com/',
    href: 'https://agricindustry.com/',
  },
  {
    key: 'stylebuilds',
    kind: 'iframe',
    categories: ['websites'],
    span: 4,
    border: true,
    category: 'Websites',
    title: 'Style Build Ltd',
    iframeSrc: 'https://stylebuilds.co.uk/',
    href: 'https://stylebuilds.co.uk/',
  },
  {
    key: 'faaiza-amjad',
    kind: 'image',
    categories: ['social'],
    span: 4,
    border: true,
    category: 'Social Media',
    title: 'Faaiza Amjad Studio',
    image: imgFaaizaAmjad,
    imageAlt: 'Faaiza Amjad Studio Instagram profile',
    lines: [
      'House of luxury clothing — bridals, formals, and contemporary classics.',
      'Lahore · faaizaamjadstudio.com',
    ],
    href: 'https://www.instagram.com/faizaamjad.studio/',
  },
  {
    key: 'orion-aesthetics',
    kind: 'image',
    categories: ['social'],
    span: 4,
    border: true,
    category: 'Social Media',
    title: 'Orion Aesthetics',
    image: imgOrionAesthetics,
    imageAlt: 'Orion Aesthetics Instagram profile',
    lines: [
      'Aesthetic centre in Lahore — FDA-aligned dermatology and dentistry procedures.',
      'Gulberg 3 · WhatsApp +92 325 4332200',
    ],
    href: 'https://www.instagram.com/orion.aestheticspk/',
  },
  {
    key: 'aesthetics-lounge',
    kind: 'image',
    categories: ['social'],
    span: 4,
    border: true,
    category: 'Social Media',
    title: 'Aesthetics Lounge',
    image: imgAestheticsLounge,
    imageAlt: 'Aesthetics Lounge Instagram profile',
    lines: [
      'Dermatology and aesthetics in Islamabad — skincare, hair care, and award-winning treatments.',
      'F-11 · +92 332 7979791',
    ],
    href: 'https://www.instagram.com/aestheticslounge_isb/',
  },
  {
    key: 'adeeb-chowdhry',
    kind: 'image',
    categories: ['social'],
    span: 4,
    border: true,
    category: 'Social Media',
    title: 'Adeeb Chowdhry',
    image: imgAdeebChowdhry,
    imageAlt: 'Adeeb Chowdhry immigration lawyer Instagram profile',
    lines: [
      'UK immigration lawyer — business immigration, sponsor licences, skilled worker visas.',
      '15+ years’ experience · Director at Farani Taylor · London.',
      'migratewithadeeb.com',
    ],
    href: 'https://www.instagram.com/adeebchowdhry.official/',
  },
  {
    key: 'zahur-chowdhry',
    kind: 'image',
    categories: ['social'],
    span: 4,
    border: true,
    category: 'Social Media',
    title: 'Zahur Chowdhry',
    image: imgZahurChowdhry,
    imageAlt: 'Zahur Chowdhry Instagram profile',
    lines: [
      'Head of Islamic Wills at Farani Taylor — 30+ years in Islamic inheritance and estate planning.',
      'Senior estate planner · London · islamicwills.co.uk',
    ],
    href: 'https://www.instagram.com/zahurchowdhry.official/',
  },
  {
    key: 'mutawaaze-modest',
    kind: 'image',
    categories: ['social'],
    span: 4,
    border: true,
    category: 'Social Media',
    title: 'Mutawaaze',
    image: imgMutawaazeModest,
    imageAlt: 'Mutawaaze modest fashion Instagram profile',
    lines: [
      'Modern modest wear — exclusive abayas, kimonos, and hijabs sourced from Dubai.',
      'Based in Lahore, Pakistan · mutawaaze.com.pk',
    ],
    href: 'https://www.instagram.com/mutawaaze/',
  },
  {
    key: 'style-build-social',
    kind: 'image',
    categories: ['social'],
    span: 4,
    border: true,
    category: 'Social Media',
    title: 'Style Build Ltd',
    image: imgStyleBuild,
    imageAlt: 'Style Build Ltd Instagram profile',
    lines: [
      'Construction company — new builds, extensions, and conversions across Milton Keynes and beyond.',
      '30+ years of experience · From foundation to finishing touches.',
      'stylebuilds.co.uk',
    ],
    href: 'https://www.instagram.com/style.build/',
  },
  {
    key: 'mutawaaze-jewels',
    kind: 'image',
    categories: ['social'],
    span: 4,
    border: true,
    category: 'Social Media',
    title: 'Mutawaaze Jewels',
    image: imgMutawaazeJewels,
    imageAlt: 'Mutawaaze Jewels Instagram profile',
    lines: [
      'Premium imitation jewellery in Pakistan — imported luxury pieces and custom orders.',
      'Shipping across Pakistan and the UAE · Lahore.',
      'Web: mutawaaze.com.pk',
    ],
    href: 'https://www.instagram.com/jewels_bymutawaaze/',
  },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('social');

  const visibleItems = useMemo(
    () =>
      PORTFOLIO_ITEMS.filter(item => item.categories.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <PortfolioSection>
      <FilterBar>
        {FILTERS.map(f => (
          <FilterButton
            key={f.id}
            type="button"
            active={activeFilter === f.id}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
          </FilterButton>
        ))}
      </FilterBar>

      {activeFilter === 'social' || activeFilter === 'influencer' ? (
        <SocialGrid>
          {visibleItems.map(item => (
            <CaseStudy
              key={item.key}
              border={item.border}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gridColumn: 'span 1',
              }}
            >
              {item.image && (
                <ImageFrame ratio="4/3">
                  <img src={item.image} alt={item.imageAlt} />
                </ImageFrame>
              )}
              <ImageCardBody
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <Category>{item.category}</Category>
                <CaseTitle style={{ fontSize: '1.5rem' }}>
                  {item.title}
                </CaseTitle>
                <div style={{ flex: 1 }}>
                  {item.lines.map((line, i) => (
                    <DetailText key={i}>{line}</DetailText>
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '24px',
                    marginTop: '24px',
                  }}
                >
                  <ExternalLink
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 0 }}
                  >
                    View project
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '20px' }}
                    >
                      north_east
                    </span>
                  </ExternalLink>
                  <ArrowBox>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '32px' }}
                    >
                      arrow_forward
                    </span>
                  </ArrowBox>
                </div>
              </ImageCardBody>
            </CaseStudy>
          ))}
        </SocialGrid>
      ) : (
        <BentoGrid>
          {visibleItems.map(item => {
            if (item.kind === 'iframe') {
              return (
                <CaseStudy key={item.key} span={item.span} border={item.border}>
                  <IframeShell>
                    <iframe
                      src={item.iframeSrc}
                      title={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    />
                  </IframeShell>
                  <IframeFooter>
                    <Category>{item.category}</Category>
                    <CaseTitle
                      style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
                    >
                      {item.title}
                    </CaseTitle>
                    <ExternalLink
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open live site
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '20px' }}
                      >
                        open_in_new
                      </span>
                    </ExternalLink>
                    {item.note ? <IframeNote>{item.note}</IframeNote> : null}
                  </IframeFooter>
                </CaseStudy>
              );
            }

            return (
              <CaseStudy key={item.key} span={item.span} border={item.border}>
                {item.image && (
                  <ImageFrame ratio={item.imageRatio}>
                    <img src={item.image} alt={item.imageAlt} />
                  </ImageFrame>
                )}
                <ImageCardBody>
                  <Category>{item.category}</Category>
                  <CaseTitle style={{ fontSize: '2rem' }}>
                    {item.title}
                  </CaseTitle>
                  {item.lines.map((line, i) => (
                    <DetailText key={i}>{line}</DetailText>
                  ))}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid rgba(255,255,255,0.1)',
                      paddingTop: '32px',
                      marginTop: '24px',
                    }}
                  >
                    <ExternalLink
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginTop: 0 }}
                    >
                      View project
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '20px' }}
                      >
                        north_east
                      </span>
                    </ExternalLink>
                    <ArrowBox>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '32px' }}
                      >
                        arrow_forward
                      </span>
                    </ArrowBox>
                  </div>
                </ImageCardBody>
              </CaseStudy>
            );
          })}
        </BentoGrid>
      )}
    </PortfolioSection>
  );
}
