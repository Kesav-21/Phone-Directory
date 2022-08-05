import React,{Component} from "react";
import Header from "./Header";
import './showSubscribers.css';
import {Link} from 'react-router-dom';

class showSubscribers extends Component {
  onDeletedClick=(subscriberId)=>{
    this.props.deleteSubscriberHandler(subscriberId)
  }
  render(){
 return (
    <div>
    <Header heading="Phone Directory"/>
     <div className="container">
     <Link to='/add'><button className="btn add-btn">ADD</button></Link>
     <div className="detail-container heading-container">
      <span className="detail-item name-heading">Name</span>
      <span className="detail-item phone-heading">Phone Number</span>
     </div>
      {
        this.props.subscriberList.map(sub =>{
          return <div key={sub.id} className="detail-container">
            <span className="detail-item">{sub.name}</span>
            <span className="detail-item">{sub.phone}</span>
            <button className="detail-item dlt-btn" onClick={this.onDeletedClick.bind(this,sub.id)}>Delete</button>
            </div>
        }) 
      }
      </div>
     </div>
  );
}
}

export default showSubscribers;
