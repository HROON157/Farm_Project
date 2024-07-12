import React from 'react'
import { Button, } from 'react-bootstrap';

function Buttons(props) {
  return (
    <>
         <div className="button-container">
                <Button variant="primary" onClick={props.handleUpdateLocation}>Update Location</Button>{' '}
                <Button variant="secondary" onClick={props.handlePinLocation}>Pin Location</Button>{' '}
                <Button variant="success" onClick={props.handleUpdate}>Update</Button>
              </div>
    </>
  )
}

export default Buttons