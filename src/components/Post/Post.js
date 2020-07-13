import React, { Component } from 'react'
import axios from 'axios'


class Post extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            content: '',
            username: '',
            picture: ''
        }
    };

    // componentDidMount() {
    //     let post = post.find(post => post.id === parseInt(this.props.match.params.id));
    //     this.setState({
    //       title: post.title,
    //       content: post.content,
    //       username: post.username,
    //       picture: post.profile_pic
    //     });
    //   }

    getUserPosts = (id) =>{
        axios.get(`/api/user-posts/:${id}`)
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(error => console.log(error))

    }


    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Post
// const mappedStateToProps = state => state

// export default connect(mappedStateToProps, {createPost})(Post)