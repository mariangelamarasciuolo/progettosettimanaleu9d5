import React from "react";
import "../App.css";
import { Card, Col, Container, Row, Image } from "react-bootstrap";

const Weather = ({ weatherData }) => {
  return (
    <section className="vh-100">
      <Container className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col md={10} lg={8} xl={6}>
            <Card>
              <div className="bg-image">
                <Image
                  src="https://www.ilmeteo.it/portale/files/giornale/medium/prossime-ore-111222_0.jpg"
                  className="card-img"
                  alt="weather"
                />
              </div>
              <Card.Body className="p-5">
                <h4 className="mb-0">{weatherData.name}</h4>
                <p className="display-2 my-3">{weatherData.main.temp} &deg;C</p>
                <Card.Text>
                  Feels Like: <strong>{weatherData.main.feels_like} &deg;C</strong>
                </Card.Text>
                <Card.Text>
                  Pressure: <strong>{weatherData.main.pressure} &deg;C</strong>
                </Card.Text>
                <Card.Text>
                  Humidity: <strong>{weatherData.main.humidity} &deg;C</strong>
                </Card.Text>
                <h5>{weatherData.weather[0].main}</h5>
                <p>{weatherData.weather[0].description}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Weather;
