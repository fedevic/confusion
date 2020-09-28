import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import  CommentForm from './CommentFormComponent';

function RenderComments({comments}){
    let commentsArray = [];
    
    if(comments != null){
        commentsArray = comments.map((c) => { 
            return(    
                <li key={c.id} >
                    {c.comment} <br/> 
                    --{c.name}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}
                </li>
            );
        });

        return( 
        <div className="col-12 col-md-5 m-1">                
            <ul className="list-unstyled">
            <h4>Comments</h4>
                {commentsArray}
            </ul>            
            <CommentForm/>
        </div>
        );
    }
    else {
        return(
            <div></div>
        );
    }

    
}

function RenderDish({dish}){
    return( 
        <div className="col-12 col-md-5 m-1">
            <Card >
                <CardImg  src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>    
            </Card>
        </div>
    );
}

const DishdetailComponent =  (props) => {
    var dish = props.dish;

    if(dish != null){
        return(
            <div className="container">
                <div className="row">
                 <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
                </div>
                <div className="row">
                     <RenderDish dish={props.dish}/>     
                     <RenderComments comments={props.comments}/>
                </div>
                
            </div>
            
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

export default DishdetailComponent;

