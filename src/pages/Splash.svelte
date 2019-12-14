<script>
  import { navigate } from "svelte-routing";

  setTimeout(() => {
    navigate("/intro");
  }, 2500);
</script>

<ion-header translucent>
  <ion-toolbar>

    <ion-title>Ionic Svelte</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <br />
  <img src="assets/img/great-success.png" alt="Great success" />

</ion-content>
