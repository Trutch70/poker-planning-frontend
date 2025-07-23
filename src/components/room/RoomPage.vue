<script setup lang="ts">
    import RoomNavbar from './RoomNavbar.vue';

    const props = defineProps<{
        roomId: string
    }>();
</script>

<template>
    <RoomNavbar :session-id="props.roomId" username="banach" />
    <h1>Hello from room</h1>
</template>

<style lang="scss" scoped>
</style>