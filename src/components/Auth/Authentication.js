import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {findUser} from '../../ducks/reducers/authReducer'


class Authentication extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            picture: ''
    };

this.handleRegisterUser = this.handleRegisterUser.bind(this);
this.handleLoginUser = this.handleLoginUser.bind(this);



};

    componentDidMount = () => {
        // if(this.props.user.username){
        //     this.props.history.push('/dashboard')
        // }        
    }

    handleRegisterUser(){
        const {username, password, picture} = this.state
            axios.post('/api/register', {username, password, profilePic: picture})
            .then(res=> {
                this.props.findUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch(error => console.log(error))
    }

    handleLoginUser(){
        const { username, password } = this.state

        axios.post('/api/login', {username, password})
        .then(res => {
            this.props.findUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(error => console.log(error))
    }


    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }


    render() {

        console.log(this.props)

        return (
            <div>
                <div className="auth_container">
                <form>
                    <ul>
                        <p>Username:</p><input
                         value={this.state.username} name='username' onChange={(element) => this.handleInput(element)}></input>
                        <p>Password:</p><input
                        value={this.state.password} name='password' onChange={(element) => this.handleInput(element)}></input>
                        <p>Profile Picture:</p><input
                        value={this.state.picture} name='picture' onChange={(element) => this.handleInput(element)}></input>
                    </ul>
                    {/* <Link to={'./dashboard'}><button onSubmit={() => this.registerUser}>Register</button></Link> */}
                    <div className="auth_button_container">
                        <button onClick={this.handleRegisterUser}>Register</button>
                        <button onClick={this.handleLoginUser}>Login</button>
                    </div>
                </form>

                </div>               
            </div>
        )
    }
}
const mapStateToProps = state => state.authReducer

export default connect(mapStateToProps, {findUser})(Authentication)


