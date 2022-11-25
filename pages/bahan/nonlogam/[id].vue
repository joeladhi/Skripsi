<template>
    <ElementDetailBahan :record="records"/>
</template>

<script setup>
    const store =  bahanLogam()
    const route = useRoute()
    const nama = route.params.id
    let records = await store.getDetail(nama)
    // console.log(records.results.bindings[0].nama.value)

    definePageMeta({
        layout: 'nonavbar'
    })
</script>