import { defineStore } from "pinia"

export const alatDapur = defineStore('main', {
    state: () => {
        return {
            urlSparql: 'http://localhost:3030/alatDapurFinalFix'
        }
    },
    actions: {
        async getAlat() {
            let result = await $fetch(this.urlSparql, {
                params: {
                    query: `
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                    PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                    PREFIX schema: <http://schema.org/>

                    SELECT ?namaAlat ?image ?jenis
                    WHERE { 
                    ?a rdf:type dapur:AlatDapur .
                    ?a rdf:type ?b .
                    ?b rdfs:label ?jenis .
                    MINUS{
                        ?b rdfs:label 'Alat Dapur'
                    }
                    ?a rdfs:label ?namaAlat . 
                    OPTIONAL{?a schema:image ?image} .
                    }  

                    ORDER BY ?namaAlat`
                }
            })
            return result
        },
        async getAlatMasak() {
            let result = await $fetch(this.urlSparql, {
                params: {
                    query: `
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                    PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                    PREFIX schema: <http://schema.org/>

                    SELECT ?alatMasak ?image ?jenis
                    WHERE { 
                    ?a rdf:type dapur:AlatMasak .
                    ?a rdf:type ?b . 
  					?b rdfs:label ?jenis .
                    ?a rdfs:label ?alatMasak . 
                    OPTIONAL{?a schema:image ?image} .
					}
                    order by ?alatMasak`
                }
            })
            return result
        },
        async getAlatSimpan() {     
            let result = await $fetch(this.urlSparql, {
                params: {
                    query: `
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                    PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                    PREFIX schema: <http://schema.org/>

                    SELECT ?alatSimpan ?image
                    WHERE { 
                    ?a rdf:type dapur:AlatMenyimpan .
                    ?a rdfs:label ?alatSimpan . 
                    OPTIONAL{?a schema:image ?image} .
					}
                    order by ?alatSimpan
                    `
                }
            })
            return result
        },
        async getAlatMasak() {
            let result = await $fetch(this.urlSparql, {
                params: {
                    query: `
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                    PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                    PREFIX schema: <http://schema.org/>

                    SELECT ?alatMasak ?image ?jenis
                    WHERE { 
                    ?a rdf:type dapur:AlatMasak .
                    ?a rdf:type ?b . 
  					?b rdfs:label ?jenis .
                    ?a rdfs:label ?alatMasak . 
                    OPTIONAL{?a schema:image ?image} .
					}
                    order by ?alatMasak`
                }
            })
            return result
        },
        async getDetail(nama) {
            let result = await $fetch(this.urlSparql, {
                params: {
                    query: `
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                    PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                    PREFIX schema: <http://schema.org/>

                    SELECT ?nama ?deskripsi ?bahan ?asal ?fungsi ?bahanBakar ?kegiatan ?olahan ?pengrajin ?deskripsiFungsi ?ukuran ?jenisTungku ?kepercayaan ?penggunaan ?urlWeb ?urlYoutube ?image
                    WHERE{
                    ?a rdfs:label "${nama}" .
                    ?a rdf:type dapur:AlatDapur.
                    ?a rdfs:label ?nama .
                    OPTIONAL {?a rdfs:comment ?deskripsi }.
                    OPTIONAL {
                        SELECT (GROUP_CONCAT(DISTINCT ?bah;SEPARATOR=",") AS ?bahan)
                        WHERE {
                          ?a rdfs:label "${nama}" .
                          ?a dapur:hasBahan ?b .
                          ?b rdfs:label ?bah .
                        }
                      }

                    {
                        SELECT (GROUP_CONCAT(DISTINCT ?fung;SEPARATOR=",") AS ?fungsi)
                        WHERE {
                            ?a rdfs:label "${nama}" .
                            ?a dapur:hasFungsi ?d .
                            ?d rdfs:label ?fung .
                    }
                    }
                    {
                        SELECT (GROUP_CONCAT(DISTINCT ?asalDaerah;SEPARATOR=",") AS ?asal)
                        WHERE {
                            ?a rdfs:label "${nama}" .
                            ?a dapur:asalDaerah ?c .
                            ?c rdfs:label ?asalDaerah .
                        }
                    }
                    OPTIONAL{
                        SELECT (GROUP_CONCAT(DISTINCT ?bahanBak;SEPARATOR=",") AS ?bahanBakar)
                        WHERE {
                            ?a rdfs:label "${nama}" .
                            ?a dapur:hasBahanBakar ?e .
                            ?e rdfs:label ?bahanBak .
                        }
                    }
                    OPTIONAL{
                        SELECT (GROUP_CONCAT(DISTINCT ?keg;SEPARATOR=",") AS ?kegiatan)
                        WHERE {
                            ?a rdfs:label "${nama}" .
                            ?a dapur:hasKegiatan ?f .
                            ?f rdfs:label ?keg .
                        }
                    }
                    OPTIONAL{
                        SELECT (GROUP_CONCAT(DISTINCT ?olah;SEPARATOR=",") AS ?olahan)
                        WHERE {
                            ?a rdfs:label "${nama}" .
                            ?a dapur:hasOlahan ?g .
                            ?g rdfs:label ?olah .
                        }
                    }
                    OPTIONAL{
                        SELECT (GROUP_CONCAT(DISTINCT ?peng;SEPARATOR=",") AS ?pengrajin)
                        WHERE {
                            ?a rdfs:label "${nama}" .
                            ?a dapur:hasPengrajin ?h .
                            ?h rdfs:label ?peng .
                        }
                    }
                    OPTIONAL{
                        SELECT (GROUP_CONCAT(DISTINCT ?desFung;SEPARATOR=",") AS ?deskripsiFungsi)
                        WHERE {
                            ?a rdfs:label "${nama}" .
                            ?a dapur:hasDeskripsiFungsi ?desFung .
                        }
                    }
                    OPTIONAL{
                        SELECT (GROUP_CONCAT(DISTINCT ?ukur;SEPARATOR=",") AS ?ukuran)
                        WHERE {
                            ?a rdfs:label "${nama}" .
                            ?a dapur:hasUkuran ?ukur .
                        }
                    }
                    OPTIONAL{
                        SELECT (GROUP_CONCAT(DISTINCT ?jenisTung;SEPARATOR=",") AS ?jenisTungku)
                        WHERE {
                            ?a rdfs:label "${nama}" .
                            ?a dapur:hasJenisTungku ?jenisTung .
                        }
                    }
                    OPTIONAL{
                        SELECT (GROUP_CONCAT(DISTINCT ?keper;SEPARATOR=",") AS ?kepercayaan)
                        WHERE {
                            ?a rdfs:label "${nama}" .
                            ?a dapur:hasKepercayaan ?keper .
                        }
                    }
                    OPTIONAL{
                        SELECT (GROUP_CONCAT(DISTINCT ?penggu;SEPARATOR=",") AS ?penggunaan)
                        WHERE {
                            ?a rdfs:label "${nama}" .
                            ?a dapur:hasPenggunaan ?penggu .
                        }
                    }
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
        },
        async getKegiatan(){
            let result = await $fetch(this.urlSparql, {
                params: {
                    query:  `
                    PREFIX da: <https://www.wowman.org/index.php?id=1&type=get#>
                    PREFIX sc: <http://purl.org/science/owl/sciencecommons/>
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX owl: <http://www.w3.org/2002/07/owl#>
                    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                    PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                    PREFIX schema: <http://schema.org/>

                    SELECT ?namaKegiatan ?deskripsi ?image
                    WHERE{
                    ?a rdf:type dapur:Kegiatan.
                    ?a rdfs:label ?namaKegiatan.
                    OPTIONAL{?a rdfs:comment ?deskripsi.}
                    OPTIONAL{?a schema:image ?image}
                    }`
                }
            })
            return result
            },
            async getKegiatanDetail(nama){
                let result = await $fetch(this.urlSparql, {
                    params: {
                        query:  `
                        PREFIX da: <https://www.wowman.org/index.php?id=1&type=get#>
                        PREFIX sc: <http://purl.org/science/owl/sciencecommons/>
                        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                        PREFIX owl: <http://www.w3.org/2002/07/owl#>
                        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                        PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
                        PREFIX schema: <http://schema.org/>
    
                        SELECT ?namaKegiatan ?deskripsi ?image ?urlWeb ?urlYoutube
                        WHERE{
                        ?a rdf:type dapur:Kegiatan.
                        ?a rdfs:label "${nama}".
                        ?a rdfs:label ?namaKegiatan.
                        OPTIONAL{?a rdfs:comment ?deskripsi.}
                        OPTIONAL{?a schema:image ?image}
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
                        }`
                    }
                })
                return result
                }
    }
})

        // async getNama(nama){
        //     let result = await $fetch(this.urlSparql, {
        //         params: {
        //           query:  `
        //             PREFIX sc: <http://purl.org/science/owl/sciencecommons/>
        //             PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        //             PREFIX owl: <http://www.w3.org/2002/07/owl#>
        //             PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        //             PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        //             PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
        //             PREFIX schema: <http://schema.org/>

        //             SELECT ?namaAlat ?namaBahan ?deskripsi ?olahan ?urlYoutube ?urlWebsite 
        //             WHERE { 
        //             ?a rdf:type dapur:AlatDapur .
        //             ?a dapur:hasBahan ?b.
        //             ?a rdfs:label ?namaAlat .
        //             ?a rdfs:label "${nama}".
        //             ?type rdfs:subClassOf* dapur:Bahan .
        //             ?b rdf:type ?type .
        //             ?b rdfs:label ?namaBahan .
        //             ?a dapur:hasOlahan ?g .
        //             ?g rdfs:label ?olahan .
        //             OPTIONAL {?a rdfs:comment ?deskripsi} .
        //             OPTIONAL {?a schema:hasUrlGambar ?urlYoutube} .
        //             OPTIONAL {?a schema:hasUrlWebsite ?urlWebsite} .
        //             }`
        //         }
        //     })
        //     return result
        // },
        // async getAsal(nama){
        //     let result = await $fetch(this.urlSparql, {
        //         params: {
        //           query:  `
        //           PREFIX sc: <http://purl.org/science/owl/sciencecommons/>
        //           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        //           PREFIX owl: <http://www.w3.org/2002/07/owl#>
        //           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        //           PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        //           PREFIX dapur: <http://alunalun.info/ontologi/AlatDapur/>
        //           PREFIX schema: <http://schema.org/>
                  
        //           SELECT  ?asal
        //           WHERE { 
        //              ?a rdf:type dapur:AlatDapur .
        //              ?a rdfs:label ?namaAlat .
        //              ?a rdfs:label "${nama}" .
        //              ?a dapur:asalDaerah ?b .
        //             ?b rdfs:label ?asal
        //           }`
        //         }
        //     })
        //     return result
        // },
        // async getDetail(nama){
        //     let resultAsal = await this.getAsal(nama)
        //     let resultNama = await this.getNama(nama)
        //     return {
        //         resultAsal,
        //         resultNama
        //     }
        // }
