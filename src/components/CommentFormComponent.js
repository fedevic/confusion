import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Label, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentFrom extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        }); 
    }

    handleSubmit(values){
        console.log("Current State is : " + JSON.stringify(values));
        alert(JSON.stringify(values));        
    }

    render(){
        return(
            <>
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg"> Submit Comment :)</span>
            </Button>
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    Your Comment
                </ModalHeader>
                <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>                            
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={2}>Rating</Label>
                                    <Col md={10}>
                                        <Control.select model=".rating" name="rating" id="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="fullname" md={2}>Your Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".fullname" id="fullname" name="fullname"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                            />
                                            <Errors className="text-danger"
                                            model=".fullname"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2',
                                                maxLength: 'Must be 15 char or less'
                                            }}
                                            />
                                    </Col>                                
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment" md={2}>Comment</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            rows="6"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size:10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                        Submit
                                        </Button>
                                    </Col>
                                </Row>
                        </LocalForm> 
                </ModalBody>
            </Modal>
            </>
        );
    }
}

export default CommentFrom;