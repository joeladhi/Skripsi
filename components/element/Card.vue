<template>
    <NuxtLink :to=" getLink  + getNama">
        <div class="max-w-sm rounded overflow-hidden shadow-2xl">
            <img class="w-full h-96" :src="`/img/${record?.image?.value}`" alt="alt">
            <div class="px-6 py-4">
                <!-- {{ '/img/'+(record?.image?.value) }} -->
                <div class="font-bold text-xl mb-2 text-center">{{ getNama }}</div>
            </div>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    computed: {
        getNama() {
            if(this.record.namaAlat != undefined) {
                return this.record.namaAlat.value
            }
            if(this.record.alatMasak != undefined) {
                return this.record.alatMasak.value
            }
            if(this.record.alatSimpan != undefined) {
                return this.record.alatSimpan.value
            }
            if(this.record.bahanLogam != undefined) {
                return this.record.bahanLogam.value
            }
            if(this.record.bahanNonLogam != undefined) {
                return this.record.bahanNonLogam.value
            }
            if(this.record.namaKegiatan != undefined) {
                return this.record.namaKegiatan.value
                // console.log('hai')
            }
        },
        getLink(){
            if(this.record.namaAlat != undefined) {
                if(this.record.jenis.value == 'Alat Masak') {
                    return "/alat/masak/"
                }
                if(this.record.jenis.value == 'Alat Menyimpan') {
                    return "/alat/simpan/"
                }
            }
            if(this.record.alatMasak != undefined) {
                return "/alat/masak/"
            }
            if(this.record.alatSimpan != undefined) {
                return "/alat/simpan/"
            }
            if(this.record.bahanLogam != undefined) {
                return "/bahan/logam/"
            }
            if(this.record.bahanNonLogam != undefined) {
                return "/bahan/nonlogam/"
            }
            if(this.record.namaKegiatan != undefined) {
                return "/kegiatan/"
            }
        }
    },
    props: [
        'record',
    ]
}
</script>

<script setup>

</script>