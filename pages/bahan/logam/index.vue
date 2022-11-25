<template>
    <div class="py-12 px-12 min-h-screen">
        <h1>Logam</h1>
        <div class="grid grid-cols-3 gap-8">
            <div v-for="(index, record) in records.results.bindings" :key="record">
                <ElementCard :record="index" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
const store = bahanLogam()
let records = await store.getLogam()
</script>