import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor invocado.')
    }

    renderComments(comments){
        let commentsArray = [];
        
        if(comments != null){
            commentsArray = comments.map((comment) => {
            return(
                <li key={comment.id} >
                  {comment.description} <br/> 
                  --{comment.name}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
               </li>
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

    render(){
        var dish = this.props.selectedDish;

        if(dish != null){
            return(
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <Card >
                        <CardImg  src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>    
                    </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                      {this.renderComments(dish.comments)}
                    </div>
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
}

export default DishdetailComponent;

