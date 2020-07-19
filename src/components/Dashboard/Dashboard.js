import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getPosts} from '../../ducks/reducers/postReducer'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Dashboard extends Component {
    constructor(props){
        super(props)


        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    };


   componentDidMount=()=>{
       this.getPost()
   }


    getPost = () =>{
        const { userposts, search } = this.state
        const { id } = this.props.authReducer.user
        axios.get(`/api/post/${id}`, {params: {userposts: userposts, search: search}})
        .then(response => {
            this.setState({posts: response.data})
        })
        .catch(error => console.log(error))
    }



    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };




    toggleUserPosts = () => {
        this.setState({userposts: !this.state.userposts})

    }

    //Search Functionality 
    clearSearchBar = () =>{
        this.setState({search: ''})
    };



    render() {


        const mappedPosts = this.state.posts.map((post,i) => {

            console.log(post)
            return (
                <div className="posts_list">
                    <div className="post_content">
                    <Link to={`/post/${post.id}`}>
                    <div key={i}>
                        <ol key={i}>
                            {post.title}
                            {post.content}
                            <p id="profile-name">{post.username}</p>
                            <img id="profile-pic"src={post.profile_pic}/>
                            
                        </ol>
                    </div>
                    </Link>
                    </div>
                </div>
            )

        })

 
        return (
            <div className="dash">
                <h1>Dashboard</h1>
                    <div className="filter_section">
                        <input value={this.state.search} name='search' onChange={(element) => this.handleInput(element)}/>
                        <button onClick={this.clearSearchBar}>Reset</button>
                        <button onClick={this.componentDidMount}>Search</button>
                        <p>My Posts</p><input type={'checkbox'} onChange={this.toggleUserPosts}/>
              
                    </div>
                    <ul>{mappedPosts}</ul>
             
            </div>
        )
    }
}

const mappedStateToProps = state => state

export default connect(mappedStateToProps,{getPosts})(Dashboard)
