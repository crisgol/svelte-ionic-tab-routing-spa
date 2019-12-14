<script>
  import { navigate } from "svelte-routing";

  function closeAndNavigate(url) {
    document.querySelector("ion-menu-controller").close();
    navigate(url);
  }

  const menuItems = [
    { url: "/avatars", label: "Avatars", icon: "home" },
    { url: "/buttons", label: "Buttons", icon: "home" },
    { url: "/cards", label: "Cards", icon: "home" },
    { url: "/checkboxes", label: "Checkboxes", icon: "home" },
    { url: "/chips", label: "Chips", icon: "home" },
    { url: "/datetime", label: "Datetime", icon: "home" },
    { url: "/fabs", label: "Fabs", icon: "home" },
    { url: "/grid", label: "Grid", icon: "home" },
    { url: "/icons", label: "Icons", icon: "home" },
    { url: "/infinitescroll", label: "Infinitescroll", icon: "home" },
    { url: "/inputs", label: "Inputs", icon: "home" },
    { url: "/introduction", label: "Introduction", icon: "home" },
    { url: "/items", label: "Items", icon: "home" },
    { url: "/lists", label: "Lists", icon: "home" },
    { url: "/notes", label: "Notes", icon: "home" },
    { url: "/progressbar", label: "ProgressBar", icon: "home" },
    { url: "/radios", label: "Radios", icon: "home" },
    { url: "/range", label: "Range", icon: "home" },
    { url: "/refresher", label: "Refresher", icon: "home" },
    { url: "/reorder", label: "Reorder", icon: "home" },
    { url: "/searchbar", label: "Searchbar", icon: "home" },
    { url: "/segment", label: "Segment", icon: "home" },
    { url: "/select", label: "Select", icon: "home" },
    { url: "/skeleton", label: "Skeleton", icon: "home" },
    { url: "/spinner", label: "Spinner", icon: "home" },
    { url: "/text", label: "Text", icon: "home" },
    { url: "/thumbnails", label: "Thumbnails", icon: "home" },
    { url: "/toggle", label: "Toggle", icon: "home" },
    { url: "/toolbar", label: "Toolbar", icon: "home" }
  ];
</script>

<ion-menu side="start">
  <ion-header>
    <ion-toolbar translucent>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>

      {#each menuItems as menuItem}
        <ion-item
          on:click={() => {
            closeAndNavigate(menuItem.url);
          }}>
          <ion-icon name={menuItem.icon} slot="start" />
          <ion-label>{menuItem.label}</ion-label>
        </ion-item>
      {/each}

    </ion-list>
  </ion-content>
</ion-menu>
