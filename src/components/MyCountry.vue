<script setup>
import { ref } from 'vue'

const myCountry = ref('')

fetch('/api/geolocation')
  .then(response => response.json())
  .then(data => {
    console.log('THIS IS HERE!')
    console.log(data)
    myCountry.value = data.country
  })
</script>

<template>
  <h2>My Country</h2>
  <p>{{ myCountry }}</p>
</template>

<style></style>
