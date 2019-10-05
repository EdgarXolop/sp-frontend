<template>


    <div class="column is-3 is-narrow-mobile is-fullheight is-hidden-mobile ">
        <div class="container box chat-list menu-fixed">

            <chat-item  v-for="(c,i) in chats" :key="i"/>
            
        </div>
    </div>

</template>

<script>
import ChatItem from "@/components/chat/ChatItem"

export default {
    name: "ChatList",
    data: ()=>({
        chats: [1,2,3,4,5,6,7,8,9,10,11,12]
    }),
    components: {
        "chat-item" : ChatItem
    }
}
</script>

<style>

.chat-list{
    height: 500px;
    overflow-y: auto;
    margin-left: 0px;
    margin-top: 0px;
}

</style>