import { styled } from "styled-components";

const Topic = styled.div`
  padding-bottom: 2.4rem;
  // border-radius: 8px;
  // box-shadow: 0 2px 12px 6px #bbb;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const TopicHeading = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  // text-transform: capitalize;
  font-family: sans-serif;
  color: #333;
  margin: 0;
`;
const Progress = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #bbb;
`;
const ProgressBar = styled.div`
  min-height: 0.7rem;
  border-radius: 10px;
  background-color: #aa3bff;
  color: #fff;
  text-align: center;
`;

function SkillTopic({ skill }) {
  if (skill.limit < 0 && skill.limit > 100) {
    return null;
  }
  return (
    <Topic>
      <TopicHeading>{skill.heading}</TopicHeading>
      <Progress
        className="progress"
        role="progressbar"
        aria-label="Knowledge in this topic"
        aria-valuenow={`${skill.limit}`}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <ProgressBar
          className="progress-bar"
          style={{ width: `${skill.limit}%` }}
        />
      </Progress>
    </Topic>
  );
}

export default SkillTopic;
