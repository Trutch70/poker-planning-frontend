<script setup lang="ts">
import { ref } from 'vue';
import VotingCard from './VotingCard.vue';

interface VotingCardsProps {
  availableEstimates: string[];
  selectedEstimate: string | null;
  onEstimateSelected: (estimate: string) => void;
}

const props = defineProps<VotingCardsProps>();

const onEstimateSelected = (newSelection: string) => {
  if (props.selectedEstimate === newSelection) {
    return;
  }

  props.onEstimateSelected(newSelection);
};

const loadCurrentSelection = async () => {

}
</script>

<template>
  <VotingCard
    v-for="estimate in props.availableEstimates"
    v-bind:key="estimate"
    :estimate="estimate"
    :isSelected="estimate === selectedEstimate"
    :onClick="() => {
      onEstimateSelected(estimate);
    }"
  />
</template>

<style lang="scss" scoped>
</style>
