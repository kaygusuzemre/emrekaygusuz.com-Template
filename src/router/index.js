import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Projects from "../views/Projects.vue";
import PageNotFound from "../views/PageNotFound.vue";
// import ProjectOne from "../views/ProjectOne.vue";
// import ProjectTwo from "../views/ProjectTwo.vue";
// import p3 from "../views/p3.vue";
// import p4 from "../views/p4.vue";

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
			path: "/projects/",
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
		// Child
		// {
		// 	path: "/projects/p1",
		// 	name: "projectOne",
		// 	component: ProjectOne,
		// },
		// {
		// 	path: "/projects/p2",
		// 	name: "projectTwo",
		// 	component: ProjectTwo,
		// },
		// {
		// 	path: "/projects/p3",
		// 	name: "p3",
		// 	component: p3,
		// },
		// {
		// 	path: "/projects/p4",
		// 	name: "p4",
		// 	component: p4,
		// },
	],
});

export default router;
