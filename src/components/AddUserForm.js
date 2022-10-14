import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, connect } from "react-redux";
import { AddNewUser } from "../actions/userActions";
import { doc, setDoc, serverTimestamp} from "firebase/firestore";
// import {
//   collection,
//   addDoc,
  
// } from "firebase/firestore";
import { db } from "../Firebase/config";

function AddUserForm({ AddNewUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // AddNewUser({ name, email, gen, id: uuidv4() });
    setName("");
    setEmail("");
    setGen("");

    const items = {
      name,
      email,
      gen,
      timestamp: serverTimestamp(),
      id: uuidv4()
    }


    // await setDoc(doc(db, "users", items.id),items);
    try {
      const docRef = await setDoc(doc(db, "users", items.id), items);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Name"
          value={name}
          placeholder="Enter Username"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="Enter Email Address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control
          type="number"
          value={gen}
          placeholder="Enter Gen"
          onChange={(e) => {
            setGen(e.target.value);
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
