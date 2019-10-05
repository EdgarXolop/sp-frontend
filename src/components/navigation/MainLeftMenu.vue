<template>

    <div class="column is-2 is-narrow-mobile is-fullheight is-hidden-mobile">
        <aside class="menu menu-fixed">
            <ul class="menu-list">
                <li>
                    <a href="#" class="">
                        <span class="icon">
                            <font-awesome-icon icon="home" />
                        </span> Home
                    </a>
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