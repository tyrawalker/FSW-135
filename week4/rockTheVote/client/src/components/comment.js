import React from 'react'

export default function Comment(props){
    const{
        handleChange, 
        handleSubmit, 
        btnText,
            inputs: {
                body
            }
        } = props

    return(
        <form onSubmit = {handleSubmit}>
            <input
            type= 'text'
            value = {body}
            name = 'comment'
            onChange = {handleChange}
            placeholder = "Comment"/>
            <button>{btnText}</button>
        </form>
    )
}