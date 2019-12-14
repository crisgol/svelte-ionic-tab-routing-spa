<script>
  import { Router, Route } from "svelte-routing";

  import IonTab from "./components/IonTab.svelte";

  import Splash from "./Splash.svelte";

  export let url = "";

  // import * as sss from "./Music.svelte";  https://github.com/sveltejs/sapper/issues/288 TODO
  import Music from "./Music.svelte";
  import Movies from "./Movies.svelte";
  import Games from "./Games.svelte";
  import Introduction from "./pages/Introduction.svelte";
  import Buttons from "./../pages/Buttons.svelte";
  import Cards from "./pages/Cards.svelte";
  import Home from "./pages/Home.svelte";

  const routes = [
    { path: "/buttons", component: Buttons },
    { path: "/buttons/:id", component: Buttons },
    { path: "/cards", component: Cards },
    { path: "/home", component: Home }
  ];

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
