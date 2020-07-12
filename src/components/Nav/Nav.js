import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props) {
    const location = useLocation()
    // console.log(props.id)


    return (
        <div>
            {location.pathname !== '/' 
            ? (<nav>
                <Link to={'/dashboard'}><button>Home</button></Link>
                <Link to={'/new'}><button>New Post</button></Link>
                <Link to={'/'}><button>Logout</button></Link>
            </nav>)
            : null  }
            <div>
                <h1>{props.profilePic}</h1>
                <h2>{props.username}</h2>
            </div>



        </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Nav)