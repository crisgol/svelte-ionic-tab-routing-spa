<script>
  import { Router, Route } from "svelte-routing";
  import IonTab from "./IonTab.svelte";
  import Splash from "./Splash.svelte";

  import Music from "./Music.svelte";
  import Movies from "./Movies.svelte";
  import Games from "./Games.svelte";

  export let url = "";

  const myTabs = [
    { label: "Music", icon: "musical-note", tab: "music", component: Music },
    { label: "Movies", icon: "videocam", tab: "movies", component: Movies },
    {
      label: "Games",
      icon: "logo-game-controller-b",
      tab: "games",
      component: Games
    }
  ];
</script>

<svelte:head>
  <title>Svelte project template</title>

  <script src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js">

  </script>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
</svelte:head>

<ion-app>
  <Router {url}>
    <Route path="/">
      <Splash />
    </Route>
    <Route path="/tabs">
      <IonTab tabs={myTabs} />
    </Route>
    <Route path="/tabs/:id" let:params>
      <IonTab tabs={myTabs} selected={params.id} />
    </Route>
  </Router>
</ion-app>
<ion-modal-controller />
