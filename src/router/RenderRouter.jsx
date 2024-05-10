import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RenderPage from '../Renders/RenderPage'

const RenderRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<RenderPage />}/>
      </Routes>
    </Router>
  )
}

export default RenderRouter
