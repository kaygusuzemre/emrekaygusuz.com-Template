<script setup>
import Posts from '../src/components/Posts.vue'
import PostsBar from '../src/components/PostsBar.vue'
import Icons from '../src/components/Icons.vue'
import Menu from '../src/components/Menu.vue'
</script>

<template>
  <div class="" style="">
    <Posts class="posts-item"></Posts>
    <PostsBar class="posts-bar"></PostsBar>
  </div>
</template>

<style>
@media screen and (max-width: 992px) {
  .posts-item {
    display: none;
  }
}

@media screen and (min-width: 992px) {
  .posts-bar {
    display: none;
  }
}
</style>
