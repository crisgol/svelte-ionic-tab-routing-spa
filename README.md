# Ionic Tab Routing SPA try-out

Try out to get svelte-routing integrated with ionic tabs in svelte.

To run this, you need to run `npm run dev` alongside `npm run devspa` in two separate terminals. Maybe hacky, but at least it works.

Issue is in IonTab.svelte. The onMount triggers too earlier for the controller to be able to expose the `present` method for programmatically setting the tab selected by default.

The ionic api docs state you can predefine as property to ion-tab-bar, but this does not seem to work.

So need help.