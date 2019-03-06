import React from 'react'
import { navigateToUrl } from 'single-spa'

export default class SideBar extends React.Component {
  render(){
    return(
      <aside>
        <ul className="side-nav fixed">
          <li><a href="/" onClick={navigateToUrl}>Home</a></li>
          {/* <li><a href="/react" onClick={navigateToUrl}>React</a></li> */}
          {/* <li><a href="/angularJS" onClick={navigateToUrl}>AngularJS</a></li> */}
          <li><a href="/tabs" onClick={navigateToUrl}>Tabs</a></li>
          <li><a href="/lists" onClick={navigateToUrl}>Table API</a></li>
        </ul>
      </aside>
    );
  }
}