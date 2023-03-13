<script setup>
import { ref } from 'vue'

function toTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}

// window.addEventListener(
//     "scroll",
//     () => {
//         if (scrollY > 0) {
//             this.scrollB.value = true;
//         }
//         else {
//             this.scrollB.value = false;
//         }
//         console.log(scrollB.value);
//         console.log(scrollY);
//     },
// );


</script>

<template>
    <div class="container px-4" @v-scroll="scrollHandler">
        <div class="menu d-flex flex-column align-items-center">
            <!-- Menu Bar -->
            <section class="menu-bar d-flex justify-content-center pt-3">
                <div class="menu-items">
                    <ul class="menu-lists d-flex">
                        <li class="fs-5 pe-3">
                            <router-link class="router text-decoration-none" to="/">Home</router-link>
                        </li>
                        <li class="fs-5 pe-3">
                            <router-link class="router text-decoration-none" to="/projects">Projects</router-link>
                        </li>
                        <li class="fs-5 pe-3">
                            <router-link class="router text-decoration-none" to="/blog">Blog</router-link>
                        </li>
                        <li class="fs-5 pe-3">
                            <router-link class="router text-decoration-none" to="/about">About</router-link>
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
        <div class="">
            <a class="arrow text-dark position-fixed pe-5" @click="toTop" style="cursor:pointer;">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
                    class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
            </a>
        </div>
    </div>
</template>

<style scoped>
.menu-bar {
    backdrop-filter: blur(8px);
    position: fixed;
    z-index: 1;
    /* border-bottom: 1px solid black; */
}

a {
    color: black;
}

a.active {
    color: brown;
}

a:hover {
    color: black;
    opacity: 0.6;
}
</style>