import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'


class Post extends Component {
    constructor(props){
        super(props)

        this.state = {
            post: []
        }
    };

    componentDidMount = () =>{
        this.singlePost()



    }

    singlePost=()=>{
        const  { params }= this.props.match
        const id = parseInt(params.id)

        axios.get(`/api/single-post/${id}`)
        .then( res => 
            this.setState({
                post: res.data[0]

            })
            )
        .catch(() => console.log('axios error in post'))

    }

    deletePost = (id) =>{
        axios.delete(`/api/post/${id}`)
        .then(()=>{
            this.props.history.push('/dashboard')
        })
        .catch(error => console.log(error))

    }



    render() {
        console.log(this.state)
        const {id, content, profile_pic, title, username } = this.state.post
        
        
        return (
            <div>
                <div id="single-post">
                    <ol>
                        <img src={profile_pic}/>
                        <p>{username}</p>
                        <p>{content}</p>
                        <p>{title}</p>
                    </ol>
                    <div id="delete-button"><button onClick={() =>{this.deletePost(id)}}>Delete</button></div>
                </div>

            </div>
        )
    }
}


const mappedStateToProps = state => state

export default connect(mappedStateToProps)(Post)