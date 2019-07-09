import React, {Component} from 'react'

export default class LoginButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <button onClick={() => {this.props.al()} }>Login</button>
        )
    }
}