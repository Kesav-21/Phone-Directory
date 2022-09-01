import React,{Component} from "react";
import Header from "./Header";
import './showSubscribers.css';
import './common.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {
  onDeletedClick=(subscriberId)=>{
    this.props.deleteSubscriberHandler(subscriberId)
  }
  render(){
 return (
    <div>
    <Header heading="Phone Directory"/>
     <div className="container">
      <span >Click the Add Button to add new contact!</span>
      <Link to='/add'>
        <button className="add-btn">ADD</button>
        </Link>
     
     <div className="detail-container heading-container">
      <span className="detail-item name-heading">Name</span>
      <span className="detail-item phone-heading">Phone Number</span>
      <span className="detail-item name-heading">Operation</span>
     </div>
      {
        this.props.subscribersList.map(sub =>{
          return <td key={sub.id} className="detail-container">
            <tr className="detail-item">{sub.name}</tr>
            <tr className="detail-item">{sub.phone}</tr>
            <tr><button className="detail-item dlt-btn" onClick={this.onDeletedClick.bind(this,sub.id)}>Delete</button></tr>
            </td>
        }) 
      }
      </div>
     </div>
  );
}
}

export default ShowSubscribers;
