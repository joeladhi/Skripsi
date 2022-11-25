<template>
    <div class="grid grid-cols-3 py-12 px-12 pt-12 min-h-screen">
        <div class="pr-24">
            <div class="max-w-sm rounded overflow-hidden shadow-2xl">
                <img class="w-full h-96" :src="`/img/${getFoto}`" alt="Logo">

            </div>
        </div>
        <div class="col-span-2">
            <h1><b>{{ getNama }}</b></h1>
            <h1><b>Deskripsi</b></h1>
            <p>{{ getDeskripsi }}</p>
            <h1><b>URL Website</b></h1>
            <NuxtLink :to="`${getUrlWeb}`">
                <p>{{ getUrlWeb }}</p>
            </NuxtLink>
            <h1><b>URL Video</b></h1>
            <NuxtLink :to="`${getUrlYoutube}`">
                <p>{{ getUrlYoutube }}</p>
            </NuxtLink>
        </div>
    </div>
</template>


<script>
export default {
    computed:{
        getNama(){
            console.log(this.record)
            return this.record.results.bindings[0].nama.value
        },
        getFoto(){
            return this?.record?.results?.bindings[0]?.image?.value
        },
        getDeskripsi(){
            return this?.record?.results?.bindings[0]?.deskripsi?.value
        },
        getUrlWeb(){
            return this?.record?.results?.bindings[0]?.urlWeb?.value
        },
        getUrlYoutube(){
            return this?.record?.results?.bindings[0]?.urlYoutube?.value
        }
    },
    props: [
        'record'
    ]
}
</script>