<template>
    <div class="container-fluid column box is-radiusless">
        <post v-for="(p,i) in chats" :key="i" />
    </div>

</template>

<script>
import Post from "@/components/post/Post"

export default {
    name: "PostList",
    data: ()=>({
        chats: [1,2,3,4,5,6,7,8,9,10,11,12]
    }),
    components:{
        "post" : Post
    }
}
</script>

<style>

</style>