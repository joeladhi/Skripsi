<template>
    <ElementDetailAlat :record="records" />
</template>

<script lang="ts" setup>
    const route = useRoute()
    const store = alatDapur()
    const nama = route.params.id
    let records = await store.getDetail(nama)

    definePageMeta({
        layout: "nonavbar"
    })
</script>