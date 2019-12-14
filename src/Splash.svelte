<script>
  import { navigate } from "svelte-routing";

  setTimeout(() => {
    navigate("/tabs/movies");
  }, 500);
</script>

<ion-content>
  <h1>SPLASH!!</h1>
  Moving away from this page in 5 seconds
</ion-content>
