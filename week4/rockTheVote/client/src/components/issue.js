import React, {Component} from 'react'
import '../App.css'

  function Issue(props){
    const{
        handleChange, 
        handleSubmit, 
        btnText,
            inputs: {
                title, body
            }
        } = props

    return(
        <form onSubmit = {handleSubmit}>
            <input
            type= 'text'
            value = {title}
            name = 'issueTitle'
            onChange = {handleChange}
            placeholder = "Issue Title"/>
            <input
            type= 'text'
            value = {body}
            name = 'issueBody'
            onChange = {handleChange}
            placeholder = "Issue"/>
            <button>{btnText}</button>
        </form>
    ) 
}

export default Issue;