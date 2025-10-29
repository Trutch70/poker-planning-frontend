<script setup lang="ts">
export interface Card {
  username: string;
  estimate: string | null;
}

const props = defineProps<Card>();
</script>

<template>
  <div class="userCard__container">
    <div class="userCard__card">
      <span>{{ props.estimate }}</span>
    </div>
    <span class="userCard__username">{{ props.username }}</span>
  </div>
</template>


<style lang="scss" scoped>
  .userCard {
    &__container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 20px;
      gap: 5px;
      align-items: center;
    }

    &__card {
      width: 85px;
      height: 116px;
      background: #E0CCB6;
      border: 4px solid #3D0006;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      color: black;
    }

    &__username {
      font-size: 24px;
    }
  }
</style>
