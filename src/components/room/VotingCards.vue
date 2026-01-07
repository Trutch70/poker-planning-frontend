<script setup lang="ts">
import VotingCard from './VotingCard.vue';

interface VotingCardsProps {
  availableEstimates: string[];
  selectedEstimate: string | null;
}

const props = defineProps<VotingCardsProps>();
const emit = defineEmits<{
  (event: 'estimateSelected', value: string): void
}>();

const onEstimateSelected = (newSelection: string) => {
  if (props.selectedEstimate === newSelection) {
    return;
  }

  emit('estimateSelected', newSelection);
};
</script>

<template>
  <div class="votingCards">
    <VotingCard
      v-for="estimate in props.availableEstimates"
      v-bind:key="estimate"
      :estimate="estimate"
      :isSelected="estimate === selectedEstimate"
      :onClick="() => {
        onEstimateSelected(estimate);
      }"
    />
</div>

</template>

<style lang="scss" scoped>
  .votingCards {
    display: flex;
    justify-content: center;
  }
</style>
