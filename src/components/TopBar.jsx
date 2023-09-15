import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Weather from "./Weather";

const TopBar = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const weatherInfo = useSelector((state) => state.weather.content);

  const url = "https://api.openweathermap.org/data/2.5/weather?q=";

  const APIKey = "4b429cf7d9ee1c8aff67429860716d6a";

  const onHandleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url + query + "&appid=" + APIKey);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: "GET_WEATHER_INFO",
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Epiweather</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="text"
            value={query}
            onChange={onHandleChange}
            placeholder="Search city..."
            className="mr-sm-2"
          />
          <Button variant="outline-info" className="ml-2" onClick={handleSubmit}>
            Search
          </Button>
        </Form>
      </Navbar>
      {weatherInfo && <Weather weatherData={weatherInfo} />}
    </div>
  );
};

export default TopBar;
