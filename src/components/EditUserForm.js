import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { EditUser } from "../actions/userActions";

function EditUserForm({ userData, deleteUser, handleEdit, hide }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(userData.name);
  const [team, setTeam] = useState(userData.team);
  const [position, setPosition] = useState(userData.position);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditUser({ id: userData.id, name, team, position }));
    setName("");
    setTeam("");
    setPosition("");
    hide();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Team</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Team Name"
          value={team}
          onChange={(e) => {
            setTeam(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Position</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Position"
          value={position}
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

export default EditUserForm;
