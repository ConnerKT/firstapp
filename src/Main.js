import HornedBeast from "./HornedBeast";
import Data from "./data.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main(props) {
  let beasts = Data;

  let beastsHTML = [];
  for (let i = 0; i < beasts.length; i++) {
    let beastData = beasts[i];
    let beastHTML = (
      <Col xs={12} sm={6} md={4} lg={3}>
         <HornedBeast
        id={beastData.id}
        imageUrl={beastData.image_url}
        title={beastData.title}
        description={beastData.description}
        style={{ width: "100", height: "100" }}
      />
      </Col>
     
    );
    beastsHTML.push(beastHTML);
  }
  return (
    // Setting a container for the horned beast so we can style it
    <Container>
      <Row>
        {beastsHTML}
      </Row>
    </Container>
  );
}

export default Main;
