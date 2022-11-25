<template>
    <div class="py-12 px-12 min-h-screen">
        <h1>Jawa Tengah</h1>
      <div class="grid grid-cols-3 gap-8">
        <div v-for="(index, record) in records.results.bindings" :key="record">
          <!-- <h1>{{ index }}</h1> -->
          <ElementCard :record="index" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const store = provinsi()
  let records = await store.getJawaTengah()
  console.log(records.results.bindings)
  </script>