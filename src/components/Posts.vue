<script setup>
import Icons from './Icons.vue'
import Menu from './Menu.vue'

import { ref } from 'vue'

function toTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

</script>

<template>
    <div class="borderSize" style="width:100%; min-height:100vh;">
        <!-- Back button -->
        <div class="back-btn text-light" style="cursor:pointer;" @click="$router.go(-1)"><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>Back
        </div>

        <!-- Page View -->
        <div class="d-flex justify-content-between py-5 px-5" id="navbar-example2">
            <div class="container d-flex justify-content-between">

                <!-- Social Media Icons -->
                <div class="icons col-2">
                    <Icons></Icons>
                </div>

                <!--Main Page-->
                <div class="col-8">
                    <router-view class="view"></router-view>
                </div>

                <!-- Navigation Bar -->
                <div class="menu col-2">
                    <Menu></Menu>
                </div>
            </div>
        </div>
        <!-- Arrow to up -->
        <div class="" @scroll="handleScroll">
            <a class="arrow text-dark position-fixed" @click="toTop" style="cursor:pointer;">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
                    class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
            </a>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500&display=swap');

:root {
    --ff: 'Chakra Petch', sans-serif;
    --bg-primary: '#36454F';
}

h1,
h2,
h3,
h4,
p,
span {
    color: black;
}

h1 {
    text-shadow: 1px 1px 4px black;
}

h2 {
    text-shadow: 1px 1px 2px black;
}

.router.router-link-active,
.router.router-link-exact-active {
    color: darkgoldenrod;
}

.router {
    color: black;
}

.arrow {
    left: 90vw;
    bottom: 9vh;
    animation: bounce 3s infinite;
}

@keyframes bounce {
    0% {
        transform: scale(1);
    }

    50% {
        /* transform: translateY(-15px); */
        transform: scale(1.5);
    }
}

li svg:hover {
    color: darkgoldenrod;
    transform: scale(1.5);
    transition: all 0.3s ease-in-out;
}

li svg {
    transform: scale(1);
    transition: all 0.3s ease-in-out;
}

* {
    font-family: var(--ff);
    background: var(--bg-primary);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

li {
    list-style-type: none;
}

.borderSize {
    border: 30px solid #28282B;
}

.router:hover {
    color: darkgoldenrod;
    opacity: 50%;
}

/* Animation */
.view {
    position: relative;
    animation: fadeIn 1s ease-in-out;
    transition: all;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.back-btn {
    left: 50%;
    position: absolute;
    color: red;
    top: 0%;
    /* background-color: #28282B; */
    padding: 3px;
    transform: scale(1);
    transition: all 0.5s ease;
}

.back-btn:hover {
    transform: scale(1.3);
    transition: all 0.5s;
}
</style>
