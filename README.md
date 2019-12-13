# Ionic Tab Routing SPA try-out

Try out to get svelte-routing integrated with ionic tabs in svelte.

To run this, you need to run `npm run dev` alongside `npm run devspa` in two separate terminals. Maybe hacky, but at least it works.

Issue is in IonTab.svelte. The onMount triggers too earlier for the controller to be able to expose the `present` method for programmatically setting the tab selected by default.

The ionic api docs state you can predefine as property to ion-tab-bar, but this does not seem to work.

Update 13/12/2019: workaround: add ion-router (with no routes! as we don't want hash routes) to IonTab so at least the default tab is not shown as per ion-tabs.tsx (see https://github.com/ionic-team/ionic/issues/20060). No ugly UI, but bit hacky code to find when `present` is present. And we get ionic errors in console because of router issue.

So besides workaround, I need a bit of help on svelte onMount wrt webcomponents.