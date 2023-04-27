import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addCount, addUserFirstName, reduceCount } from './actions'
import User from './components/User'

const App = (props) => {   
    const add = () => {
        props.addCounter();
    }

    const reduce = () => {
        props.reduceCounter();
    }

    const addUserName = () => {
        props.addFirst('Anuj');
    }

    return(
        <>
        <h3>Heading One</h3>
        <p>My Counter : {props.counter.count}</p> 
        <button onClick={add}> Add Count </button>
        <button onClick={reduce}> Reduce Count</button>
        <button onClick={addUserName}> Add User</button>
        <hr/>
        {props.user.firstName && <User/>}
        </>
    )
}

const mapStateToProps = state => {  
    return {
        counter : state.counter,
        user : state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCounter : () => dispatch(addCount()),
        reduceCounter : () => dispatch(reduceCount()),
        addFirst : (name) => dispatch(addUserFirstName(name))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);