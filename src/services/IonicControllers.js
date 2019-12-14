// https://svelte.dev/repl/a1f2a77ba7704391badb92cd9ee1b7c2?version=3.16.4
import { register } from "svelte-custom-elements";

const isRegistered = function (name) {
    return document.createElement(name).constructor !== HTMLElement;
};

export const registerOnce = (selector, component) => {
    if (!isRegistered(selector)) {
        register(selector, component, []);
    }
};

export const IonicShowModal = (selector, component, componentProps) => {
    //    const selector = 'modal-' + Date.now();
    registerOnce(selector, component);
    const controller = document.querySelector("ion-modal-controller");
    return controller
        .create({
            component: selector,
            componentProps
        })
        .then(modal => {
            modal.present();
            return modal.onWillDismiss() // not exposing other methods nor events
        });
};