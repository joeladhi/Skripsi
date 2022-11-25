import { defineStore } from "pinia"

export const provinsi = defineStore('mainTiga', {
    state: () => {
        return {
            urlSparql: 'http://localhost:3030/alatDapurFinalFix'
        }
    },
    actions: {
        async getDiy() {
            let result = await $fetch(this.urlSparql, {
                params: {
                    query: `
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                    PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                    PREFIX schema: <http://schema.org/>
                  
                    SELECT ?namaAlat ?image
                    WHERE { 
                        ?a rdf:type dapur:AlatDapur .
                        ?a rdfs:label ?namaAlat . 
                        OPTIONAL{?a schema:image ?image} .
                        ?a dapur:asalDaerah ?b .
                        ?b rdfs:label "Daerah Istimewa Yogyakarta" .
                    }`
                }
            })
            return result
        },
        async getJawaTengah() {
            let result = await $fetch(this.urlSparql, {
                params: {
                    query: `
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                    PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                    PREFIX schema: <http://schema.org/>

                    SELECT ?namaAlat ?image
                    WHERE { 
                        ?a rdf:type dapur:AlatDapur .
                        ?a rdfs:label ?namaAlat . 
                        OPTIONAL{?a schema:image ?image} .
                        ?a dapur:asalDaerah ?b .
                        ?b rdfs:label "Jawa Tengah" .
                    }`
                }
            })
            return result
        }
    }
})