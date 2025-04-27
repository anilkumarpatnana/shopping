import React from 'react'

export const Header = () => {
  return (
    <div class="header">
      <div class="left">
        <h1>Shopping Mall</h1>
        </div>
      <div class="center">
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div class="search"><input type="text" placeholder='Search For More'/></div>
      <div class="right">
      <div class="signin-signup">Sign in/ Sign up</div>
      <div class="cart">Cart</div>
      </div>

    </div>
  )
}
