import { Outlet, Link } from "react-router-dom"
import React from "react"

export class Master extends React.Component {
  render() {
    const linkStyle = {
      marginRight: '20px', 

    };

    return (
      <>
        <nav>
          <ul>


            <Link to='/' style={linkStyle} > Home </Link>

            <Link to='/admin' style={linkStyle}>{"   Admin "}</Link>
            <Link to='/event'style={linkStyle}>{" Events "}</Link>
            <Link to='/about'style={linkStyle}>{" About us "}</Link>
            <Link to='/contact' > Contact </Link>

          </ul>
        </nav>
        <Outlet />
      </>
    );
  }
}