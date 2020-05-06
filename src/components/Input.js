import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import {today} from "../helpers"


const FormContainer = styled(Form)`
  color: ${(props) => props.theme.secondary};
  margin: 40px auto;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const InputGroupSquare = styled(InputGroup.Text)`
  border-radius: 0;
`;

const ButtonSquare = styled(Button)`
  border-radius: 0;
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
          <Form.Label>Set the date to see the picture:</Form.Label>
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroupSquare id="inputGroupPrepend" className="no-radius"><span role="img" aria-label="search icon">🔍</span></InputGroupSquare>
          </InputGroup.Prepend>
          <InputContainer
            ref={inputRef}
            type="date"
            min="1995-06-16"
            max={today}
            name="date"
            required
            pattern="\d{4}-\d{2}-\d{2}"
          />{" "}
          <ButtonSquare variant="secondary" type="submit">
            Show picuture
          </ButtonSquare>
        </InputGroup>

      </FormContainer>
    </Container>
  );
}

export default Input;
