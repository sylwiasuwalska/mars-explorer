import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

const FormContainer = styled(Form)`
  margin: 40px auto;
  justify-content: center;
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const InputContainer = styled(Form.Control)`
  //min-width: 60%;
`;

function Input(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <FormContainer inline onSubmit={props.handleSubmit}>
      <Form.Label>🔍</Form.Label>
      <InputContainer
        ref={inputRef}
        type="date"
        min="1995-06-16"
        placeholder="Enter the date in the YYYY-MM-DD format"
        name="date"
        required
        pattern="\d{4}-\d{2}-\d{2}"
      />

      <Button variant="outline-dark" type="submit">
        Submit
      </Button>
    </FormContainer>
  );
}

export default Input;
