<script setup>
import { ref } from 'vue'

const sign = ref('+');

const items = ref([
    {
        id: 0,
        name: 'EVK',
        title: 'EVK Furniture',
        text: 'furniture website design',
        color: 'color:white',
        //Project language design
        projectLanguage: 'Vue3 + Vite Project',
        projectLanguageColor: 'color:#42b883',
        img: 'vue.png',
        img2: 'vite.png',
    },
    {
        id: 1,
        name: 'WotL',
        title: 'War of the Legends',
        text: 'card game with characters',
        color: 'color:white;',
        //Project language design
        projectLanguage: 'Vue2 + Bootstrap5',
        projectLanguageColor: 'color:#42b883',
        projectLanguageColor2: 'color:#563d7c',
        img: 'vue.png',
        img2: 'bs.png',
    },
    {
        id: 2,
        name: 'project3',
        title: 'Project',
        color: 'color:white;',
        //Project language design
        text: 'text',
        projectLanguage: 'CSS Project',
        projectLanguageColor: 'color:#2965f1',
        img: 'css.png',
    },
    {
        id: 3,
        name: 'project4',
        title: 'Project',
        color: 'color:white;',
        //Project language design
        text: 'text',
        projectLanguage: 'React Project',
        projectLanguageColor: 'color:#61dbfb',
        img: 'react.png',
    },
    {
        id: 4,
        name: 'project5',
        title: 'Project',
        color: 'color:white;',
        //Project language design
        text: 'text',
        projectLanguage: 'HTML5 Project',
        projectLanguageColor: 'color:#FF5733',
        img: 'html.png',
    },
    {
        id: 5,
        name: 'project6',
        title: 'Project',
        color: 'color:white;',
        //Project language design
        text: 'text',
        projectLanguage: 'Diving into Node.js',
        projectLanguageColor: 'color:#6cc24a',
        img: 'nodejs.png',
    },
]);
</script>

<template>
    <div class="mx-4">
        <!-- Title -->
        <div class="text-center pb-3">
            <h1 class="display-4" @click="counter">Projects</h1>
        </div>
        <!-- Info -->
        <div class="mb-5 px-4 pb-3 border-bottom border-1 border-dark">
            <p class="fs-5">My projects are focused on creating the user interface and user experience of a website or
                application. This
                involves designing and implementing the layout, typography, colors, images, and other visual elements that
                users interact with. I used a variety of programming languages and frameworks to create these interfaces,
                including HTML, CSS, and JavaScript. Examples of my projects include creating responsive designs that work
                well on desktop and mobile devices, building interactive interfaces that allow users to navigate and
                interact with content, and integrating third-party APIs and services into a website or application. In order
                to create effective and engaging user experiences, I have a strong understanding of web design principles
                and user behavior, as well as technical expertise in coding and development tools.</p>
        </div>
        <!-- Project cards -->
        <div class="row">
            <div v-for="item in items" class="card-main p-0 col-12 col-lg-6 col-md-12 col-sm-12 mb-4" :key="item.id"
                style="">
                <router-link :to="'projects/' + item.name">
                    <div class="card bg-dark mx-4" style="cursor:pointer;">
                        <div class="p-4 card-body">
                            <div class="card-body-1 text-center">
                                <img :src="'/src/assets/img/' + item.img" class="text-center img-fluid" alt="img-fluid"
                                    style="height:10vh; width:auto;">
                                <span class="text-light" v-if="item.img2">{{ sign }}</span>
                                <img v-if="item.img2" :src="'/src/assets/img/' + item.img2"
                                    class="ps-2 text-center img-fluid" alt="img-fluid" style="height:10vh; width:auto;">
                                <div class="mt-3 rounded-3 text-light" style="">
                                    <h1 class="card-title fs-4" :style="item.color">{{ item.title }}</h1>
                                    <p class="card-text text-secondary text-capitalize fs-6">{{ item.text }}</p>
                                    <p class="card-info" :style="item.projectLanguageColor">{{ item.projectLanguage }}</p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="card-body-2 bg-dark mx-4 d-flex align-items-center position-absolute"
                                                                                        style="cursor:pointer;">
                                                                                        <div class="p-4 card-body">
                                                                                            <p class="text-light"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                                                                                                facilis fugiat
                                                                                                magnam
                                                                                                quis animi, ab eos modi vitae! Fugiat modi temporibus magni voluptatibus quos
                                                                                                necessitatibus
                                                                                                numquam. Placeat in pariatur at!</p>
                                                                                        </div>
                                                                                    </div> -->
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: white;
}

.card:hover {
    transform: scale(1.1);

    /* .card-body-1 {
        opacity: 0.3;
    } */
}

/* .card:hover .card-body-2 {
    z-index: 1;
    transition: all 0s;
}

.card:hover .card-body-1 {
    z-index: -1;
    filter: blur(4px);
}

.card-body-2 {
    z-index: -1;
    transition: all 0.1s;
}

.card-body-1 {
    z-index: 1;
    transition: all 1s;
} */

@media (max-width: 1200px) {
    .card-main {
        flex: 0 0 auto;
        width: 100%;
    }
}

.card {
    transition: all 1s ease;
}
</style>