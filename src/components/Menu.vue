<script setup>
// import { ref } from 'vue'
</script>

<template>
    <ul class="menu-lists navBar ps-5 position-fixed">
        <li class="menu-list fs-5 pe-2 pb-2">
            <router-link class="router text-decoration-none" to="/">Home</router-link>
        </li>
        <li class="menu-list fs-5 pe-2 pb-2">
            <router-link class="router text-decoration-none" to="/projects">Projects</router-link>
        </li>
        <li class="menu-list fs-5 pe-2 pb-2">
            <router-link class="router text-decoration-none" to="/blog">Blog</router-link>
        </li>
        <li class="menu-list fs-5 pe-2 pb-2">
            <router-link class="router text-decoration-none" to="/about" style="">About</router-link>
        </li>
        <li class="menu-list fs-5 pe-2 pb-2">
            <router-link class="router text-decoration-none" to="/contact">Contact</router-link>
        </li>
    </ul>
</template>

<style scoped>
a {
    color: black;
}

a.active {
    color: brown;
}

a:hover {
    color: brown;
    opacity: 0.7;
}
</style>