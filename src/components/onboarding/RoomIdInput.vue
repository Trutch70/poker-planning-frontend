<script setup lang="ts">
import { ref } from 'vue';

const roomId = ref("");

const props = defineProps<{
    onSubmit: (roomId: string) => Promise<void> | void
}>();

const handleSubmit = () => {
    if (roomId.value.trim() === "") {
        return;
    }

    props.onSubmit(roomId.value);
}
</script>

<template>
    <div class="room-id-input-container">
        <input class="room-id-input" type="text" placeholder="Podaj ID sesji" v-model="roomId" />
        <button class="room-id-button" @click="handleSubmit">
            →
        </button>
    </div>
</template>

<style lang="scss" scoped>

.room-id-input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid #333;
    border-radius: 5px;

    background: white;
}

.room-id-input {
    border: none;
    background: none;
    font-size: 20px;
    padding: 20px 40px;
    flex: 1;

    &:focus {
        outline: 2px solid #669BBC;
        border-radius: 5px 0 0 5px;
    }
}

.room-id-button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 10px 25px;
    height: 100%;
    font-size: 25px;
    border-radius: 0 5px 5px 0;

    transition: background-color 0.25s ease;

    &:hover {
        background-color: #669BBC;
    }
}
</style>