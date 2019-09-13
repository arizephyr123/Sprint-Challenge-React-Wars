import React from "react";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  Table
} from "reactstrap";

const CharCard = props => {
  return (
    <Col xs="6">
      <Card outline color="warning">
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <Table dark>
        <thead>Stats:
        </thead>
        <thead>
          <tr>
            <th>Height</th>
            <th>Mass</th>
            <th>Eye Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.height}</td>
            <td>{props.mass}</td>
            <td>{props.eye_color}</td>
          </tr>
          </tbody>
      </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CharCard;
