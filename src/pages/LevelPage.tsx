import Button from "@/components/atom/Button";
import styled from "@emotion/styled";

const levels = ["Easy", "Normal", "Hard"];

const LevelPage = () => {
  return (
    <Box>
      {levels.map((level) => (
        <Button
          key={level}
          size="large"
          text={level}
          background="rgba(255, 255, 255, 0.8)"
        />
      ))}
    </Box>
  );
};

export default LevelPage;

const Box = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;
