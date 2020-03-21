<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Register from "./pages/Register.svelte";
  import Login from "./pages/Login.svelte";
  import Legal from "./pages/Legal.svelte";
  import Profile from "./pages/Profile.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Tutorial from "./pages/Tutorial.svelte";

  import * as consts from "./constants";
</script>

<style>

</style>

<main>
  <Router>
    <Route path="{consts.PAGE_REGISTER}/:typ" let:params>
      <Register typ={params.typ} />
    </Route>
    <Route path={consts.PAGE_LEGAL}>
      <Legal />
    </Route>
    <Route path={consts.PAGE_PROFILE}>
      <Profile />
    </Route>
    <Route path={consts.PAGE_LOGIN}>
      <Login />
    </Route>
    <Route path={consts.PAGE_DASHBOARD}>
      <Dashboard />
    </Route>
    <Route path={consts.PAGE_TUTORIAL}>
      <Tutorial />
    </Route>
    <Route path="*">
      <Home />
    </Route>
  </Router>
</main>
