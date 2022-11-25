<template>
    <div class="py-12 px-12 min-h-screen">
        <h1>Kegiatan</h1>
        <div class="grid grid-cols-3 gap-8">
            <div v-for="(index, record) in records.results.bindings" :key="record">
                <ElementCard :record="index" />
            </div>
        </div>
    </div>
</template>

<script setup>
const store = alatDapur()
let records = await store.getKegiatan()
</script>