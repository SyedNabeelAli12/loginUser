import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "500px", minWidth: "600px" }}
      >
        <Card>
          <Card.Body>
            <Card.Text className="text-center">
              <b>Demo For React JS Authentication With JWT</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Home;
