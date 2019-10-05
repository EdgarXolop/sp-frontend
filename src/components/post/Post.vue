<template>
<div class="card post">
    <div class="card-content  post-title">
        <a class="content">
            <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.</h3>
            <br>
        </a>
    </div>
    <footer class="card-footer">
        <p class="card-footer-item">
            <a>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </a>
        </p>
        <div class="card-footer-item">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-32x32">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png"
                            alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content ">
                    <p class="subtitle is-6">John Smith</p>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
export default {
    name: "Post"
}
</script>

<style>

.post-title{
    padding:10px
}

.post{
    border-radius: 6px;
    margin: 10px;
}

</style>