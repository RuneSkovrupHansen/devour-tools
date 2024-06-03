import { is_local } from "common";

const route_site = is_local()
    ? "http://localhost:3000/"
    : "https://runeskovruphansen.github.io";

const route_base = route_site + "/devour-tools";
const route_faq = route_base + "/faq";

console.log(route_base);
