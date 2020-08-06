import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay } from "reactstrap";
import  DishDetail   from './DishdetailComponent';

class MenuComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
           selectedDish : null
        }
    }


    onDishSelected(dish){
        this.setState( {selectedDish : dish});
    }

    renderComments(comments){
        if(comments != null) {
            
           const arrayC = comments.comments.map((comment) => {



            const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let date_time = comment.date;
            let Month = date_time.slice(5,7); 
            let Day = date_time.slice(8,10);
            let Year = date_time.slice(0,4);
            let date = months[Month - 1] + " " + (parseInt(Day) + 1) + ", " + Year;
  
                return(
                    
                   <div>
                       
                      
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {date}</p>
                       
                    </div>
                     
                );
            });

            return (
                <>
                <h4>Comments</h4>
                {arrayC}
                </>
            )

        }else{
            return(
                <div></div>
            );
        }

      

    }
   

    render() {

        const menu = this.props.dishes.map( (dish) => {
            return (
                
                <div key = {dish.id} className = "col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)}>
 
                        <CardImg width="100%" src = {dish.image} alt = {dish.name} ></CardImg>
      

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                           
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className = "container">
                <div className = "row">
               
                        {menu}
 
                </div>

                
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    <DishDetail 
                      dish = {this.state.selectedDish}
                    />
                  </div>

                  <div className="col-12 col-md-5 m-1">
                                
                                {this.renderComments(this.state.selectedDish)}
                       
                      </div>

                 </div>


                      
             

              
               

            </div>
        );
    }

}


export default MenuComponent;