import React, { Component } from 'react'
import Sidebar from '@/components/sidebar/index'

class WrapComponents extends Component {
    render() {
        return (
            <div>
                    <Sidebar/>
                    <Content>{this.props.children}</Content>
            </div>
        )
    }
}

export default WrapComponents

const Content = props => {
    return <div className="rightBody" >{props.children}</div>
}
