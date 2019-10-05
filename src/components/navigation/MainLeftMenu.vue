<template>

    <div class="column is-2 is-narrow-mobile is-fullheight is-hidden-mobile">
        <aside class="menu menu-fixed">
            <ul class="menu-list">
                <li>
                    <router-link to="/" >
                        <span class="icon">
                            <font-awesome-icon icon="home" />
                        </span> Inicio
                    </router-link>
                </li>
                <li>
                    <router-link to="/my-account" >
                        <span class="icon">
                            <font-awesome-icon icon="user" />
                        </span> Mi cuenta
                    </router-link>
                </li>
                <li>
                    <router-link to="/info" >
                        <span class="icon">
                            <font-awesome-icon icon="info" />
                        </span>Información
                    </router-link>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
    export default {
        name: "MainLeftMenu"
    }
</script>

<style>
    .menu-fixed {
        position: fixed;
    }
</style>