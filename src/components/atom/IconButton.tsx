import styled from "@emotion/styled";
import mic from "@/assets/icons/mic.svg";

const IconButton = () => {
  return <StyledIconButton type="button" />;
};

export default IconButton;

const StyledIconButton = styled.button`
  width: 55px;
  height: 55px;
  padding: 7px;
  border: none;
  border-radius: 50px;
  background: #d9d9d9;
  cursor: pointer;

  ::before {
    content: "";
    display: inline-block;
    width: 41px;
    height: 41px;
    background: ${`url("${mic}")`} no-repeat center center;
  }
`;
