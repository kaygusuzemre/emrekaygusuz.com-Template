<script setup>
import { ref } from 'vue'

const items = ref([
    {
        id: 0,
        name: 'EVK',
        title: 'EVK Furniture',
        text: 'Furniture website design',
        projectLanguage: 'Vue3 + Vite Project',
        projectLanguageColor: 'color:#42b883',
        img: 'vue.png',
        color: 'color:white'
    },
    {
        id: 1,
        name: 'WotL',
        title: 'War of the Legends',
        text: 'Card game with various characters',
        projectLanguage: 'HTML5 Project',
        projectLanguageColor: 'color:#FF5733',
        img: 'html.png',
        color: 'color:white;'
    },
    {
        id: 2,
        name: '',
        title: 'Project',
        text: 'text',
        projectLanguage: 'CSS Project',
        projectLanguageColor: 'color:#2965f1',
        img: 'css.png',
        color: 'color:white;'
    },
    {
        id: 3,
        name: '',
        title: 'Project',
        text: 'text',
        projectLanguage: 'React Project',
        projectLanguageColor: 'color:#61dbfb',
        img: 'react.png',
        color: 'color:white;'
    },
    {
        id: 4,
        name: '',
        title: 'Project',
        text: 'text',
        projectLanguage: 'Bootstrap 5 Snippets',
        projectLanguageColor: 'color:#563d7c',
        img: 'bs.png',
        color: 'color:white;'
    },
    {
        id: 5,
        name: '',
        title: 'Project',
        text: 'text',
        projectLanguage: 'Diving into Node.js',
        projectLanguageColor: 'color:#6cc24a',
        img: 'nodejs.png',
        color: 'color:white;'
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
        <div class="pb-5 px-4">
            <p class="fs-5"><span class="display-4">L</span>orem ipsum dolor sit amet consectetur
                adipisicing elit. Eum
                distinctio, esse amet
                necessitatibus
                quis
                explicabo molestias atque earum? Non corrupti hic doloremque ducimus earum rerum fuga sit voluptas vero
                blanditiis sunt excepturi soluta laborum, dolorum nobis? Soluta, sunt officia eius quidem debitis neque
                corrupti libero suscipit praesentium placeat voluptate qui mollitia deserunt vel repellat, harum saepe
                vero
                fuga iste! Dolores dignissimos quos enim explicabo eos ea rem illo qui doloribus provident, veniam
                aperiam
                culpa maxime adipisci voluptatum. Temporibus itaque aut, alias voluptatum fugiat atque dolore totam
                quaerat
                saepe, pariatur officia, iste harum numquam. Natus velit eveniet quam voluptatibus veniam autem.</p>
        </div>
        <!-- Project cards -->
        <div class="row">
            <div v-for="item in items" class="p-0 col-12 col-lg-6 col-md-12 col-sm-12 mb-4" :key="item.id" style="">
                <div class="card bg-dark mx-4" style="cursor:pointer;">
                    <router-link :to="'/projects/' + item.name">
                        <div class="p-4 card-body text-center">
                            <!-- <img src="../assets/img/vue.png" alt="" width="100" height="100"> -->
                            <img :src="'/src/assets/img/' + item.img" class="text-center img-fluid" alt="img-fluid"
                                style="height:13vh; width:auto;">
                            <div class="mt-3 rounded-3 text-light" style="">
                                <h1 class="card-title fs-4" :style="item.color">{{ item.title }}</h1>
                                <p class="card-text text-secondary fs-6">{{ item.text }}</p>
                                <p class="card-info" :style="item.projectLanguageColor">{{ item.projectLanguage }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
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
}

.card {
    transition: 0.5s ease;
}
</style>