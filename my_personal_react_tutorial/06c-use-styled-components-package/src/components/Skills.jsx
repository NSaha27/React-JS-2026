import { styled } from "styled-components";

const SkillContainer = styled.div``;
const Title = styled.h1``;
const SkillsList = styled.div``;

function Skills({ skills }) {
  return (
    <SkillContainer>
      <Title></Title>
      <SkillsList>{skills.map((skill, index) => {})}</SkillsList>
    </SkillContainer>
  );
}

export default Skills;
