import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/the-universe", "/pages/theUniverse.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.loadPage();

window.onpopstate = () => router.loadPage();
window.route = () => router.route();