<script setup>
import { ref } from 'vue'
</script>

<template>
    <div class="px-4">
        <div class="section border-bottom border-3 mb-5 pb-5">
            <p class="date"><span class="text-danger pe-2">CSS</span> August ,3 , 2022</p>
            <p class="author text-secondary">Written by Emre Kaygusuz</p>
            <h1 class="title2 display-1">Breaking to a new row with flexbox</h1>
            <p class="article2">
                <span class="display-4">F</span>lexbox is a powerful layout tool in CSS that makes it easy to align and
                distribute items in a container. <br><br>
                One common task when using flexbox is creating a new row of items. To do this, you can set the <span
                    class="info px-1">flex-wrap</span> property on the container to <span class="info px-1">wrap</span>,
                which tells the container to start a new row when the available space is filled. <br><br>By default, flex
                items will
                stretch to fill the available space along the main axis of the container, so you can also adjust the <span
                    class="info px-1">flex-grow</span>,
                <span class="info px-1">flex-shrink</span>, and <span class="info px-1">flex-basis</span> properties to
                control how much each item
                should grow or shrink to fit the available space. <br><br>Additionally, you can use the <span
                    class="info px-1">align-items</span> and
                <span class="info px-1">justify-content</span> properties to control the alignment of the items along the
                cross axis and the main axis,
                respectively. <br><br>With these tools, creating a new row with flexbox is a breeze, allowing you to easily
                create
                complex layouts that adapt to different screen sizes and device orientations.
            </p>
        </div>
        <div class="section border-bottom border-3 mb-5 pb-5">
            <p class="date"><span class="text-danger pe-3">VUE</span> March ,7 ,2023</p>
            <p class="author text-secondary">Written by Emre Kaygusuz</p>
            <h1 class="title2 display-1">Selection Sort</h1>
            <p class="article2">
                It is an algorithm where we can sort the elements in the list from largest to
                smallest or
                smallest to largest.
                As it can be seen from its name, it will move it to the end or the beginning of the row by selecting
                the smallest or the largest value according to the preference in each loop.</p>
            <h2 class="article3">How does it work?</h2>
            <p class="article2">The list contains the largest or smallest element according to the preference, then it is
                moved to the end
                or the beginning of the row, again according to the preference. Then the same process is applied for the
                rest of the list. </p>
            <h2 class="article3">Advantages</h2>
            <p class="article2">Guaranteed to find the preferred (largest or smallest) number after the first run of the
                loop.</p>
            <h2 class="article3">Summary</h2>
            <p class="article2">Finds the smallest or largest preferred number in the list and moves it back to the
                preferred first or last.
                Then the same for the rest of the list. the order is applied.</p>
        </div>
    </div>
</template>

<style scoped>
.article2 {
    font-size: 18px;
    padding-left: 70px;
    padding-right: 50px;
    letter-spacing: 0.2px;
}

.article3 {
    padding-left: 35px;
    padding-right: 25px;
    letter-spacing: 0.2px;
}

.info {
    background-color: lightblue;
}
</style>