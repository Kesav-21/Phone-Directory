import React,{Component} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddSubscriber from './AddSubscriber';
import showSubscribers from './showSubscribers';


class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state={
            subscribersList: [
                {
                    id:1,
                    name:"Kesav",
                    phone:9023198923
                },
                {
                    id:2,
                    name:"Technow",
                    phone:9201349012
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
            <BrowserRouter>
            <Routes>
            <Route path='/' element={(props)=> <showSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
            <Route path='/add' element={({history},props)=> <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
            </Routes>
            </BrowserRouter>
            )
    }
}

export default PhoneDirectory;