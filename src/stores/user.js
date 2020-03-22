import { writable } from "svelte/store";

const SESSION_KEY = "user";

const userFromSession = JSON.parse(
  sessionStorage.getItem(SESSION_KEY) || "null"
);

const store = writable(userFromSession);

store.subscribe(user => {
  if (!user) sessionStorage.removeItem(SESSION_KEY);
  else sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
});

export default store;
