<template>
    <div class="grid grid-cols-3 py-12 px-12 pt-12 min-h-screen">
        <div class="pr-24">
            <div class="max-w-sm rounded overflow-hidden shadow-2xl">
                <img class="w-full h-96" :src="`/img/${getFoto}`" alt="Logo">

            </div>
        </div>
        <div class="col-span-2">
            <ul class="list-disc">
            <h1><b>{{ getNama }}</b></h1>
            <h1><b>Deskripsi</b></h1>
            <p>{{ getDeskripsi }}</p>
            <h1><b>Jenis Alat</b></h1>
            <p>{{ getJenis }}</p>
            <h1><b>Asal Daerah</b></h1>
            <p>{{ getAsalDaerah }}</p>
            <h1><b>Bahan</b></h1>
            <div v-for="bahan in getBahan">
               <li><a :href="`/bahan/logam/${bahan}`">{{ bahan }}</a></li> 
            </div>
            <h1><b>Bahan Bakar</b></h1>
            <div v-for="bahanB in getBahanBakar">
               <li><a :href="`/bahan/logam/${bahanB}`">{{ bahanB }}</a></li> 
            </div>
            <h1><b>Fungsi</b></h1>
            <p>{{ getFungsi }}</p>
            <h1><b>Olaahan</b></h1>
            <p>{{ getOlahan }}</p>
            <h1><b>Kegiatan</b></h1>
            <div v-for="kegiatan in getKegiatan ">
               <li><a :href="`/kegiatan/${kegiatan}`">{{ kegiatan }}</a></li> 
            </div>
            <h1><b>Pengrajin</b></h1>
            <p>{{ getPengrajin }}</p>
            <h1><b>Deskripsi Fungsi</b></h1>
            <p>{{ getDeskripsiFungsi }}</p>
            <h1><b>Ukuran</b></h1>
            <p>{{ getUkuran }}</p>
            <h1><b>Kepercayaan</b></h1>
            <p>{{ getKepercayaan }}</p>
            <h1><b>Jenis Tungku</b></h1>
            <p>{{ getJenisTungku }}</p>
            <h1><b>URL Website</b></h1>
            <NuxtLink :to="`${getUrlYoutube}`">
               <li><p>{{ getUrlYoutube }}</p></li> 
            </NuxtLink>
            <p>{{ getUrlWeb }}</p>
            <h1><b>URL Video</b></h1>
            <NuxtLink :to="`${getUrlYoutube}`">
               <li><p>{{ getUrlYoutube }}</p></li> 
            </NuxtLink>
        </ul>
        </div>
    </div>
</template>


<script>
let myResult = ''
export default {
    computed: {
        getNama() {
            console.log(this.record)
            return this.record.results.bindings[0].nama.value
        },
        getFoto() {
            return this?.record?.results?.bindings[0]?.image?.value
        },
        getDeskripsi() {
            return this?.record?.results?.bindings[0]?.deskripsi?.value
        },
        getAsalDaerah() {
            return this?.record?.results?.bindings[0]?.asal?.value
        },
        getBahan() {
            return this?.record?.results?.bindings[0]?.bahan?.value.split(",")
        },
        getBahanBakar() {
            return this?.record?.results?.bindings[0]?.bahanBakar?.value.split(",")
        },
        getFungsi() {
            return this?.record?.results?.bindings[0]?.fungsi?.value
        },
        getOlahan() {
            return this?.record?.results?.bindings[0]?.olahan?.value
        },
        getKegiatan() {
            return this?.record?.results?.bindings[0]?.kegiatan?.value.split(",")
        },
        getPengrajin() {
            return this?.record?.results?.bindings[0]?.pengrajin?.value
        },
        getDeskripsiFungsi() {
            return this?.record?.results?.bindings[0]?.deskripsiFungsi?.value
        },
        getJenisTungku() {
            return this?.record?.results?.bindings[0]?.jenisTungku?.value
        },
        getUkuran() {
            return this?.record?.results?.bindings[0]?.ukuran?.value
        },
        getKepercayaan() {
            return this?.record?.results?.bindings[0]?.kepercayaan?.value
        },
        getUrlWeb() {
            return this?.record?.results?.bindings[0]?.urlWeb?.value
        },
        getUrlYoutube() {
            return this?.record?.results?.bindings[0]?.urlYoutube?.value
        },
    },
    props: [
        'record'
    ]
}
</script>