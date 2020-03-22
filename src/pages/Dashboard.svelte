<script>
  import { onMount } from "svelte";

  import Button, { Label } from "@smui/button";
  import Chip, { Text, Set } from "@smui/chips";
  import IconButton, { Icon } from "@smui/icon-button";
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons
  } from "@smui/card";
  import { Link, navigate } from "svelte-routing";
  import * as consts from "../constants";

  import userStore from "../stores/user";

  let user = {};

  userStore.subscribe(u => {
    user = u;
  });

  onMount(() => {
    if (!user) navigate(consts.PAGE_START, { replace: true });
  });

  let isSenior = false;
  $: user && (isSenior = user.userType == consts.TAG_REGTYPE_SENIOR);
</script>

<style>
  :root {
    --padding: 0.5em;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
  }

  .card-container {
    width: calc(100vw / 2 -var(--app-x-padding)-var(--padding) * 2);
    padding: var(--padding);
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  * :global(.card-media-16x9) {
    background-image: url(https://via.placeholder.com/320x180.png?text=16x9);
  }

  .splitter {
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0.5em 0;
  }
</style>

<h2>{user && user.name}'s Dashboard</h2>

<section class="cards">
  {#each Array(2) as _}
    <div class="card-container">
      <Card style="width: 320px;">
        <PrimaryAction on:click>
          <Media class="card-media-16x9" aspectRatio="16x9" />
          <Content style="padding: 0.5em; padding-bottom: 0">
            <div class="mdc-typography--subtitle">Dörte, 76</div>
            <Set chips={[...Array(4).keys()]} let:chip>
              <Chip ripple={false}>
                <Text>Int {chip}</Text>
              </Chip>
            </Set>
          </Content>
        </PrimaryAction>
        <Actions style="padding-top: 0; padding-bottom: 0">
          <ActionButtons>
            {#if isSenior}
              <Button on:click={() => navigate(consts.PAGE_WAITINGROOM)}>
                <Label>Anfragen</Label>
              </Button>
            {:else}
              <Button>
                <Label>Ping</Label>
              </Button>
            {/if}
          </ActionButtons>
          {#if !isSenior}
            <ActionIcons>
              <IconButton
                toggle
                pressed
                aria-label="Add to favorites"
                title="Add to favorites">
                <Icon class="material-icons" on>favorite</Icon>
                <Icon class="material-icons">favorite_border</Icon>
              </IconButton>
            </ActionIcons>
          {/if}
        </Actions>
      </Card>
    </div>
  {/each}
  {#if !isSenior}
    <div class="splitter" />
    {#each Array(4) as _}
      <div class="card-container">
        <Card style="width: 320px;">
          <PrimaryAction on:click>
            <Media class="card-media-16x9" aspectRatio="16x9" />
            <Content style="padding: 0.5em">
              <div class="mdc-typography--subtitle">Dörte, 76</div>
              <Set chips={[...Array(4).keys()]} let:chip>
                <Chip ripple={false}>
                  <Text>Int {chip}</Text>
                </Chip>
              </Set>
            </Content>
          </PrimaryAction>
          <Actions style="padding-top: 0; padding-bottom: 0">
            <ActionButtons>
              {#if isSenior}
                <Button>
                  <Label>Anfragen</Label>
                </Button>
              {:else}
                <Button>
                  <Label>Ping</Label>
                </Button>
              {/if}
            </ActionButtons>
            {#if !isSenior}
              <ActionIcons>
                <IconButton
                  toggle
                  aria-label="Add to favorites"
                  title="Add to favorites">
                  <Icon class="material-icons" on>favorite</Icon>
                  <Icon class="material-icons">favorite_border</Icon>
                </IconButton>
              </ActionIcons>
            {/if}
          </Actions>
        </Card>
      </div>
    {/each}
  {/if}
  <Button>
    <Link to="/logout">Logout</Link>
  </Button>
</section>
