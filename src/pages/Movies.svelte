<script>
  import Extra from "./Extra.svelte";
  import {
    IonicShowModal,
    IonicShowPopover
  } from "./../services/IonicControllers";

  const showModal = () => {
    IonicShowModal("modal-extra", Extra, {
      firstName: "Douglas",
      lastName: "Adams",
      middleInitial: "N",
      type: "popover"
    }).then(data => console.log(data));
  };

  const showPopover = event => {
    IonicShowPopover(event, "modal-extra", Extra, {
      firstName: "Douglas",
      lastName: "Adams",
      middleInitial: "N",
      type: "popover"
    }).then(data => console.log(data));
  };

  const showAlert = () => {};
  const showLoading = () => {
    IonicShowLoading({
      message: "Please wait...",
      duration: 3000
    });
  };
  const showPicker = () => {};
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Movies</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">

  <ion-button expand="block" on:click={showAlert}>Show Alert</ion-button>
  <ion-button expand="block" on:click={showModal}>Show Modal</ion-button>
  <ion-button expand="block" on:click={showPopover}>Show Popover</ion-button>
  <ion-button expand="block" on:click={showLoading}>Show Loading</ion-button>
  <ion-button expand="block" on:click={showPicker}>Show Picker</ion-button>

</ion-content>
