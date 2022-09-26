import React, { Component } from "react";

class Crypto extends Component {
    state = {

    }

    render(){
        return(
            <div>
                <h1> crypto logo</h1>

                <form >
                    <label >
                        <input type="text" placeholder="Search..."/>
                    </label>
                </form>

                <ul>
                    <li>1. BTC $24</li>
                </ul>
            </div>
        )
    }
}

export default Crypto