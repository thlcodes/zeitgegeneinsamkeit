<script>
  import { Router, Link, Route } from "svelte-routing";
  import Start from "./pages/Start.svelte";
  import Register from "./pages/Register.svelte";
  import Login from "./pages/Login.svelte";
  import Logout from "./pages/Logout.svelte";
  import Legal from "./pages/Legal.svelte";
  import CreateProfile from "./pages/CreateProfile.svelte";
  import Profile from "./pages/Profile.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Tutorial from "./pages/Tutorial.svelte";
  import Waitingroom from "./pages/Waitingroom.svelte";
  import Call from "./pages/Call.svelte";

  import Header from "./components/Header.svelte";
  import Main from "./components/Main.svelte";

  import * as consts from "./constants";

  import { get } from "svelte/store";
  import userStore from "./stores/user";
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 480px) {
    .container {
      width: 600px;
      max-width: 600px;
      height: 908px;
      max-height: 908px;
      min-height: initial;
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      padding: 58px 108px 50px 112px;
      transform: translate(-50%, -50%);
    }

    .container::after {
      pointer-events: none;
      content: "";
      z-index: 100;
      background-color: transparent;
      background-image: url(/img/frame.png);
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
  }
</style>

<div class="container">
  <Header title={consts.APP_NAME} />
  <Main>
    <Router>
      <Route path={consts.PAGE_START}>
        <Start />
      </Route>
      <Route path="{consts.PAGE_REGISTER}/:typ" let:params>
        <Register userType={params.typ} />
      </Route>
      <Route path={consts.PAGE_LEGAL}>
        <Legal />
      </Route>
      <Route path={consts.PAGE_CREATEPROFILE}>
        <CreateProfile />
      </Route>
      <Route path="{consts.PAGE_PROFILE}/:userid" let:params>
        <Profile userId={params.userid} />
      </Route>
      <Route path="{consts.PAGE_LOGIN}/:typ">
        <Login />
      </Route>
      <Route path={consts.PAGE_LOGOUT}>
        <Logout />
      </Route>
      <Route path={consts.PAGE_WAITINGROOM}>
        <Waitingroom />
      </Route>
      <Route path={consts.PAGE_CALL}>
        <Call />
      </Route>
      <Route path={consts.PAGE_TUTORIAL}>
        <Tutorial />
      </Route>
      <Route path="*">
        <Dashboard />
      </Route>
    </Router>
  </Main>
</div>
