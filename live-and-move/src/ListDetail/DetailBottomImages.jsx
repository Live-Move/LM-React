import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ImageBT } from "./CSS/Detail";

function DetailBottomImages({ imageList }) {
  return (
    <Row>
      {imageList
        ? imageList.map(({ img_path, img_id }, index) => {
            return (
              <Col key={img_id + index}>
                <NavLink>
                  <ImageBT
                    src={img_path}
                    alt={`Bottom image ${index + 1}`}
                    rounded
                  />
                </NavLink>
              </Col>
            );
          })
        : ""}
    </Row>
  );
}

export default DetailBottomImages;
