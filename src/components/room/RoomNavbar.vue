<script setup lang="ts">
import CopyTextButton from '../common/CopyTextButton.vue';
import { ref, computed } from 'vue';

const props = defineProps<{
    sessionId: string;
    username: string | null
}>();

const heheClickCount = ref(0);
const heheText = computed(() =>
  heheClickCount.value >= 42 ? "ID twojej starej" : "ID Twojej sesji"
);
function handleHeheClick() {
  heheClickCount.value++;
}
</script>

<template>
    <nav class="roomNavbar">
        <img class="roomNavbar__logo" src="../../assets/bober.svg" alt="Bober Logo" />
        <span class="roomNavbar__content">
          <span id="hehe" @click="handleHeheClick">{{ heheText }}</span>: {{ props.sessionId }}
          <CopyTextButton :text="props.sessionId" />
        </span>
        <span>Użytkownik: {{ props.username ?? '' }}</span>
    </nav>
</template>

<style lang="scss" scoped>
    .roomNavbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background-color: #0E0B32;
        color: #eee;
        font-size: 1rem;

        &__logo {
          display: inline-block;
          width: 100px;
          transform: scale(1.5) translate(15px, 8px);
        }

        &__content {
          display: flex;
          align-items: center;
        }
    }
</style>
