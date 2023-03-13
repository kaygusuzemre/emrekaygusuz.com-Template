<script setup>
import { ref } from 'vue'
const stopMe = ref(true);
</script>

<template>
    <div class="px-4">
        <h1 class="pb-3 text-center mb-4">About Me</h1>
        <div class="d-flex justify-content-between mb-5">
            <div class="col-6" v-if="stopMe">
                <div class="a-icons d-flex flex-column align-items-center justify-content-between">
                    <img class="animated img-fluid" src="../assets/img/vue.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;">
                    <img class="animated img-fluid mb-4" src="../assets/img/vite.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;">
                    <img class="animated img-fluid" src="../assets/img/react.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;">
                    <img class="animated img-fluid" src="../assets/img/nodejs.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;">
                    <img class="animated img-fluid mb-5" src="../assets/img/html.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;">
                    <img class="animated img-fluid mb-5" src="../assets/img/css.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;">
                    <img class="animated img-fluid mb-5" src="../assets/img/bs.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;">
                    <button class="btn btn-danger" @click="stopMe = !stopMe">Stop</button>
                </div>
            </div>
            <div class="not-animated col-6" v-else>
                <div class="na-icons d-flex flex-column align-items-center justify-content-between">
                    <img class="img-fluid" src="../assets/img/vue.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;" :style="stopMe">
                    <img class="img-fluid mb-4" src="../assets/img/vite.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;" :style="stop">
                    <img class="img-fluid" src="../assets/img/react.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;" :style="stopMe">
                    <img class="img-fluid" src="../assets/img/nodejs.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;" :style="stopMe">
                    <img class="img-fluid mb-5" src="../assets/img/html.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;" :style="stopMe">
                    <img class="img-fluid mb-5" src="../assets/img/css.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;" :style="stopMe">
                    <img class="img-fluid mb-5" src="../assets/img/bs.png" alt="img-fluid"
                        style="max-height:20vh; max-width:auto;" :style="stopMe">
                    <button class="btn btn-danger" @click="stopMe = !stopMe">Start</button>
                </div>
            </div>
            <div class="col-6 d-flex">
                <p class="fs-5"><span class="fs-1">M</span>y portfolio showcases a variety of projects I have worked
                    on,
                    ranging from small
                    personal
                    websites to
                    large-scale e-commerce platforms. I am constantly pushing myself to learn and grow as a developer, and I
                    am
                    always eager to take on new challenges and explore new technologies. My passion for frontend development
                    is
                    driven by my desire to create meaningful and impactful experiences for users, and I am always striving
                    to
                    improve my craft and deliver the best possible results for my clients. <br><br>

                    In addition to my technical skills, I am also a strong communicator and collaborator, and I enjoy
                    working
                    closely with clients to understand their unique requirements and deliver solutions that exceed their
                    expectations. Whether you are looking to create a new website from scratch, revamp an existing site, or
                    simply
                    need assistance with a specific project, I am confident that I can provide the skills and expertise you
                    need
                    to
                    achieve your goals. I am dedicated to providing exceptional customer service and support, and I am
                    always
                    available to answer any questions or concerns you may have throughout the development process.
                    I believe that clear and effective communication is essential to the success of any project, which is
                    why I
                    place a strong emphasis on keeping my clients informed and involved throughout the development process.
                    I
                    pride
                    myself on my ability to listen carefully to my clients' needs and preferences, and to provide timely and
                    thoughtful feedback that helps guide the development process. I am also committed to delivering
                    high-quality
                    work that is on time and on budget, and I will go above and beyond to ensure that my clients are
                    completely
                    satisfied with the end result.<br><br>

                    When I'm not coding, you can usually find me exploring the great outdoors or trying out new recipes in
                    the
                    kitchen, playing guitar or playing game. I believe that a healthy work-life balance is key to success,
                    and I
                    make it a priority to stay active and engaged in my personal life. The others are only hobbies for me. I
                    am
                    also
                    passionate about giving back to the community and I am always looking for ways to use my skills and
                    talents
                    to
                    make a positive impact.<br><br>

                    Thank you for taking the time to learn more about me, and I invite you to explore my portfolio and see
                    some
                    of
                    the projects I've worked on. If you have any questions or would like to discuss a project, please don't
                    hesitate
                    to reach out - I'd love to hear from you! and of course I look forward to the opportunity to work with
                    you!
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animated {
    animation: imgAnimation 3s infinite;
    transition: 1s all ease;
}

.not-animated {
    animation: imgAnimation 0s infinite;
    transition: 1s all ease;
}

@keyframes imgAnimation {
    0% {
        transform: scale(1);
    }

    25% {
        transform: scale(1.1);
    }

    50% {
        transform: rotate(1800deg);
    }
}
</style>