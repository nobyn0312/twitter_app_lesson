import React ,{useState} from 'react'
import {storage,db, auth } from "../firebase"
import TweetInput from './TweetInput'
import styles from "./Feed.module.css";

const feed = () => {
  return (
    <div>
      Feed
      <TweetInput/>
      <button onClick={()=> auth.signOut()}>Logout</button>
    </div>
  )
}

export default feed
