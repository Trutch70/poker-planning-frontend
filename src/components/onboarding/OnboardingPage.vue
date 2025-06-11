<script setup lang="ts">
import SessionIdInput from './SessionIdInput.vue';
</script>

<template>
    <main class="onboarding-page">
        <form class="onboarding-form">
            <SessionIdInput />
            <p class="or-text">LUB:</p>
            <button class="new-session-button">Stwórz nową sesję</button>
        </form>
    </main>
</template>

<style lang="scss" scoped>
.onboarding-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: #FDF0D5;
}

.or-text {
    font-size: 20px;
    color: #333;
    text-align: center;
    margin: 1rem 0;
}

.onboarding-form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    gap: 1rem;

    width: 100%;
    max-width: 600px;
    padding: 20px;
}

.new-session-button {
    background: #3D0006;
    font-size: 20px;
    padding: 20px 40px;
    font-size: 20px;
    color: white;

    border: 1px solid #333;
    border-radius: 5px;

    transition: background-color 0.25s ease;

    &:hover {
        background-color: #669BBC;
    }

    &:focus {
        outline: 2px solid #669BBC;
        border-radius: 5px 0 0 5px;
    }
}

</style>