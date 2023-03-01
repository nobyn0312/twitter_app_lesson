import React from 'react'
import { auth } from "../firebase"

const feed = () => {
  return (
    <div>
      <button onClick={()=> auth.signOut()}>Logout</button>
    </div>
  )
}

export default feed
