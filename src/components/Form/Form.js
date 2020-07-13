import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createPost} from '../../ducks/reducers/postReducer'
import axios from 'axios'

class Form extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            id: this.props.authReducer.user.id,
            title: '',
            image: '',
            content: ''
        }
    };

    handleInput = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }
    

    createUserPost =()=>{
        const { id, title, image, content } = this.state
        axios.post('/api/create-post',{id, title, img: image, content})
        .then(res => {
            this.props.createPost(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(error => console.log(error))
    }



    render() {

        // console.log(this.props.authReducer.user.id)
        return (
            <div>
            <h1>New Post</h1>
            <div>
                <form>
                    <p>Title:</p><input value={this.state.title} name='title' onChange={(e) => this.handleInput(e)}></input>
                    <p>Image URL:</p><input value={this.state.image} name='image' onChange={(e) => this.handleInput(e)}></input>
                    <p>Content:</p><input value={this.state.content} name='content' onChange={(e) => this.handleInput(e)}></input>
                </form>
                <button onClick={this.createUserPost}>Post</button>
            </div>
        </div>
        )}
};

const mappedStateToProps = state => state

export default connect(mappedStateToProps, {createPost})(Form)