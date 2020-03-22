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

  import * as consts from "./constants";

  import { get } from "svelte/store";
  import userStore from "./stores/user";
</script>

<style>

</style>

<main>
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
    <Route path={consts.PAGE_LOGIN}>
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
</main>
