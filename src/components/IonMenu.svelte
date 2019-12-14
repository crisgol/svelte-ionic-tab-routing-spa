<script>
  import { navigate } from "svelte-routing";

  function closeAndNavigate(url) {
    document.querySelector("ion-menu-controller").close();
    navigate(url);
  }

  const menuItems = [{ icon: "home", label: "Cards", url: "/cards" }];
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

      <ion-item
        on:click={() => {
          closeAndNavigate('/ss');
        }}>
        <ion-icon name="home" slot="start" />
        <ion-label>Home</ion-label>
      </ion-item>
      <ion-item
        on:click={() => {
          closeAndNavigate('/ss');
        }}>
        <ion-icon name="person" slot="start" />
        <ion-label>Profile</ion-label>
      </ion-item>
      <ion-item
        on:click={() => {
          closeAndNavigate('/ss');
        }}>
        <ion-icon name="chatbubbles" slot="start" />
        <ion-label>Messages</ion-label>
      </ion-item>
      <ion-item
        on:click={() => {
          closeAndNavigate('/ss');
        }}>
        <ion-icon name="settings" slot="start" />
        <ion-label>Settings</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</ion-menu>
