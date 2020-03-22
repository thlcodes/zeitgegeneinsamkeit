<script>
  import Button from "@smui/button";
  import { Link } from "svelte-routing";
  import * as consts from "../constants";
</script>

<h2>Call</h2>

<Button>
  <Link to={consts.PAGE_DASHBOARD}>Call beenden</Link>
</Button>
