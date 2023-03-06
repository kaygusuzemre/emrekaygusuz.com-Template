import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Projects from "../views/Projects.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Project1 from "../views/Projects/Project1.vue";
import Project2 from "../views/Projects/Project2.vue";
import Project3 from "../views/Projects/Project3.vue";
import Project4 from "../views/Projects/Project4.vue";
import Project5 from "../views/Projects/Project5.vue";
import Project6 from "../views/Projects/Project6.vue";
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
		// Child of projects
		{
			path: "/projects/EVK",
			name: "project1",
			component: Project1,
		},
		{
			path: "/projects/WotL",
			name: "project2",
			component: Project2,
		},
	],
});

export default router;
