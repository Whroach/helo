import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'

export default class Dashboard extends Component {
    
    componentDidMount = () =>{
        const location = useLocation()
        console.log(location)

    }


    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                
            </div>
        )
    }
}
