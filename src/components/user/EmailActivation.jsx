import React,{useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
function EmailActivation() {
    return (
        <div className='jumbotron container p-3 mt-4 text-center'>
            Your Email is Verfied, Please Login Now. <Link to='/signin' >Sign In</Link>
        </div>
    )
}

export default EmailActivation
