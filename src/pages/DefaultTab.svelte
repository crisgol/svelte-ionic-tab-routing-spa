<script>
  export let params;
  console.log("para", params);

  import IonTab from "./../components/IonTab.svelte";

  import Music from "./../pages/Music.svelte";
  import Movies from "./../pages/Movies.svelte";
  import Games from "./../pages/Games.svelte";

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

<IonTab tabs={myTabs} selected={params.id} />
