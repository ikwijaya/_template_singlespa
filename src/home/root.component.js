import React from "react";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class AnimationExample extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:'Honey Badger'
    }
  }

  render(){
    const { value } = this.state;
    return (
      <div className="container">
        <div className="row">
          <h2>Welcome</h2>
        </div>
        <h4 style={{color:'blue'}}>{value}</h4>
        <hr />
        <div className="row">
          <div className="input-field col s4">
            <input type="text" value={value} onChange={(e) => { this.setState({ value: e.target.value }) }} />
            <label htmlFor="Input Text">Input Text</label>
          </div>
        </div>
      </div>
    );
  }
}

/* you'll need this CSS somewhere
.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
*/

// const menu = [
//   { label:'Home', path:'/'},
//   { label:'Nested Fragment', path:'/nested'},
//   { label:'List', path:'/list'}
// ];
// const routes = [
//   { path: "/", exact: true},
//   { path: "/nested"},
//   { path: "/list"},
// ];


// const AnimationExample = () => (
//   <Router>
//     {/* <SideBar menus={menu}></SideBar>
//     {routes.map((r,i) => {
//       <Route 
//         key={i}
//         path={r.path}
//         exact={r.exact}
//         render={() => <Redirect to={r.path} />}
//       ></Route>
//     })} */}

//     <Route
//       render={({ location }) => (
//         <div style={styles.fill}>
//           <Route
//             exact
//             path="/"
//             render={() => <Redirect to="/home/hsl/10/90/50" />}
//           />

//           <ul style={styles.nav}>
//             <NavLink to="/list">List</NavLink>
//             <NavLink to="/navBar">Nested</NavLink>
//             {/* <NavLink to="/home/hsl/120/100/40">Green</NavLink>
//             <NavLink to="/home/rgb/33/150/243">Blue</NavLink>
//             <NavLink to="/home/rgb/240/98/146">Pink</NavLink> */}
//           </ul>

//           <div style={styles.content}>
//             <TransitionGroup>
//               <CSSTransition key={location.key} classNames="fade" timeout={300}>
//                 <Switch location={location}>
//                   <Route exact path="/home/hsl/:h/:s/:l" component={HSL} />
//                   <Route exact path="/home/rgb/:r/:g/:b" component={RGB} />
//                 </Switch>
//               </CSSTransition>
//             </TransitionGroup>
//           </div>
//         </div>
//       )}
//     />
//   </Router>
// );

// const NavLink = props => (
//   <li style={styles.navItem}>
//     <Link {...props} style={{ color: "inherit" }} />
//   </li>
// );

// const HSL = ({ match: { params } }) => (
//   <div
//     style={{
//       ...styles.fill,
//       ...styles.hsl,
//       background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
//     }}
//   >
//     hsl({params.h}, {params.s}%, {params.l}%)
//   </div>
// );

// const RGB = ({ match: { params } }) => (
//   <div
//     style={{
//       ...styles.fill,
//       ...styles.rgb,
//       background: `rgb(${params.r}, ${params.g}, ${params.b})`
//     }}
//   >
//     rgb({params.r}, {params.g}, {params.b})
//   </div>
// );

// const styles = {};

// styles.fill = {
//   marginTop: "40px",
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0
// };

// styles.content = {
//   ...styles.fill,
//   top: "40px",
//   textAlign: "center"
// };

// styles.nav = {
//   padding: 0,
//   marginTop: "50px",
//   position: "absolute",
//   top: 0,
//   height: "25px",
//   width: "100%",
//   display: "flex"
// };

// styles.navItem = {
//   textAlign: "center",
//   flex: 1,
//   listStyleType: "none",
//   padding: "10px"
// };

// styles.hsl = {
//   ...styles.fill,
//   color: "white",
//   paddingTop: "20px",
//   fontSize: "30px"
// };

// styles.rgb = {
//   ...styles.fill,
//   color: "white",
//   paddingTop: "20px",
//   fontSize: "30px"
// };

// export default AnimationExample;