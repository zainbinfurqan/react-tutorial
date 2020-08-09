import React, { Component } from 'react'


class HomePage2 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>rendering haome page 2</p>
                <p>{this.props.nameProps}</p>
            </div>
        )
    }
}

export default HomePage2
