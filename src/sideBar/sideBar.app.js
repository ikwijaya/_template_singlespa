import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import SideBar from './root.component.js';

export const sideBar = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: SideBar,
  domElementGetter,
})

// Finally, we specify the location we want single-spa to mount our application
function domElementGetter() {
  return document.getElementById("sideBar")
}
