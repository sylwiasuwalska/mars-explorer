import React from "react";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";

const CardContainer = styled.div`
  text-align: center;
  padding: 2vh;
  background-color: ${(props) => props.theme.dark};
`;

const Image = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: 0 0;
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
    <CardContainer url={props.pictureData.url}>
      <Container>
        <Row>
          <Col>
            <Title>{props.pictureData.title}</Title>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
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
      </Container>
    </CardContainer>
  );
}

export default PictureCard;
