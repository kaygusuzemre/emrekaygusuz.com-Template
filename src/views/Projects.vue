<script setup>
import { ref } from 'vue'

// const images = ref([
//     {
//         id: 0,
//         url: '../'
//     }
// ])

const items = ref([
    {
        id: 0,
        title: 'EVK Furniture',
        text: 'Furniture website design',
        img: 'vue.png',
        color: 'color:black;'
    },
    {
        id: 1,
        title: 'War of the Legends',
        text: 'text',
        img: 'html.png',
    },
    {
        id: 2,
        title: 'Project',
        text: 'text',
        img: 'css.png',
    },
    {
        id: 3,
        title: 'Project',
        text: 'text',
        img: 'react.png',
    },
    {
        id: 4,
        title: 'Project',
        text: 'text',
        img: 'bs.png',
    },
    {
        id: 5,
        title: 'Project',
        text: 'text',
        img: 'nodejs.png',
    },
]);
</script>

<template>
    <div class="px-4">
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
            <div v-for="item in items" class="col col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4" :key="item.id" style="">
                <div class="card bg-dark" style="cursor:pointer;">
                    <router-link to="/projects/projectOne">
                        <div class="p-4 card-body text-center">
                            <!-- <img src="../assets/img/vue.png" alt="" width="100" height="100"> -->
                            <img :src="'/src/assets/img/' + item.img" class="text-center"
                                style="max-height:10vh; width:auto;">
                            <div class="p-3 mt-3 rounded-3 text-light" style="">
                                <h1 class="card-title fs-4" :style="item.color">{{ item.title }}</h1>
                                <h4 class="card-text text-light">{{ item.id }}</h4>
                                <p class="card-text text-light">{{ item.text }}</p>
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