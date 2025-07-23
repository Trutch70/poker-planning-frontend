<script setup lang="ts">
    import RoomNavbar from './RoomNavbar.vue';
    import { boberAPI } from "../../common/boberAPI.ts";
    import { useStore } from "@nanostores/vue";
    import { usernameAtom } from "../../nanostore.ts";

    const props = defineProps<{
        roomId: string
    }>();

    const username = useStore(usernameAtom);

    boberAPI.joinRoom(props.roomId).then((usernameResponse) => {usernameAtom.set(usernameResponse)});
</script>

<template>
    <RoomNavbar :session-id="props.roomId" :username="username" />
    <h1>Hello from room</h1>
</template>

<style lang="scss" scoped>
</style>