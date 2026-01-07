<script setup lang="ts">
import { boberAPI } from '@/common/boberAPI';
import RoomNavbar from '@/components/room/RoomNavbar.vue';
import { useUserStore } from '@/stores/username';
import { useRoute } from 'vue-router';
import {ref, watch} from "vue";
import VotingScreen from '@/components/room/VotingScreen.vue';

// New interfaces based on the provided JSON
interface Task {
  id: number;
  name: string;
  finalEstimate: number | null;
  estimates: Record<string, number>;
  answersShown: boolean;
}

interface Room {
  id: string;
  createdAt: string; // ISO string from backend
  tasks: Task[];
  participants: string[];
}

const route = useRoute();

const roomId = route.params.id ?? "unknown";
if (roomId === undefined || Array.isArray(roomId)) {
  throw new Error("Invalid room ID");
}

const userStore = useUserStore();
// Typed room ref
const room = ref<Room | null>(null);
const selectedTask = ref<Task | null>(null);

if (!userStore.roomUsernames[roomId]) {
  boberAPI.joinRoom(roomId).then((usernameResponse) => {
    console.log("Joined room as", usernameResponse);
    userStore.setUsername(roomId, usernameResponse);
  });
}

boberAPI.getRoomDetails(roomId).then((roomResponse: Room) => {
  room.value = roomResponse;

  if (roomResponse.tasks.length > 0) {
    selectedTask.value = roomResponse.tasks[0] ?? null;
  }
})

const onSelectedTaskRename = (newName: string) => {
  if (selectedTask.value) {
    selectedTask.value.name = newName;
  }
};
</script>

<template>
    <section class="page">
      <RoomNavbar :session-id="roomId" :username="userStore.roomUsernames[roomId] || ''" />
      <div class="page__container">
        <VotingScreen v-if="selectedTask !== null" :task-name="selectedTask.name" @update:task-name="onSelectedTaskRename($event)" />
        <div class="page__sidebar">
          <div v-if="room !== null">
            <div v-for="task of room.tasks" v-bind:key="task.id" class="page__task" @click="selectedTask = task">
              <p>{{ task.name }}</p>
              <p>{{ task.finalEstimate ?? "?" }}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
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

    &__sidebar {

    }

    &__task {
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      line-height: 30px;

      &--selected {
        font-weight: bold;
      }
    }
  }
</style>
