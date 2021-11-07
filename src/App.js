import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Container>
    <br />
      <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
      <br />
      <br />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Personaje</th>
            <th>Anime</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
        <tr>
              <td>1</td>
              <td>Naruto Uzumaki</td>
              <td>Naruto Shipudent</td>
              <td>
                <Button
                  color="primary"
                 
                >
                  Editar
                </Button>{" "}
                <Button color="danger" >Eliminar</Button>
              </td>
            </tr>
        </tbody>
      </Table>
    </Container>

    <Modal >
      <ModalHeader>
       <div><h3>Editar Registro</h3></div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>
           Id:
          </label>
        
          <input
            className="form-control"
            readOnly
            type="text"
            value={this.state.form.id}
          />
        </FormGroup>
        
        <FormGroup>
          <label>
            Personaje: 
          </label>
          <input
            className="form-control"
            name="personaje"
            type="text"

          />
        </FormGroup>
        
        <FormGroup>
          <label>
            Anime: 
          </label>
          <input
            className="form-control"
            name="anime"
            type="text"

          />
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <Button
          color="primary"
        >
          Editar
        </Button>
        <Button
          color="danger"

        >
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>



    <Modal isOpen={this.state.modalInsertar}>
      <ModalHeader>
       <div><h3>Insertar Personaje</h3></div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>
            Id: 
          </label>
          
          <input
            className="form-control"
            readOnly
            type="text"
            value={this.state.data.length+1}
          />
        </FormGroup>
        
        <FormGroup>
          <label>
            Personaje: 
          </label>
          <input
            className="form-control"
            name="personaje"
            type="text"

          />
        </FormGroup>
        
        <FormGroup>
          <label>
            Anime: 
          </label>
          <input
            className="form-control"
            name="anime"
            type="text"
          />
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <Button
          color="primary"

        >
          Insertar
        </Button>
        <Button
          className="btn btn-danger"

        >
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  </>
  );
}

export default App;

