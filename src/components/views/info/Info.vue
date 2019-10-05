<template>
    <div id="app" class="is-fullheight">

        <navbar />

        <div class="container">


            <section class="main-content columns">

                <main-left-menu />

                <div class="columns column is-multiline">
                    <div class="column is-12">
                        <span class="title">Integrantes</span>
                    </div>
                    <div class="column is-4">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png"
                                                alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">Edgar Xolop</p>
                                        <p class="subtitle is-6">0900-15-7270</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png"
                                                alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">Miguel Cajas</p>
                                        <p class="subtitle is-6">0900-11-8715</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png"
                                                alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">Max Cortez</p>
                                        <p class="subtitle is-6">0900-15-17323</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png"
                                                alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">Hansi Morales</p>
                                        <p class="subtitle is-6">0900-10-241</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png"
                                                alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">Bryam Paniagua</p>
                                        <p class="subtitle is-6">0900-15-17323</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>

<script>
import MainLeftMenu from "@/components/navigation/MainLeftMenu"
import Navbar from "@/components/navigation/Navbar"

export default {
    name: "UserDetails",
    components:{
      "main-left-menu" : MainLeftMenu,
      "navbar" : Navbar,
    }
}
</script>

<style>

</style>