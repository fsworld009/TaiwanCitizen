require("../css/semantic.css");
//require("../css/font-awesome.css");
//require("../css/fa-color.css");
//require("../css/override.css");

//window.jQuery = window.$ = require("jquery");
//window.$ = window.jQuery = require("jquery");
var _ = require("lodash");
require("../js/semantic.js");

var React = require("react");
var ReactDOM = require("react-dom");

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = require("./store.js");

// var MainMenu = require("./MainMenu.jsx");
// var LanguageMenu = require("./LanguageMenu.jsx");
// var Status = require("./Status.jsx");
// var Site= require("./Site.jsx");
// var EditSite = require("./EditSite.jsx");
// var User = require("./User.jsx");
// var EditUser = require("./EditUser.jsx");
// var Theme = require("./Theme.jsx");
// var Profile = require("./Profile.jsx");
// var EditProfile = require("./EditProfile.jsx");
// var UrlGenerator = require("./UrlGenerator.jsx");

// import {saveConfig} from './ajax.js';
// import {lang} from "./database.js";

function mapStateToProps(state){
  // var loadingStatus = state.get("load").toObject();
  // var loading = false;
  // _.each(loadingStatus, function(status){
  //   loading = loading || (status === "loading");
  // });
  // var saving = state.get("saving") == "saving";
  // console.log("loading", loading, loadingStatus);
  // return {
  //   loading: loading,
  //   saving: saving,
  //   state: state
  // };
  return {}
}

function mapDispatchToProps(dispatch){
  return {
    // saveConfig: function(store){
    //   dispatch(saveConfig(store));
    // }
  };
}




var rootPath = "/app/";

var App = React.createClass({
  render: function(){
    return (<div>Hello World</div>);
  }
});
//<IndexRoute component={AppContainer} />
var AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="*" component={AppContainer}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
