import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Projects from "../views/Projects.vue";
import PageNotFound from "../views/PageNotFound.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/projects",
			name: "projects",
			component: Projects,
		},
		{
			path: "/blog",
			name: "blog",
			component: Blog,
		},
		{
			path: "/about",
			name: "about",
			component: About,
		},
		{
			path: "/contact",
			name: "contact",
			component: Contact,
		},
		{
			path: "/:catchAll(.*)*",
			name: "PageNotFound",
			component: PageNotFound,
		},
	],
});

export default router;
