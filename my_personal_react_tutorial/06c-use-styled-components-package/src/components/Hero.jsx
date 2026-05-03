import { styled } from "styled-components";

const Portfolio = styled.div`
  padding: 3rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PortfolioDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  // gap: 1rem;
`;
const PortfolioTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  font-family: sans-serif;
`;
const PortfolioMainHeading = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  color: #222;
  line-height: 3.2rem;
`;
const PortfolioMainHeadingSpan = styled.span`
  color: #aa3bff;
`;
const PortfolioShortDesc = styled.p`
  font-size: 1.5rem;
  color: #404040;
  word-spacing: 3px;
  line-height: 2rem;
`;
const ContactBtnContainer = styled.p`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;
const ButtonEl = styled.button`
  padding: 0.7rem 1rem;
  border: 2px solid #575757;
  border-radius: 0.6rem;
  box-shadow: 0 3px 6px #aaa;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.2s;

  &:nth-child(1) {
    background-color: #aa3bff;
    color: #fff;
  }
  &:nth-child(1):hover {
    background-color: #470175;
  }
`;
const PortfolioImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 0 1rem;
  border: 3px solid #ccc;
  border-radius: 50%;
  min-width: 340px;
  min-height: 340px;
`;
const PortfolioImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 3px 48px 6px #bbb;
  object-fit: cover;
`;

function Hero() {
  return (
    <Portfolio id="hero">
      <PortfolioDetailsContainer>
        <PortfolioTitle>Hey, I'm Niladri 👋</PortfolioTitle>
        <PortfolioMainHeading>
          <PortfolioMainHeadingSpan>Full Stack</PortfolioMainHeadingSpan>
          <br />
          Developer
        </PortfolioMainHeading>
        <PortfolioShortDesc>
          I'm a Full Stack Developer based in India, I'll help you build
          beautiful websites, your users will love
        </PortfolioShortDesc>
        <ContactBtnContainer>
          <ButtonEl>Get In Touch</ButtonEl>
          <ButtonEl>Browse Projects</ButtonEl>
        </ContactBtnContainer>
      </PortfolioDetailsContainer>
      <PortfolioImageContainer>
        <PortfolioImage src="portfolio_image.jpg" />
      </PortfolioImageContainer>
    </Portfolio>
  );
}

export default Hero;
