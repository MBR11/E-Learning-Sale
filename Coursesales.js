import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Coursesales extends Component{
    constructor(props){
        super(props);
        this.state={total:0}
        this.totalAmount=this.totalAmount.bind(this);
    }
    
    totalAmount(price){
        this.setState({total:this.state.total+price})
    }
    
    render(){
        
       console.log(this.props.items);
       var courses = this.props.items.map((item,i)=>{
           return<Course name={item.name} price={item.price} key={i} totalAmount={this.totalAmount} active={item.active}/>
       })

        return(
                <div id="courses">
                    
                    {courses}
                    <br>
                    </br>
                    <br>
                    </br>
                    <p id="total">Total <b>{this.state.total}</b></p>

                </div>
           
            )
    }
}

class Course extends Component{
    constructor(props){
        super(props);
        this.state={active:false};
        this.clicker=this.clicker.bind(this);
    }

    clicker(){
        var active =! this.state.active;
        this.setState({active:active})
        this.props.totalAmount(active? this.props.price : -this.props.price)
    }

    render(){
        return(
            <div>
                <p className={this.state.active?'active':''} onClick={this.clicker}> 
                {this.props.name}
                <b>{this.props.price}</b>
                </p>
                
            </div>
        )
    }
}

export default Coursesales;