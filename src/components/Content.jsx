import React from 'react'
import { CardUser } from '../components';

const Content = ({ index }) => {
  return (
    <div>
      <h1>Users</h1>
        <CardUser users={index}/>
    </div>
  )
}

export default Content
