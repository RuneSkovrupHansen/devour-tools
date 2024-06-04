import { is_development_environment } from "common";

const route_site = is_development_environment()
    ? "http://localhost:3000/"
    : "https://runeskovruphansen.github.io";

const route_base = route_site + "/devour-tools";

const route_faq = route_base + "/faq";

console.log(route_base);
