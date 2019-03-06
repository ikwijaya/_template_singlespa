import React from 'react'
import { navigateToUrl } from 'single-spa'

export default class NavBar extends React.Component {
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="/" onClick={navigateToUrl} className="brand-logo" style={{ marginLeft:'5px',fontSize:'20px' }}>Dashboard Application</a>
          {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/" onClick={navigateToUrl}>Home</a></li>
            <li><a href="/react" onClick={navigateToUrl}>React</a></li>
            <li><a href="/angularJS" onClick={navigateToUrl}>AngularJS</a></li>
          </ul> */}
        </div>
      </nav>
    );
  }
}