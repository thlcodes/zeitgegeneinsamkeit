<script>
  import Button from "@smui/button";
  import { Link } from "svelte-routing";
  import * as consts from "../constants";

  import userStore from "../stores/user";

  let user = {};
</script>

<h2>{user.name}'s Profil</h2>

<Button>
  <Link to={consts.PAGE_DASHBOARD}>Zurück</Link>
</Button>
