// Parts/Map.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import '../App.css';

const MapLayout = () => {
  //abhi usestate wala url ni chal rha isko daikh lin
  const [mapSrc, setMapSrc] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.127359026652!2d74.25763187407803!3d31.46568254984463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919022a17a84c4b%3A0x74ef403a4d0bb9a4!2sExpo%20Centre%20Lahore!5e0!3m2!1sen!2s!4v1720648553799!5m2!1sen!2s");
  const handleUpdateLocation = () => {
    const newLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4211.593861988399!2d74.40693140766919!3d31.4702551629709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391908a0ffffffff%3A0x4ae21bc6f9a6cfd5!2sLUMS%20School%20Of%20Education!5e0!3m2!1sen!2s!4v1720703911223!5m2!1sen!2s" 
    setMapSrc(newLocation);
  };
  const handlePinLocation = () => {
    console.log('Pinning location...');
  };
  const handleUpdate = () => {
    console.log('Updating...');
  };
  return (
    <Container fluid>
      <h1 className='heading'>Dashboard</h1>
      <Row>
        <Col xs={12} md={3} className="p-3 border rounded bg-light black-text">
          Orders
        </Col>
        <Col xs={12} md={3} className="p-3 border rounded bg-light black-text">
          Pending
        </Col>
        <Col xs={12} md={3} className="p-3 border rounded bg-light black-text">
          Purchase
        </Col>
        <Col xs={12} md={3} className="p-3 border rounded bg-light black-text">
          Performance
        </Col>
      </Row>
      <p>Maps</p>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.127359026652!2d74.25763187407803!3d31.46568254984463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919022a17a84c4b%3A0x74ef403a4d0bb9a4!2sExpo%20Centre%20Lahore!5e0!3m2!1sen!2s!4v1720648553799!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="button-container">
              <Button variant="primary" onClick={handleUpdateLocation}>Update Location</Button>{' '}
              <Button variant="secondary" onClick={handlePinLocation}>Pin Location</Button>{' '}
              <Button variant="success" onClick={handleUpdate}>Update</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MapLayout;
