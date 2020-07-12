import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getPosts} from '../../ducks/reducers/postReducer'


class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            search: ''
        }
    };

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    clearSearchBar = () =>{
        this.setState({search: ''})
    }




    render() {
        // console.log(this.props)
 
        return (
            <div>
                <h1>Dashboard</h1>
                    <div>
                        <input value={this.state.search} name='search' onChange={(element) => this.handleInput(element)}/>
                        <button onClick={this.clearSearchBar}>Reset</button>
                        <button>Search</button>
                        <p>My Posts</p><input type={'checkbox'}/>
                    </div>
            </div>
        )
    }
}

const mappedStateToProps = state => state

export default connect(mappedStateToProps,{getPosts})(Dashboard)