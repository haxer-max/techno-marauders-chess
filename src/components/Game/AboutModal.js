import React, {component} from 'react';
import { Component } from 'react';
import "./ui.css";
import { Modal, Button } from "../../../node_modules/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

 export class AboutModal extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button className="about" color="black" onClick={this.handleShow}>
            About
          </Button>
  
          <Modal style={{opacity:1}} show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title><h1>Marauders' Chess</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <h4>Marauders' Chess</h4>

            </Modal.Body>
            <Modal.Footer>
              <div class="justify-content-center d-flex github-footer">
                <a
                  class="btn btn-dark"
                  href="https://github.com/haxer-max/techno-marauders-chess"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-github fa-2x"></i>
                  <span class="icon_text">
                    Show your love by giving a Star on Github
                  </span>
                </a>
              </div>
              {/* <Button variant="primary" onClick={this.handleClose}>
                              Save Changes
                          </Button> */}
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }