import React from 'react'
import { Row, Col} from 'react-bootstrap';
function Cards() {
  return (
    <>
        <Row className='cards'>
          <Col xs={12} md={3} className="p-3 border rounded bg-light text-dark">
            Orders
          </Col>
          <Col xs={12} md={3} className="p-3 border rounded bg-light text-dark">
            Pending
          </Col>
          <Col xs={12} md={3} className="p-3 border rounded bg-light text-dark">
            Purchase
          </Col>
          <Col xs={12} md={3} className="p-3 border rounded bg-light text-dark">
            Performance
          </Col>
        </Row>
    </>
  )
}

export default Cards