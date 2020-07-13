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
    }
};

    componentDidMount = () => {
        // if(this.props.username){
        //     this.props.history.push('/dashboard')
        // }        
    }

    handleRegisterUser = () => {
        const {username, password, picture} = this.state
            axios.post('/api/register', {username, password, profilePic:picture})
            .then(res=> {
                this.props.findUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch(error => console.log(error))

        // else{
        //     alert('Inputs cannot be empty!')
        // }
    }

    handleLoginUser = () =>{
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

        return (
            <div>
                <h1>Authentication</h1>
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
                    <button onClick={this.handleRegisterUser}>Register</button>
                    <button onClick={this.handleLoginUser}>Login</button>
                </form>
                
            </div>
        )
    }
}
const mapStateToProps = state => state.authReducer

export default connect(mapStateToProps, {findUser})(Authentication)