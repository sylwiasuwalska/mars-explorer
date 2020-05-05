import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {Button, Container, Form, InputGroup} from "react-bootstrap";

const FormContainer = styled(Form)`
  margin: 40px auto;
  justify-content: center;
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const InputContainer = styled(Form.Control)`
  width: 200px;
`;

function Input(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container>
      <FormContainer onSubmit={props.handleSubmit}>
          <InputGroup>
          <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">🔍</InputGroup.Text>
          </InputGroup.Prepend>
        <InputContainer
          ref={inputRef}
          type="date"
          min="1995-06-16"
          name="date"
          required
          pattern="\d{4}-\d{2}-\d{2}"
        /> <Button variant="secondary" type="submit">
              Submit
          </Button>
          </InputGroup>

      </FormContainer>
    </Container>
  );
}

export default Input;
