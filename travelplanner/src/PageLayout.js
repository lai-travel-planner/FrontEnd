import { Layout } from "antd";

const { Header, Content } = Layout;

const Logo = () => (
  <div>
    <a href="/" style={{ color: "#fff", fontSize: "24px", fontWeight: "bold" }}>
      TRAVEL PLANNER
    </a>
  </div>
);

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <div style={{ margin: "0 auto", width: "1200px" }}>
          <Logo />
        </div>
      </Header>
      <Content style={{ background: "#fff", padding: "48px 0" }}>
        <div style={{ margin: "0 auto", width: "1200px" }}>{children}</div>
      </Content>
    </Layout>
  );
};

export default PageLayout;
