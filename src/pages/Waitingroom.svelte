<script>
  import Button from "@smui/button";
  import { navigate } from "svelte-routing";
  import * as consts from "../constants";

  let d = 5;

  const int = setInterval(() => {
    d--;
  }, 1000);

  $: if (d <= 0) {
    clearInterval(int);
    navigate(consts.PAGE_CALL);
  }
</script>

<h2>Warteraum</h2>

<h3>Nur noch {d} ...</h3>
