<script setup lang="ts">
interface VotingCardProps {
  estimate: string;
  isSelected: boolean;
  onClick: () => void;
}

const props = defineProps<VotingCardProps>();
</script>

<template>
  <div class="votingCard__container">
    <div
      class="votingCard__card"
      :class="{ 'votingCard__card--selected': props.isSelected }"
      @click="props.onClick"
    >
      <span>{{ props.estimate }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .votingCard {
    &__container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 12px;
      gap: 5px;
      align-items: center;
    }

    &__card {
      width: 65px;
      height: 85px;
      background: #E0CCB6;
      border: 4px solid #3D0006;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 26px;
      color: black;
      cursor: pointer;
      transition: transform 120ms ease, box-shadow 120ms ease;
    }

    &__card--selected {
      border-color: #EAB308; /* accent */
      box-shadow: 0 0 0 3px rgba(234, 179, 8, 0.35);
      transform: translateY(-2px);
      background: #F2E7D8;
    }

    &__username {
      font-size: 18px;
    }
  }
</style>
