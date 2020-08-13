import React, { Component } from 'react'
import './form.css'

class Form extends Component {
    render() {
        return (
            <form action="" method="post" className='form' >
                <input type="text" placeholder='Say Something'/>
                <button type="submit"> Post </button>
            </form>
        )
    }
}

export default Form

