import React,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router,Route } from 'react-router-dom';


class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state={
            subscribersList: [
                {
                    id:1,
                    name:"Kesav",
                    phone:1111111111
                },
                {
                    id:2,
                    name:"Technow",
                    phone:2222222222
                }
            ]
        }
    }

    deleteSubscriberHandler=(subscriberId)=>{
        let subscribersList=this.state.subscribersList;
        let subscriberIndex=0;
        subscribersList.forEach(function(subscriber,index){
            if(subscriber.id===subscriberId){
                subscriberIndex=index;
            }
        },this);
        let newSubscribers=subscribersList;
        newSubscribers.splice(subscriberIndex,1);
        this.setState({subscribers:newSubscribers});
    }

    addSubscriberHandler =(newSubscriber) => {
        let subscribersList=this.state.subscribersList;
        if(subscribersList.length>0){
            newSubscriber.id=subscribersList[subscribersList.length -1].id +1;
        } else{
            newSubscriber.id=1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList:subscribersList});
        }
    render(){
        return(
            <Router>
            <div>
            <Route path='/' render={(props)=> <ShowSubscribers  {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
            <Route path='/add' render={({history},props)=> <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
            </div>
            </Router>
            )
    }
}

export default PhoneDirectory;