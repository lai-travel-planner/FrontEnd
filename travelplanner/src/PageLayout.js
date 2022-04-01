import { Link, useLocation } from "react-router-dom";
import { Row, Col, Layout, Space, Button, Menu } from "antd";

const { Header, Content } = Layout;

const getSelectedKey = (location) => {
  const map = {
    "/": "home",
    "/routes": "routes",
  };
  return map[location.pathname] || null;
};

const PageLayout = ({ children }) => {
  const location = useLocation();
  const selectedKey = getSelectedKey(location);

  return (
    <Layout>
      <Header>
        <div style={{ margin: "0 auto", width: "1200px" }}>
          <Row>
            <Col span={6}>
              <Link to="/">
                <span
                  style={{
                    float: "left",
                    color: "#fff",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  TRAVEL PLANNER
                </span>
              </Link>
            </Col>
            <Col span={18}>
              <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>
                <Menu.Item key="home">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="routes">
                  <Link to="/routes">Routes</Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </div>
      </Header>
      <Content style={{ background: "#fff", padding: "48px 0" }}>
        <div style={{ margin: "0 auto", width: "1200px" }}>{children}</div>
      </Content>
    </Layout>
  );
};

export default PageLayout;
