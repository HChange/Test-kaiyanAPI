import React, { Component, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Loading from "./components/Loading/Loading";
// import Tabs from "./components/Tabs/Tabs";
// import Header from "./components/Header/Header";

const Home = lazy(() => import("./pages/home/home"));
const Detail = lazy(() => import("./pages/home/detail/detail"));
const Community = lazy(() => import("./pages/community/community"));
const Notice = lazy(() => import("./pages/notice/notice"));
const Upload = lazy(() => import("./pages/upload/upload"));
const Mine = lazy(() => import("./pages/mine/mine"));
const Login = lazy(() => import("./pages/mine/login/login"));
const Register = lazy(() => import("./pages/mine/register/register"));
const NotFound = lazy(() => import("./pages/common/not-found/not-found"));

export default class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          {/* <Header /> */}

          {/* 根页面 */}
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <Redirect to="/home" />;
              }}
            />
            <Route path="/home" component={Home} />
            <Route path="/community" component={Community} />
            <Route path="/upload" component={Upload} />
            <Route path="/notice" component={Notice} />
            <Route path="/mine" component={Mine} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
          <>
            <Route path="/home/detail" component={Detail} />
          </>

          {/* <Tabs /> */}
        </Suspense>
      </Router>
    );
  }
}
