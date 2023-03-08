<script setup>
import { ref } from 'vue'

const reactivity = ref([
    {
        items: 'reactive: Gets the object and makes the object deeply observable.'
    },
    {
        items: 'readonly: freezes the received reactive, non- reactive or ref element as immutable.'
    },
    {
        items: 'isProxy: checks whether it is reactive or readonly.'
    },
    {
        items: 'isReactive: reactive control.'
    },
    {
        items: 'isReadonly: readonly control.'
    },
    {
        items: 'toRaw: makes the value it receives non - reactive.'
    },
    {
        items: 'markRaw: It prevents the value it receives from turning into reactive.'
    },
    {
        items: 'shallowReactive: Does not make nested elements reactive.'
    },
    {
        items: 'shallowReadonly: Does not make nested elements readonly.'
    },
    {
        items: 'ref: It can take atomic value(int), like if it gets an object, it makes it automatically reactive.Its value is reached with .value.'
    },
    {
        items: 'unref: removes the ref.'
    },
    {
        items: 'toRef: It is used to reference an element of the Reactive object.'
    },
    {
        items: 'toRefs: The entire reactive object can be referenced, toRefs elements do not lose their reactivity when destructed.'
    },
    {
        items: 'isRef: Reference check.'
    },
    {
        items: 'shallowRef: Does not reference nested values.'
    },
    {
        items: 'triggerRef: It is used to trigger the watchers watching shallowRef.'
    },
    {
        items: 'customRef: It can be used to prepare a custom get set, there is a debounce example in the Vue3 document.'
    },
    {
        items: 'computed: It is used to process Reactive elements like reduce etc.Return value can be observed.'
    },
    {
        items: 'watch: It watches the specified element or elements and calls the callback function at the time of change. (It was working singly in Vue2, but in Vue3, it can watch multiple elements.)'
    },
    {
        items: 'watchEffect: Observes the reactive variables in the function without specifying the element specifically.'
    },
]);
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
            <p class="date"><span class="text-danger pe-3">VUE</span> February ,15 ,2023</p>
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
        <div class="section border-bottom border-3 mb-5 pb-5">
            <p class="date"><span class="text-danger pe-3">Vue3 API</span> March ,7 ,2023</p>
            <p class="author text-secondary">Written by Emre Kaygusuz</p>
            <h1 class="title2 display-1">Reactivity API</h1>
            <p class="article2">
                <span class="display-4">S</span>hortly, it is a reflection of the change. For example, if you have a
                variable and define it as a reactive
                variable, the fields you use the variable can reach its current value by catching the changes of this
                variable. Of course, in order to do this, the places where the variable is used must observe the variable.
                For this, we use libraries such as ReactJs, VueJs.
            </p>
            <h2 class="article3">How was the reactivity in Vue 2?</h2>
            <p class="article2">In Vue2, we could define a reactive variable in the data field of the component. If we
                wanted to do this in the component, we were using <span class="info px-1">Vue.observable</span>. But in
                terms of reactivity, that was all we had. In Vue 3, reactivity events have been made more detailed. </p>
            <h2 class="article3 border-bottom border-dark border-1 pb-2">Reactivity variables in Vue 3</h2>
            <ul class="article2">
                <li class="pb-1" v-for="reac in reactivity">
                    {{ reac.items }}
                </li>
            </ul>
            <p class="article3 text-secondary">Note: There is more information about these on the Vue3 docs page. You can
                access it from the links below.</p>
            <ul>
                <li class="" style="">
                    <a class="text-danger text-decoration-none"
                        href="https://v3.vuejs.org/api/basic-reactivity.html#reactive">Basic
                        Reactivity</a>
                </li>
                <li>
                    <a class="text-danger text-decoration-none" href="    https://v3.vuejs.org/api/refs-api.html">Refs
                        API</a>
                </li>
                <li>
                    <a class="text-danger text-decoration-none"
                        href="   https://v3.vuejs.org/api/computed-watch-api.html">Computed Watch API</a>
                </li>
            </ul>
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