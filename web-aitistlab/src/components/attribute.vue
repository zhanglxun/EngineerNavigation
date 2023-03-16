<script setup>

import {ref} from 'vue'

const titleClass=ref('title')
const text=ref('')

function onInput(e){
    text.value=e.target.value
}

</script>

<template>
    <h1 :class="titleClass">Make me red!</h1>
    <input :value="text" @input="onInput" placeholder="Type here">
    <p>{{ text }}</p>
</template>

<style scoped>
.title{
    color: red;
    font-size: 24px;
}
</style>