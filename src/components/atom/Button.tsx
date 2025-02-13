import styled from "@emotion/styled";

interface IButtonProps {
  size: "small" | "medium" | "large";
  background?: string;
  text?: string;
}

const Button = ({ size, background, text }: IButtonProps) => {
  return (
    <StyledButton type="button" size={size} background={background}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<IButtonProps>`
  ${({ size }) => {
    switch (size) {
      case "small":
        return "width: 200px; height: 84px; border-radius: 8px !important; font-size: 20px; line-height: 20px !important;";
      case "medium":
        return "width: 425px; height: 154px; font-size: 100px;";
      case "large":
        return "width: 860px; height: 154px; font-size: 100px;";
    }
  }}
  font-weight: 500;
  border-radius: 20px;
  background: ${({ background }) => background || "#FFFFFF"};
  padding: 20px;
  color: #000000;
  border: none;
  line-height: 64px;
  cursor: pointer;
`;
