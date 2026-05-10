import { styled } from "styled-components";
import SkillTopic from "./SkillTopic";

const SkillContainer = styled.div`
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  gap: 2rem;
`;
const Title = styled.h1`
  font-size: 3.3rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: capitalize;
  color: #aa3bff;
  // padding-bottom: 0.5rem;
  // border-bottom: 6px solid #aa3bff;
  text-align: left;
`;
const Skill = styled.div`
  display: grid;
  grid-template-columns: 45% 50%;
  column-gap: 5%;
`;
const SkillThumbnail = styled.div`
  // padding: 2rem;
  & img {
    width: 100%;
    height: 80%;
    object-size: cover;
  }
`;
const SkillsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 46% 46%;
  column-gap: 7%;
`;

function Skills({ skills }) {
  return (
    <SkillContainer>
      <Title>Skills.</Title>
      <Skill>
        <SkillThumbnail>
          <img src="skills.avif" alt="skills thumbnail image" />
        </SkillThumbnail>
        <SkillsList>
          {skills.map((skill, index) => {
            return <SkillTopic key={index} skill={skill} />;
          })}
        </SkillsList>
      </Skill>
    </SkillContainer>
  );
}

export default Skills;
