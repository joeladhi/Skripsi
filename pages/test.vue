<template>
    <!-- <template v-for="(index, record) in records.results.bindings" :key="record">
        <h1>{{ index.namaAlat.value }}</h1>
        <ElementDetailAlat :record="index" />
    </template> -->
</template>

<script setup>
    const store = alatDapur()
    let records = await store.getDetail("Cowek")
    let tes = records.results.bindings[0].bahan.value.split(",")
    console.log(tes)
</script>
