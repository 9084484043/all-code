import React from 'react'
import { connect } from 'react-redux'

const User = (props) => {
    return(
        <>
            <h3> Hello! {props.user.firstName}</h3>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(User);