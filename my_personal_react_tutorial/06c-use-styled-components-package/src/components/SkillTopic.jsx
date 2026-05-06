import { styled } from "styled-components";

const Topic = styled.div`
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px 6px #bbb;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const TopicHeading = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: capitalize;
`;
const Progress = styled.div``;
const ProgressBar = styled.div``;

function SkillTopic({ heading, limit }) {
  return (
    <Topic>
      <TopicHeading>{heading}</TopicHeading>
      <Progress
        role="progressbar"
        aria-label="Knowledge in this topic"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <ProgressBar style={{ width: `${limit}%` }} />
      </Progress>
    </Topic>
  );
}

export default SkillTopic;
