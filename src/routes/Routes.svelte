<script>
  import { Router, Route } from "svelte-routing";

  import IonTab from "./../components/IonTab.svelte";

  export let url = "";

  // import * as sss from "./Music.svelte";  https://github.com/sveltejs/sapper/issues/288 TODO
  import Splash from "./../pages/Splash.svelte";
  import Introduction from "./../pages/ionic/Introduction.svelte";

  import Home from "./../pages/Home.svelte";
  import DefaultTab from "./../pages/DefaultTab.svelte";

  import Music from "./../pages/Music.svelte";
  import Movies from "./../pages/Movies.svelte";
  import Games from "./../pages/Games.svelte";

  import Buttons from "./../pages/ionic/Buttons.svelte";
  import Cards from "./../pages/ionic/Cards.svelte";

  const routes = [
    { path: "/", component: Splash },
    { path: "/buttons", component: Buttons },
    { path: "/buttons/:id", component: Buttons },
    { path: "/cards", component: Cards },
    { path: "/home", component: Home },
    { path: "/intro", component: Introduction },
    { path: "/tabalt", component: DefaultTab }
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

  <Route path="/tabs">
    <IonTab tabs={myTabs} />
  </Route>
  <Route path="/tabs/:id" let:params>
    <IonTab tabs={myTabs} selected={params.id} />
  </Route>
</Router>
