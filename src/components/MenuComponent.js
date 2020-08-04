import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import  DishdetailComponent  from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            selectedDish: null         
        }
        console.log('Constructor invocado.')
    }

    componentDidMount(){
        console.log('ComponentDidMount invocado.')
    }

    onDishSelect(dish){
        this.setState({ selectedDish: dish });
    }    

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>                
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        console.log('Renderizado invocado.')

        return (
          <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
                {/* {this.renderDish(this.state.selectedDish)} */}
                <DishdetailComponent selectedDish={this.state.selectedDish}/>
            </div>
          </div>
        );
    }
}

export default Menu;

