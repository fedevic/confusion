import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({comments}){
    let commentsArray = [];
    
    if(comments != null){
        commentsArray = comments.map((comment) => {
        return( 
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
            <li key={comment.id} >
                {comment.description} <br/> 
                --{comment.name}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </li>
            </div>
        )});
    }
    else {
        return(
            <div></div>
        );
    }

    return(
        <ul className="list-unstyled">
            {commentsArray}
        </ul>
    );
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

