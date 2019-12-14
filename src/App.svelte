<script>
  import { Router, Route } from "svelte-routing";

  import IonMenu from "./components/IonMenu.svelte";

  import IonTab from "./components/IonTab.svelte";
  import Splash from "./Splash.svelte";

  import Music from "./Music.svelte";
  import Movies from "./Movies.svelte";
  import Games from "./Games.svelte";
  import Introduction from "./pages/Introduction.svelte";
  import Buttons from "./pages/Buttons.svelte";
  import Cards from "./pages/Cards.svelte";
  import Home from "./pages/Home.svelte";

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

  const routes = [
    { path: "/buttons", component: Buttons },
    { path: "/buttons/:id", component: Buttons },
    { path: "/cards", component: Cards },
    { path: "/home", component: Home }
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
  <div class="ion-page" main>
    <IonMenu />
    <Router {url}>

      {#each routes as route}
        <Route path={route.path} let:params>
          <svelte:component this={route.component} {params} />
        </Route>
      {/each}

      <Route path="/">
        <Splash />
      </Route>
      <Route path="/intro">
        <Introduction />
      </Route>

      <Route path="/tabs">
        <IonTab tabs={myTabs} />
      </Route>
      <Route path="/tabs/:id" let:params>
        <IonTab tabs={myTabs} selected={params.id} />
      </Route>
    </Router>
  </div>
</ion-app>
<ion-modal-controller />

<ion-menu-controller />
