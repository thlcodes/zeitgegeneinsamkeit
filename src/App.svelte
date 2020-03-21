<script>
  import { onMount } from "svelte";

  export let name;

  onMount(async () => {
    const query = "query { Users { data { name } } }";

    try {
      const res = await fetch("https://graphql.fauna.com/graphql", {
        method: "POST",
        headers: {
          Authorization:
            "basic " + window.btoa("fnADnec0_8ACAs8mqw8KmpRyJnHX64QwqrOvcpOA:")
        },
        body: '{ "query": "' + query + '" }'
      });
      const json = await res.json(); // {"data":{"Users":{"data":[{"name":"Dörte"}]}}}
      name = json.data.Users.data[0].name;
    } catch (err) {
      alert(err);
    }
  });
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
