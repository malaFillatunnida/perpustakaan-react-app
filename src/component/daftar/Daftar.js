import React from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";

import { useState } from "react";
const Header = ({ setRefresh }) => {
  const [nama, setnama] = useState("");
  const [kelas, setkelas] = useState("");
  const [buku, setbuku] = useState("");

  const addTodo = () => {
    const newTodo = { nama, buku, kelas, done: false };

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      setnama("");
      setkelas("");
      setbuku("");
      setRefresh(true);
    });
  };

  return (
    <Card
      className="text-light"
      style={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#008080",
        marginLeft: "30px",
        width: "100%",
      }}
    >
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Nama
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="nama"
                  placeholder="Masukkan Nama"
                  required
                  value={nama}
                  onChange={(e) => setnama(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Kelas
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name="jumlah"
                  placeholder="Masukkan Kelas"
                  required
                  value={kelas}
                  onChange={(e) => setkelas(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Buku
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="harga"
                  placeholder="Masukkan Nama Buku"
                  required
                  value={buku}
                  onChange={(e) => setbuku(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2"></Form.Label>
              <Col sm="10">
                <Button variant="outline-light" onClick={addTodo} type="submit">
                  Tambah
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};
export default Header;
