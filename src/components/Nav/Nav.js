import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import {logout} from '../../ducks/reducers/authReducer'

function Nav(props) {
    const location = useLocation()
    // console.log(props.id)

    console.log(props)

    const logoutUser = () => {
        axios.get('/api/logout')
        .then(() =>{
            props.logout()
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            {location.pathname !== '/' 
            ? (<nav>
                <div>
                    <img src={props.user.profile_pic} alt={props.user.profilePic}/>
                    <h2>{props.user.username}</h2>
                </div>
                <Link to={'/dashboard'}><button>Home</button></Link>
                <Link to={'/new'}><button>New Post</button></Link>
                <Link to={'/'}><button onClick={logoutUser}>Logout</button></Link>
            </nav>)
            : null  }
        </div>
    )
}

const mapStateToProps = state => state.authReducer;

export default connect(mapStateToProps, {logout})(Nav)