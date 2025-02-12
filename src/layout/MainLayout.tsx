import styled from "@emotion/styled";
import bg from "@/assets/images/background.png";
import { ReactNode } from "react";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
};

export default MainLayout;

const Layout = styled.main`
  background: ${`url("${bg}")`} no-repeat center/cover;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
`;
