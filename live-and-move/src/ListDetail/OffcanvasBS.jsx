import React, { useState } from 'react';
import { Image, Offcanvas } from 'react-bootstrap';
import { ButtonBS, PinIcon } from './CSS/Detail';

function OffcanvasBS(props) {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <div>
      <Offcanvas
              show={show}
              onHide={handleClose}
              style={{ width: "35em", height: "auto" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h3>배송 가능 지역.</h3>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Image
                  style={{ width: "100%", height: "auto", margin:"40px"}}
                  src="https://cdn.crowdpic.net/detail-thumb/thumb_d_DBFE2FF99E92CD9611BBD55448660FF3.png"/>
              <hr />
              <h4>당일 배송가능 지역 : 서울 <br /><hr />배송가능 지역 : 전국</h4><hr />
              </Offcanvas.Body>
            </Offcanvas>
            <ButtonBS variant="secondary" onClick={handleShow}>
                <PinIcon /> 배송 가능한 지역을 확인하세요!
              </ButtonBS>
    </div>
  );
}

export default OffcanvasBS;