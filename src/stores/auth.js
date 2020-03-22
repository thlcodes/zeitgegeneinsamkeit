import { writable } from "svelte/store";

const SESSION_KEY = "auth";

const authFromSession = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");

const store = writable(authFromSession);

store.subscribe(auth => {
  if (auth == undefined) return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(auth));
});

export default store;
