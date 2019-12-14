<script>
  import { navigate } from "svelte-routing";

  setTimeout(() => {
    navigate("/intro");
  }, 2500);
</script>

<ion-content>
  <img src="assets/img/great-success.png" alt="Great success" />
</ion-content>
