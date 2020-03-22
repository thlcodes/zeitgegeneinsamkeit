// ap

export const APP_NAME = "Richtig Verbunden";

// page urls

export const PAGE_START = "/start";
export const PAGE_REGISTER = "/register";
export const PAGE_LEGAL = "/legal";
export const PAGE_CREATEPROFILE = "/createprofile";
export const PAGE_PROFILE = "/profile";
export const PAGE_DASHBOARD = "/";
export const PAGE_LOGIN = "/login";
export const PAGE_LOGOUT = "/logout";
export const PAGE_TUTORIAL = "/tutorial";
export const PAGE_WAITINGROOM = "/waiting";
export const PAGE_CALL = "/call";

// tags

export const TAG_SENIOR = "senior";
export const TAG_FRIEND = "friend";
export const TAG_HELPER = "helper";

// texts

export const TEXT_SENIOR = "Senior/in";
export const TEXT_HELPER = "Freiwillige/r";

// texts maps

export const TEXTMAP_USERTYPE = {
  [TAG_SENIOR]: TEXT_SENIOR,
  [TAG_FRIEND]: "Freund/in eine/s Senior/in",
  [TAG_HELPER]: TEXT_HELPER
};

export const TEXTS_INTERESTS = [
  "Sport",
  "Fußball",
  "Reisen",
  "Kochen - Lieblingsrezepte",
  "Spiele",
  "Technische Fragen",
  "Familie",
  "Beruf",
  "Heimwerk/Hobby",
  "Gesundheit",
  "Wirtschaft/Gesellschaft",
  "Musik",
  "Theater",
  "Kunst",
  "Film und Fernsehen",
  "Literatur",
  "Wissenschaft",
  "Religion + Spiritualität"
];

// api

export const API_KEY = "c60023fd-ffaa-41bf-bf76-497fb6c1d725";
export const API_GQL_BASEURI = "/.netlify/functions/gql";
