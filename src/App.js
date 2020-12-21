
import React ,{useEffect,useState}from "react";
import {Header} from "./Components";
import {Home} from "./Pages/Home";
import {Route} from "react-router-dom";
import {Cart} from "./Pages/Cart";
import axios from 'axios'
import {connect} from "react-redux";
import {setPizza} from "./redux/actions/actionCreatorPizza";


function App(props) {
    useEffect(async ()=>{
        const result = await axios.get(`http://localhost:3002/pizz/`);
          props.setPizza(result.data)
    },[]);
    console.log(props);
    return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route path ="/" render={()=><Home data={props.items} />} exact/>
          <Route path ="/cart" render={()=><Cart/>} exact/>
        </div>
      </div>
  );
}
const mapStateToProps = state =>{
    return{
        items:state.pizzas.items
    }
};
const mapDispatchToProps = dispatch=>{
    return{
        setPizza:(items)=>dispatch(setPizza(items))
    }

};
export default connect(mapStateToProps,mapDispatchToProps)(App);
