import React, {component} from 'react';
import { Component } from 'react';
import "./ui.css";
import { Modal, Button } from "../../../node_modules/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import knight_move from "./images/knight_move.png";
import bishop_move from "./images/bishop_move.png";

export class RulesModal extends Component {
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
          <Button className="about" onClick={this.handleShow}>
            Rules
          </Button>
  
          <Modal style={{opacity:1}} show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Rules</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    
                    
                    <h3>Basic Instructions</h3>
                    <ul>
                      <li>
                        Marauders Chess is a strategic game, where the players
                        play against each other with an objective to kill the
                        opponent’s King passing through various mazes.
                      </li>
                      <li>
                        The Main Board consists of 6 smaller rotatable boards,
                        each having a 5x5 maze with some walls restricting the
                        movement of the pieces.
                      </li>
                      <li>
                        In each turn, a player can choose to either move one of
                        his pieces or rotate one of the 6 boards 
                        (Clockwise for white and Anti-Clockwise for black).
                      </li>
                      <li>
                        The game ends if one of the player kills the opponents
                        King or the time of one of the players completely drains
                        out.
                      </li>
                    </ul>

                    <h3>Valid Moves of Pieces</h3>
                    <ul>
                      <li>
                        All the moves of the pieces are same as traditional chess
                        pieces.
                      </li>
                      <li>
                        A Rook, King and Bishop can not move if a wall is blocking
                        in its direction of movement where as a Knight has the
                        ability to cross atmost 1 wall in their movement.
                      </li>
                      <li>
                        The move of a Knight is considered as two steps in one
                        direction and then one step in perpendicular direction
                        forming a L shape. Thus, this path is considered while
                        checking the number of blocking walls in the path. (A is
                        valid but B is not.)
                      </li>
                    </ul>
                    <img src={knight_move} class="center"></img>

                    <h3>Movement of Bishop:</h3>
                    <ul>
                      <li>
                        The bishop cannot cross a cornered wall as shown in move
                        C.
                      </li>
                      <li>
                        The bishop can however cross a single wall from the edge
                        as shown in move A or B.
                      </li>
                    </ul>
                    <img src={bishop_move} class="center"></img>
                    <h3>How to play:</h3>
                    <ul>
                      <li>
                        To initiate a move, select the piece and then select the
                        destination cell. The piece can be moved only if it is its
                        valid movement and no other piece or wall is blocking its
                        way.
                      </li>
                      <li>
                        To rotate a board, just click on the respective Rotate
                        button next to that board.
                      </li>
                      <li>
                        Pay attention to the log message at the bottom-right of
                        the screen for the match updates.
                      </li>
                    </ul>


              </div>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }
  