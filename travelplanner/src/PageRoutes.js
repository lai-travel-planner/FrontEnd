import PageLayout from "./PageLayout";
import { List, Button, Row, Col } from "antd";

const data = [
  {
    title: "Basílica de la Sagrada Família",
    description:
      "The Basílica de la Sagrada Família stands in the northern part of the city, dominating its surroundings with its 18 spindly towers soaring high above all the other buildings.",
  },
  {
    title: "Barri Gòtic (Gothic Quarter)",
    description:
      "The Gothic Quarter has been the spiritual and secular center of the city. Relics of ancient Roman buildings are still found here, but the Middle Ages are best represented by the historic monuments packed into this quarter.",
  },
  {
    title: "Casa Milà (La Pedrera)",
    description:
      "Casa Milà is also affectionately known as La Pedrera, which translates to The Stone Quarry because the building resembles an open quarry.",
  },
  {
    title: "Parc Güell: Gaudí's Surrealist Park",
    description:
      "The Park Güell includes 12 acres of landscaped gardens featuring Surrealist architectural elements created by Antoni Gaudí and eight acres of pristine woodlands.",
  },
];

const RoutesPage = () => {
  return (
    <PageLayout>
      <Row gutter={24}>
        <Col span={12}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={
                    <>
                      <p>{item.description}</p>
                      <Row gutter={8}>
                        <Col>
                          <Button type="default">Show on map</Button>
                        </Col>
                        <Col>
                          <Button type="danger">Delete</Button>
                        </Col>
                      </Row>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <div
            style={{
              display: "flex",
              background: "#ddd",
              fontSize: "20px",
              fontWeight: "bold",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            GOOGLE MAP HERE
          </div>
        </Col>
      </Row>
    </PageLayout>
  );
};

export default RoutesPage;
