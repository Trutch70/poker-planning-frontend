<script setup lang="ts">
import CopyTextButton from '../common/CopyTextButton.vue';

    const props = defineProps<{
        sessionId: string;
        username: string | null
    }>();
</script>

<template>
    <nav class="room-navbar">
        <img class="logo" src="/bober.svg" alt="Bober Logo" />
        <span>ID Twojej sesji: {{ props.sessionId }} <CopyTextButton :text="props.sessionId" /></span>
        <span>Użytkownik: {{ props.username ?? '' }}</span>
    </nav>
</template>

<style lang="scss" scoped>
    .room-navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background-color: #0E0B32;
    }

    .logo {
        display: inline-block;
        width: 100px;
        transform: scale(1.5) translate(15px, 8px);
    }

    span {
        color: #eee;
        font-size: 1rem;
    }
</style>