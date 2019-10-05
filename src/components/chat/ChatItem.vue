<template>
        <a class="media box chat-item ">
            <article class="media is-paddingless">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                            <strong>John Smith</strong> 
                            <br/>
                            <time datetime="2016-1-1">11:09 PM - 1 Oct 2019</time>
                    </div>
                </div>
            </article>
        </a>
</template>

<script>
    export default {
        name: "Chat"
    }
</script>

<style>
.chat-item article{
    border-top-width: 0px !important;
}
</style>