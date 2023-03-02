<script setup>
import { ref } from 'vue'

const items = ref([
    {
        id: 0,
        title: 'Project',
        text: 'text',
    },
    {
        id: 1,
        title: 'Project',
        text: 'text',
        img: 'vue.png',
    },
    {
        id: 2,
        title: 'Project',
        text: 'text',
        img: 'bs.png',
    },
    {
        id: 3,
        title: 'Project',
        text: 'text',
        img: '../assets/bs.png'
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
        img: 'bs.png',
    },
]);
</script>

<template>
    <div class="px-4">
        <!-- Title -->
        <div class="text-center pb-3">
            <h1 class="display-4">Projects</h1>
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
            <div v-for="item in items" class="col col-lg-4 col-sm-12 col-md-6 pb-4" :key="item.id">
                <div class="card bg-dark" style="cursor:pointer;">
                    <div class="card-body text-center">
                        <img src="../assets/img/vue.png" alt="">
                        <h3 class="card-title text-light">{{ item.title + ' ' + item.id }}</h3>
                        <p class="card-text text-light">{{ item.text }}</p>
                    </div>

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