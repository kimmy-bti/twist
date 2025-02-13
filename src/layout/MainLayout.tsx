import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import bg from "@/assets/images/background.png";

const MainLayout = () => {
  return (
    <Layout>
      <Content>
        <Outlet />
      </Content>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
