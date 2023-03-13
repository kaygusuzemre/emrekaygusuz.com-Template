<template>
    <div class="">
        <div class="main d-flex">
            <div class="">
                <img src="../assets/img/2.png" class="img-fluid" alt="responsive-img" style="">
            </div>
            <div class="">
                <h1 class="display-1" style="">Emre <br> Kaygusuz <br><span class="text-dark fs-5">Front-end
                        developer</span></h1>
            </div>
        </div>

        <div class="about text-center pt-4 mt-3">
            <h2 class="text-uppercase text-start pb-3 display-6 text-center">Do you wanna learn more about me?</h2>
            <p class="text-secondary text-start fs-5 pb-4">Hi, I'm Emre, and welcome to my personal website! I am a
                passionate
                frontend developer with a keen eye for detail and a strong desire to create beautiful, user-friendly
                interfaces. With 3 years of experience in the industry, I have honed my skills in HTML, CSS, JavaScript,
                and other cutting-edge technologies to create dynamic and engaging websites that stand out from the crowd.
                My approach to web development is centered around the user experience, and I take great pride in my ability
                to create intuitive and seamless interfaces that are both functional and visually appealing. I believe that
                good design is the foundation of a great website, and I am committed to staying up-to-date with the latest
                trends and best practices in the industry. Thank you for visiting my website, and I look forward to the
                opportunity to work with you!
            </p>

            <router-link to="/About"><button class="btn-home btn btn-dark mb-4">Click for more
                    details!</button></router-link>

        </div>
    </div>
</template>

<style scoped>
@media screen and (max-width: 992px) {
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0;
        margin: 0;
    }
}

h1 {
    text-shadow: 1px 1px 6px black;
}

img {
    height: 30vh;
    width: auto;
}

span {
    text-shadow: none;
}

.about {
    border-top: 1px solid black;
}
</style>