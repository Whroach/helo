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
            userPosts: true
        }
    };

    componentDidMount = () => {
        // const {userPosts } = this.state
        // userPosts ? this.getAllPosts() : this.getUserPosts()
        
        this.getAllPosts()
    };

    searchForPosts = (id) =>{
        axios.get(`/api/search-posts/${id}`)
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(error => console.log(error))
    }


    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    clearSearchBar = () =>{
        this.setState({search: ''})
    };


    getAllPosts = () =>{
        axios.get('/api/get-posts')
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(error => console.log(error))
    };


    getUserPosts = (id) =>{
        axios.get(`/api/user-posts/:${id}`)
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(error => console.log(error))

    }


    toggleUserPosts = () => {
        this.setState({userPosts: !this.state.userPosts})
        // .then(this.getUserPosts(id))

    }



    render() {

        console.log(this.state.posts)
        // const {search} = this.state
        // console.log(this.state.posts[1])
        const mappedPosts = this.state.posts.map((post,i) => {

            return (

                <Link to='/post/:props.match.params'>
                <div key={i}>
                    {this.state.userPosts
                    ?
                    <ol key={i}>
                        {/* <img src={post.img}/> */}
                        {post.title}
                        {post.content}
                        {post.username}
                        <img src={post.profile_pic}/>
                    </ol>
                    :
                    <ol key={i}>
                        {/* <img src={post.img}/> */}
                        {post.title}
                        {post.content}
                        {post.username}
                        <img src={post.profile_pic}/>
                    </ol>

                }   

                </div>
                </Link>
            
            )
        })

 
        return (
            <div>
                <h1>Dashboard</h1>
                    <div>
                        <input value={this.state.search} name='search' onChange={(element) => this.handleInput(element)}/>
                        <button onClick={this.clearSearchBar}>Reset</button>
                        <button onClick={this.searchForPosts}>Search</button>
                        <p>My Posts</p><input type={'checkbox'} onClick={this.toggleUserPosts}/>
                    </div>
                    <ul>{mappedPosts}</ul>
             
            </div>
        )
    }
}

const mappedStateToProps = state => state

export default connect(mappedStateToProps,{getPosts})(Dashboard)