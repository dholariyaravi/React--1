import React from 'react'

const Admin = () => {
    const logout=()=>{
        localStorage.clear()
    }
  return (
    <div>This is a authorized admin page

        <button onClick={logout}>
            Logout
        </button>
    </div>
  )
}

export default Admin