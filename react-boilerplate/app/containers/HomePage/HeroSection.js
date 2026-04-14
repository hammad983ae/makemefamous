import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  overflow: hidden;
  background-color: #000000;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-cover: cover;
    opacity: 0.2;
    filter: grayscale(1);
  }
`;

const BlurCircle = styled.div`
  position: absolute;
  width: ${props => props.size || '500px'};
  height: ${props => props.size || '500px'};
  background: rgba(246, 198, 30, 0.05);
  border-radius: 9999px;
  filter: blur(100px);
  z-index: 1;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
`;

const Tagline = styled.span`
  display: inline-block;
  padding: 6px 16px;
  background-color: #191919;
  color: #f6c61e;
  font-weight: 800;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  border: 1px solid rgba(246, 198, 30, 0.2);
  text-transform: uppercase;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: clamp(3.5rem, 8vw, 7rem);
  line-height: 0.9;
  font-weight: 900;
  letter-spacing: -0.05em;
  margin-bottom: 32px;
  text-transform: uppercase;

  span {
    color: #f6c61e;
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 4px;
  height: 0.8em;
  background-color: #f6c61e;
  margin-left: 8px;
  animation: ${blink} 1s infinite;
  vertical-align: middle;
`;

const GlassPanel = styled.div`
  background: rgba(14, 14, 14, 0.8);
  backdrop-filter: blur(24px);
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 650px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.4;
  color: #ffffff;
  margin-bottom: 32px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const PrimaryButton = styled(Link)`
  background-color: #f6c61e;
  color: #000000;
  padding: 20px 40px;
  font-weight: 900;
  font-size: 1.125rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: #ffffff;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: #ffffff;
  padding: 20px 40px;
  font-weight: 900;
  font-size: 1.125rem;
  text-transform: uppercase;
  border: 1px solid #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

export default function HeroSection() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    'Digital Marketing',
    'Social Media',
    'Website Dev',
    'Influencers',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <HeroWrapper>
      <BackgroundLayer>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdsNDnx-t5IdIqZ3redTm1DLSpeStXm50JVSd6kxWtCfpy1QfmCVA8Ghc_eJNVSbrbJKOq7sobjSW60qh0Ni1cfiHJtYOziAK333Dl9MOCJBGcyg4gnw1FHPQwKFX82FGWFPSYJ5nnSk4QGg1pVV-WX-9KWiWaI7n7d6l5KYh7I6VHXIo3-lrBn7j9-obiAjfLr1nQO8CkJeRBTgVQWPPCW_1_EH86Zm3oKxJZcqV_9eeHOwCMyNc5btkmttJvMOQnmcYhd9nopN9a"
          alt="Hero background"
        />
      </BackgroundLayer>
      <BlurCircle top="25%" right="-80px" size="600px" />
      <BlurCircle bottom="25%" left="-80px" />

      <Content>
        <Tagline>Don’t just exist - Be Famous!</Tagline>
        <Title>
          Scale Your <br />
          <span>{text}</span>
          <Cursor />
        </Title>
        <GlassPanel>
          <Description>
            We fuse cinematic creativity with surgical data precision to
            transform emerging startups into global market leaders.
          </Description>
          <ButtonGroup>
            <PrimaryButton to="/contact">Work With Us →</PrimaryButton>
            <SecondaryButton to="/portfolio">View Showcase</SecondaryButton>
          </ButtonGroup>
        </GlassPanel>
      </Content>
    </HeroWrapper>
  );
}
