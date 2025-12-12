import { useState } from 'react'
import './App.css'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, Routes, Route } from 'react-router-dom';
import NewPost from './NewPost.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar 
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: '250px',
          backgroundColor: '#f0f0f0',
        }}
      >
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <p> Welcome </p>
          <img src='src/img/harry-profile.png' className='profile-img'></img>
          <MenuItem component={<Link to="/dashboard" />}> Dashboard</MenuItem>
          <MenuItem component={<Link to="/posts" />}> Posts</MenuItem>
          <MenuItem component={<Link to="/newpost" />}> New Post</MenuItem>
        </Menu>
      </Sidebar>
      
      {/* Main Content Area */}
      <div style={{ 
        marginLeft: '250px',
        padding: '20px',
        width: '100%',
        minHeight: '100vh'
      }}>
        <Routes>
          <Route path="/newpost" element={<NewPost />} />
        </Routes>
      </div>
    </div>
  )
}

export default App