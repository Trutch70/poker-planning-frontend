<script setup lang="ts">
    const props = defineProps<{
        text: string;
    }>();

    const copyTextToClipboard = () => {
        navigator.clipboard.writeText(props.text);
    }
</script>

<template>
    <button class="copy-btn" v-on:click="copyTextToClipboard">📋</button>
</template>

<style lang="scss" scoped>
    .copy-btn {
        background: none;
        border: none;
    }
</style>