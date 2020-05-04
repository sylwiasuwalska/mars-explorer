import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

const CardContainer = styled.div`
  text-align: center;
  margin-bottom: 2vh;
`;

const Image = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center; 
  height: 600px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.secondary};
`;

const Title = styled.h2`
  color: ${(props) => props.theme.secondary};
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.secondary};
  text-align: justify;
`;
const Link = styled.a`
  background-color: ${(props) => props.theme.danger};
  color: ${(props) => props.theme.secondary};
  margin: 10px;
  padding: 10px 20px;
  text-decoration: none;
  
  &:hover {
  text-decoration: none;
  }
`;

function PictureCard(props) {
  return (
    <CardContainer>
      <Row>
        <Col sm={8}>
          <Title>{props.pictureData.title}</Title>
          <Image url={props.pictureData.url} />
        </Col>
        <Col sm={4}>
          <Paragraph>Explanation: {props.pictureData.explanation}</Paragraph>
          <Paragraph>
            Copyright:{" "}
            {props.pictureData.copyright
              ? props.pictureData.copyright
              : "unknown"}
          </Paragraph>
          <Link href={props.pictureData.hdurl}>HD version</Link>
        </Col>
      </Row>
    </CardContainer>
  );
}

export default PictureCard;
