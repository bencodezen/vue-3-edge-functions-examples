<script setup>
import { ref } from 'vue'

const response = await fetch('/api/dad-joke').then(response => response.json())

const joke = ref(response.joke)
</script>

<template>
  <h2>My Joke</h2>
  <p>{{ joke }}</p>
</template>

<style></style>
