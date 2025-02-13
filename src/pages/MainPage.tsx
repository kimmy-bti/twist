import Button from "@/components/atom/Button";
import styled from "@emotion/styled";

const MainPage = () => {
  return (
    <>
      <Title>혀를 꼬아라</Title>
      <Button
        size="medium"
        text="START"
        background="rgba(255, 255, 255, 0.8)"
      />
    </>
  );
};

export default MainPage;

const Title = styled.h1`
  font-size: 155px;
  font-weight: 500;
  margin-bottom: 80px;
`;
