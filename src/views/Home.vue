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

        <div class="about p-5 mt-3">
            <h2 class="text-uppercase pb-3 display-6">Do you wanna learn more about me?</h2>
            <p class="text-secondary fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius iure
                magnirepellendus! Repellat asperiores cumque et, veniam atque libero, deserunt ad mollitia corporis,
                consequuntur facilis. Ad sequi delectus minima quis optio cum, quas distinctio architecto tempore rerum
                enim quo veritatis id fuga eveniet vel, amet molestiae est saepe. Aut.
            </p>
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
    text-shadow: 2px 2px 6px black;
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