<script setup>
</script>

<template>
    <div class="container px-4">
        <div class="menu d-flex flex-column align-items-center">
            <!-- Menu Bar -->
            <section class="menu-bar d-flex justify-content-center pt-3">
                <div class="menu-items">
                    <ul class="menu-lists d-flex">
                        <li class="fs-5 pe-3">
                            <router-link class="router text-decoration-none" to="/">Home</router-link>
                        </li>
                        <li class="fs-5 pe-3">
                            <router-link class="router text-decoration-none" to="/about">About</router-link>
                        </li>
                        <li class="fs-5 pe-3">
                            <router-link class="router text-decoration-none" to="/blog">Blog</router-link>
                        </li>
                        <li class="fs-5 pe-3">
                            <router-link class="router text-decoration-none" to="/projects">Projects</router-link>
                        </li>
                        <li class="fs-5 pe-3">
                            <router-link class="router text-decoration-none" to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </section>
            <!-- Views -->
        </div>
        <section class="pt-5 mt-4">
            <router-view class="view"></router-view>
        </section>
    </div>
</template>

<style scoped>
.menu-bar {
    backdrop-filter: blur(8px);
    position: fixed;
    z-index: 1;
    /* border-bottom: 1px solid black; */
}
</style>