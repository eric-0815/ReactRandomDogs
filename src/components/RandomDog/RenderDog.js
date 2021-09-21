import RandomDog from "./RandomDog";
import { Col, Container, Row } from "react-bootstrap";
function RenderDog() {
  return (
    <Container>
      <Row>
        <Col sm>
          <RandomDog />
        </Col>
        <Col sm>
          <RandomDog />
        </Col>
        <Col sm>
          <RandomDog />
        </Col>
        <Col sm>
          <RandomDog />
        </Col>
      </Row>
      <Row>
        <Col sm>
          <RandomDog />
        </Col>
        <Col sm>
          <RandomDog />
        </Col>
        <Col sm>
          <RandomDog />
        </Col>
        <Col sm>
          <RandomDog />
        </Col>
      </Row>
    </Container>
  );
}
export default RenderDog;
