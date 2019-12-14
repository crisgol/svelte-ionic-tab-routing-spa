<script>
  import Extra from "./Extra.svelte";
  import { IonicShowModal } from "./services/IonicControlers";

  const showModal = () => {
    IonicShowModal("modal-extra", Extra, {
      firstName: "Douglas",
      lastName: "Adams",
      middleInitial: "N",
      type: "popover"
    }).then(data => console.log(data));
  };
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-title>Movies</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">

  <ion-button expand="block" on:click={showModal}>Show Modal</ion-button>

</ion-content>
