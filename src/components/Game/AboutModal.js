import React, {component} from 'react';
import { Component } from 'react';
import "./ui.css";
import { Modal, Button } from "../../../node_modules/react-bootstrap";
import "./bootstrap-3.4.1-dist/css/bootstrap.min.css";
import prateek_img from "./images/prateek.jpg";
import suhas_img from "./images/suhas.jpg";
import yash_img from "./images/yash.jpg";
import rahul_img from "./images/rahul.jpeg";
import atharva_img from "./images/atharva.jpeg";

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
              <Modal.Title>Marauders' Chess</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1 class="font-weight-bold text-center">Contributors</h1>
              {/* <p class="h3" class="font-weight-bold">
                              Yash Kumar <a href = "https://github.com/yashkmr99" target="_blank" rel="noopener noreferrer"><i class = "fa fa-github"></i></a>
                              <br></br>
                              Suhas Prabhandam <a href = "https://github.com/Suhas1998" target="_blank" rel="noopener noreferrer"><i class = "fa fa-github"></i></a>
                              <br></br>
                              Prathik S Nayak <a href = "https://github.com/PSN221B" target="_blank" rel="noopener noreferrer"><i class = "fa fa-github"></i></a>
                              
                          </p> */}
              <div class="d-flex justify-content-around">
                <div class="profile-card-2">
                  <img src={prateek_img} alt="Person" class="card__image"></img>
                  <p class="card__name">Prathik S Nayak</p>
                  <ul class="social-icons">
                    <li>
                      <a
                        href="https://www.facebook.com/prathik.nayak.8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/PSN221B"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/prathik-s-nayak/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="profile-card-2">
                  <img src={suhas_img} alt="Person" class="card__image"></img>
                  <p class="card__name">P. Suhas</p>
                  <ul class="social-icons">
                    <li>
                      <a
                        href="https://www.facebook.com/prabhandam.suhas"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Suhas1998"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/suhas23/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="profile-card-2">
                  <img src={yash_img} alt="Person" class="card__image"></img>
                  <p class="card__name">Yash Kumar</p>
                  <ul class="social-icons">
                    <li>
                      <a
                        href="https://www.facebook.com/yashkmr99"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/yashkmr99"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/yashkmr99/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="profile-card-2">
                  <img src={atharva_img} alt="Person" class="card__image"></img>
                  <p class="card__name">Atharva Shrawge</p>
                  <ul class="social-icons">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100004603818310"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/haxer-max"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/atharva7/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="profile-card-2">
                  <img src={rahul_img} alt="Person" class="card__image"></img>
                  <p class="card__name">Rahul Aggarwal</p>
                  <ul class="social-icons">
                    <li>
                      <a
                        href="https://www.facebook.com/rahulrsaggarwal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/rahul130500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rahul130500/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div class="justify-content-center d-flex github-footer">
                <a
                  class="btn btn-dark"
                  href="https://github.com/yashkmr99/marauders-chess-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-github fa-2x"></i>
                  <span class="icon_text">
                    Show your love by giving a Star to our Github Repository
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