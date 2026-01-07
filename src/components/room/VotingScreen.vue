<script setup lang="ts">
import { useRoute } from 'vue-router';
import RoomTable from "@/components/room/RoomTable.vue";
import type {Card} from "@/components/room/UserCard.vue";
import VotingCards from './VotingCards.vue';
import { ref } from 'vue';
import { boberAPI } from '@/common/boberAPI';

interface VotingScreenProps {
  taskName: string;
}

const props = defineProps<VotingScreenProps>();
const emit = defineEmits<{
   (event: 'update:taskName', value: string): void
}>();

const route = useRoute();

const roomId = route.params.id ?? "unknown";
if (roomId === undefined || Array.isArray(roomId)) {
  throw new Error("Invalid room ID");
}

const cards : Card[] = Array.from({ length: 5 }, (_, i) => ({
  username: `User${i + 1}`,
  estimate: (i + 1).toString()
}));

const onTableActionButtonClick = () => {
  console.log("Table action button clicked");
};

const onTaskNameChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:taskName', target.value);
};

const ALLOWED_ESTIMATES = ['1', '2', '3', '5', '8', '13', '21', '?'];
const selectedEstimate = ref<string | null>(null);

const onSelectedEstimateChange = async (newEstimate: string) => {
  selectedEstimate.value = newEstimate;

  await boberAPI.submitEstimate("TEGO_TEZ_JESZCZE_NIE_WIEM", "NIE_WIEM_JESZCZE", newEstimate).then(() => {
    console.log("Estimate submitted:", newEstimate);
  });
};
</script>

<template>
  <div class="page__main">
    <div class="page__tableWithAnswers">
      <input placeholder="Nazwa taska" class="page__input" :value="props.taskName" @input="onTaskNameChange" />
      <RoomTable :cards="cards" :actionButtonText="'Pokaż'" v-on:action-button-click="onTableActionButtonClick" />
    </div>
    <div class="page__votingCards">
      <VotingCards :available-estimates="ALLOWED_ESTIMATES" :selected-estimate="selectedEstimate" @estimate-selected="onSelectedEstimateChange($event)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page {
    color: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    &__container {
      display: flex;
      height: 100%;
      flex-grow: 1;
    }

    &__main {
      flex: 4;
      background: #FDF0D5;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }

    &__sidebar {
      flex: 1;
      max-width: 400px;
      background: #E0CCB6;
      padding: 20px;
    }

    &__input {
      border: 1px solid black;
      border-radius: 5px;
      background: transparent;
      font-size: 24px;
      line-height: 30px;
      padding: 20px;
      min-width: 150px;
    }

    &__tableWithAnswers {
      flex: 1;
    }

    &__votingCards {
      background: #D9B99B;
      padding: 20px;
    }
  }
</style>
