import React from 'react'

function Follower({avatar_url, login, html_url}) {
  return (
    <div className='card'>
      <img className='page-img' src={avatar_url} alt='' />
  <h2>{login}</h2>
      <a className='page-btn' href={html_url}>
        View Profile
      
      </a>
    </div>
  )
}

export default Follower
