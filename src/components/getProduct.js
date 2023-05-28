import { Card, Col, Row } from "react-bootstrap";
import jwtInterceoptor from "../auth/jwtInterceoptor";
import { useEffect, useState } from "react";

const GetProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    jwtInterceoptor
      .get("http://localhost:3001/product")
      .then((response) => {
        setProduct(response.data.response);
        // console.log('data',response)

      
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      {product.length > 0 ? (
        <Row xs={1} md={2} className="g-4">
          {product?.map((products) => (
            <Col key={products?.code}>
              <Card>
                <Card.Body>
                  <Card.Title>{products?.name}</Card.Title>
                  <Card.Text>Genre: {products?.MRP}</Card.Text>
                  <img src={products.imgPath} alt="..." class="img-thumbnail"></img>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        ""
      )}
    </>
  );
};
export default GetProduct;
