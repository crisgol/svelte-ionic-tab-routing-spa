<script>
  import { navigate } from "svelte-routing";

  setTimeout(() => {
    navigate("/tabs/movies");
  }, 2500);
</script>

<ion-content>
  <h1>SPLASH!!</h1>
  Moving away from this page in 5 seconds
  <img src="assets/img/great-success.png" alt="Great success" />
</ion-content>
