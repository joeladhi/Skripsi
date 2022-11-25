import { defineStore } from "pinia"

export const bahanLogam = defineStore('mainBahan', {
    state: () => {
        return {
            urlSparql: 'http://localhost:3030/alatDapurFinalFix'
        }
    },
    actions: {
        async getLogam() {
            let result = await $fetch(this.urlSparql, {
                params: {
                    query: `
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                    PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                    PREFIX schema: <http://schema.org/>
                  
                    SELECT ?bahanLogam ?image
                    WHERE { 
                        ?a rdf:type dapur:Logam .
                        ?a rdfs:label ?bahanLogam . 
                        OPTIONAL{?a schema:image ?image} .
                    }`
                }
            })
            return result
        },
        async getNonLogam() {
            let result = await $fetch(this.urlSparql, {
                params: {
                    query: `
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                    PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                    PREFIX schema: <http://schema.org/>
                  
                    SELECT ?bahanNonLogam ?image
                    WHERE { 
                        ?a rdf:type dapur:NonLogam .
                        ?a rdfs:label ?bahanNonLogam . 
                        OPTIONAL{?a schema:image ?image} .
                    }`
                }
            })
            return result
        },
        async getDetail(nama){
            let result = await $fetch(this.urlSparql,{
                params:  {
                    query: `
                    PREFIX da: <https://www.wowman.org/index.php?id=1&type=get#>
                    PREFIX sc: <http://purl.org/science/owl/sciencecommons/>
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                    PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                    PREFIX schema: <http://schema.org/>

                    SELECT ?nama  ?urlWeb ?urlYoutube ?deskripsi ?nem ?image
                    WHERE{
                    ?type rdfs:subClassOf* dapur:Bahan.
                    ?type rdfs:label ?nem.
                    ?a rdf:type ?type.
                    ?a rdfs:label "${nama}".
                    ?a rdfs:label ?nama.
                    ?a rdfs:comment ?deskripsi.
                    OPTIONAL{
                        SELECT (GROUP_CONCAT(DISTINCT ?web;SEPARATOR=",") AS ?urlWeb)
                        WHERE {
                        ?a rdfs:label "${nama}" .
                        ?a schema:hasUrlWebsite  ?web .
                        }
                    }
                    OPTIONAL{
                        SELECT (GROUP_CONCAT(DISTINCT ?tub;SEPARATOR=",") AS ?urlYoutube)
                        WHERE {
                        ?a rdfs:label "${nama}" .
                        ?a schema:hasUrlGambar ?tub .
                        }
                    }
                    OPTIONAL{
                        ?a schema:image ?image
                    }
                    }
                    `
                }
            })
            return result
       }    
    }
})