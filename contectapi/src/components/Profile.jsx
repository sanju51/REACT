import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

export function Profile() {
    const {user} =useContext(UserContext)
    

   if(!user) return <div>Please Login</div>
   return <div>Welcome {user.username} {user.password}</div>
}
