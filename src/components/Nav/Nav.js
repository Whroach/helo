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
                <div className="nav_container">
                    <div className="nav_profile">
                        <img id="profile_pic" src={props.user.profile_pic} alt={props.user.profilePic}/>
                        <h2>{props.user.username}</h2>
                    </div>
                </div>
                <div className="nav_buttons">
                    <Link to={'/dashboard'}><button id="dashboard">Home</button></Link>
                    <Link to={'/new'}><button id="new_post">New Post</button></Link>
                    <Link to={'/'}><button onClick={logoutUser} id="logout_button">Logout</button></Link>
                </div>
            </nav>)
            : null  }
        </div>
    )
}

const mapStateToProps = state => state.authReducer;

export default connect(mapStateToProps, {logout})(Nav)

