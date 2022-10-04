import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, connect } from "react-redux";
import { AddNewUser } from "../actions/userActions";

function AddUserForm({ AddNewUser }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [team, setTeam] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    AddNewUser({ name, team, position, id: uuidv4() });
    setName("");
    setTeam("");
    setPosition("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Name"
          value={name}
          placeholder="Enter Player's Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Team</Form.Label>
        <Form.Control
          type="text"
          value={team}
          placeholder="Enter Team Name"
          onChange={(e) => {
            setTeam(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Position</Form.Label>
        <Form.Control
          type="text"
          value={position}
          placeholder="Enter Position"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
const mapDispatch = { AddNewUser: AddNewUser };

export default connect(null, mapDispatch)(AddUserForm);
