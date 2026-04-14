import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background-color: #222222; /* outline-variant color for thin separators */

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const Card = styled.div`
  background-color: #0e0e0e;
  border: 1px solid #222222;
`;

const FormCard = styled(Card)`
  padding: 40px;

  @media (min-width: 1024px) {
    grid-column: span 7;
    padding: 64px;
  }
`;

const FormTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 48px;
  letter-spacing: -0.01em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-size: 0.625rem; /* 10px */
  font-weight: 700;
  color: #f6c61e;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #222222;
  color: #ffffff;
  padding: 0 0 16px 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #f6c61e;
  }

  &::placeholder {
    color: #333333;
    text-transform: uppercase;
  }
`;

const Select = styled.select`
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #222222;
  color: #ffffff;
  padding: 0 0 16px 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  appearance: none;
  text-transform: uppercase;

  option {
    background-color: #000000;
    color: #ffffff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #222222;
  color: #ffffff;
  padding: 0 0 16px 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  min-height: 120px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #f6c61e;
  }

  &::placeholder {
    color: #333333;
    text-transform: uppercase;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #f6c61e;
  color: #000000;
  padding: 24px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cca419;
  }
`;

/* Sidebar Row */
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: #222222;

  @media (min-width: 1024px) {
    grid-column: span 5;
  }
`;

const SidebarCard = styled(Card)`
  padding: 40px;
`;

const QuickBooking = styled(SidebarCard)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(246, 198, 30, 0.05);
  }

  .icon-box {
    width: 64px;
    height: 64px;
    background-color: #f6c61e;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    transition: transform 0.3s ease;
  }

  &:hover .icon-box {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
  p {
    font-size: 0.875rem;
    color: #a0a0a0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

const LocationCard = styled(SidebarCard)`
  flex-grow: 1;

  .heading {
    font-size: 0.625rem;
    font-weight: 700;
    color: #f6c61e;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin-bottom: 40px;
    display: block;
  }
`;

const StudioBox = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;

  .icon {
    width: 40px;
    height: 40px;
    border: 1px solid #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f6c61e;
    flex-shrink: 0;
  }

  h4 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 1rem;
    margin-bottom: 4px;
  }
  p {
    font-size: 0.75rem;
    color: #a0a0a0;
    text-transform: uppercase;
    line-height: 1.6;
    letter-spacing: 0.1em;
  }
`;

const MapVisual = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  filter: grayscale(1);
  opacity: 0.5;
  transition: all 0.7s ease;
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid #222222;

  &:hover {
    filter: none;
    opacity: 1;
  }
`;

const SocialStrip = styled.div`
  background-color: #1e1e1e;
  padding: 32px;
  display: flex;
  justify-content: space-around;
  border: 1px solid #222222;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #ffffff;
    transition: color 0.3s ease;

    &:hover {
      color: #f6c61e;
    }

    .material-symbols-outlined {
      font-size: 24px;
    }

    span:last-child {
      font-size: 0.56rem; /* 9px */
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.26em;
      color: #a0a0a0;
    }
  }
`;

export default function ContactFormSection() {
  return (
    <SectionWrapper>
      <FormCard>
        <FormTitle>Send a brief</FormTitle>
        <Form>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            <FormGroup>
              <Label>Name</Label>
              <Input placeholder="ALEX RIVERA" type="text" />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input placeholder="ALEX@COMPANY.COM" type="email" />
            </FormGroup>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            <FormGroup>
              <Label>Contact Number</Label>
              <Input placeholder="03XX XXXXXXX" type="tel" />
            </FormGroup>
            <FormGroup>
              <Label>Project Type</Label>
              <Select>
                <option>Social Media Marketing</option>
                <option>Personal Branding</option>
                <option>Website Development</option>
                <option>Influencer Marketing & PR</option>
              </Select>
            </FormGroup>
          </div>
          <FormGroup>
            <Label>Message</Label>
            <TextArea placeholder="TELL US ABOUT YOUR GOALS..." />
          </FormGroup>
          <SubmitButton type="submit">
            Submit Inquiry
            <span className="material-symbols-outlined">arrow_forward</span>
          </SubmitButton>
        </Form>
      </FormCard>

      <SidebarContainer>
        <QuickBooking>
          <div>
            <h3>Skip the form?</h3>
            <p>Book a 15-min discovery call</p>
          </div>
          <div className="icon-box">
            <span className="material-symbols-outlined">calendar_today</span>
          </div>
        </QuickBooking>

        <LocationCard>
          <span className="heading">Direct Contact</span>
          <div className="contact-methods">
            <StudioBox>
              <div className="icon">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h4>Email</h4>
                <p>humza@makemefamous.net</p>
              </div>
            </StudioBox>
            <StudioBox>
              <div className="icon">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h4>Whatsapp / Call</h4>
                <p>03233339481</p>
              </div>
            </StudioBox>
          </div>
          <MapVisual
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByTqxFqHMYtam9qKCZyigd2LCICkH0z3d5bfwnffQKP9qTwhQm4EXEZWEPTWUrvqqD-UsUQLhSjT4nhn17Nkv3di7uqF6amN4ZIazr4JNJmclT8b_Le83JhqKQkFRB4upUERJj9IKSsW-fBtv3rsS0hPJj9Nn2Qq22zUedgs0AdhrnfJpBkiB5Ap2oBt-dVmdjC7Rc9NtVvdzE6JkXNIoFuA3Cpwbk5QnrnIrHYM7-XlK5WXSVQXaWuZEgEyMB4b7iXRkeniccwdSO"
            alt="City Visual"
          />
        </LocationCard>

        <SocialStrip>
          <a href="#">
            <span className="material-symbols-outlined">public</span>
            <span>LinkedIn</span>
          </a>
          <a href="#">
            <span className="material-symbols-outlined">camera</span>
            <span>Instagram</span>
          </a>
          <a href="#">
            <span className="material-symbols-outlined">bolt</span>
            <span>Twitter / X</span>
          </a>
          <a href="#">
            <span className="material-symbols-outlined">play_circle</span>
            <span>YouTube</span>
          </a>
        </SocialStrip>
      </SidebarContainer>
    </SectionWrapper>
  );
}
