<script setup lang="ts">
    const props = defineProps<{
        text: string;
    }>();

    const copyTextToClipboard = () => {
        navigator.clipboard.writeText(props.text);
    }
</script>

<template>
    <button class="copy-btn" v-on:click="copyTextToClipboard">
        <img src="/copy.svg" alt="Copy" class="copy-icon" />
    </button>
</template>

<style lang="scss" scoped>
    .copy-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    .copy-icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-left: 8px;
    }
</style>
