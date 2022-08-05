import React,{Component} from 'react';
import Header from './Header';
import './AddSubscriber.css'; 
import {Link} from 'react-router-dom';
class AddSubscriber extends Component{
    constructor(){
        super();
        this.state={
            id:0,
            name:'',
            phone:''
        }
    }
    inputChangedHandler=(e) =>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
    }
    onFormSubmitted=(e)=>{
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id:0,name:'',phone:''});
        this.props.history.push("/");
    }
    render(){
        const {name,phone}=this.state;
        return(
            <div>
                <Header heading="Add Subscriber"/>
                <div className='component-body-container'>
                    <Link to='/'>
                        <button className='custom-btn'>Back</button>
                    </Link>
                    <form onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor='name'>Name:</label><br />
                        <input id="name" type="text" name="name" onChange={this.inputChangedHandler}/>
                        <label htmlfor="phone">Phone Number</label>
                        <input id="phone" type="number" name="phone" onChange={this.inputChangedHandler}/>
                        <div>
                            <span>Subscriber to be added:</span>
                            <span>Name:{name}</span>
                            <span>Phone:{phone}</span>
                        </div>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddSubscriber;