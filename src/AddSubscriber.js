import React,{Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';
import './common.css';
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
                    <h3>Enter the Details:</h3>
                    <form className='headinfo' onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor='name'>Name:</label>
                        <input id="name" type="text" name="name" onChange={this.inputChangedHandler} placeholder="Name"/><br />
                        <label htmlfor="phone">Phone Number:</label>
                        <input id="phone" type="text" name="phone" onChange={this.inputChangedHandler} placeholder="Phone Number"/>
                        <div className='detail-cont'>
                            <center>Subscriber to be added:</center>
                            <span>Name:<br /><span className='tbox'>{name}</span></span><br />
                            <span>Phone:<br /><span className='tbox'>{phone}</span></span><br />
                        </div>
                        <div className='btn-add'>
                        <button className='add-btn' type="submit">Add</button>
                        <Link to='/'>
                        <button className='add-btn'>Back</button>
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddSubscriber;