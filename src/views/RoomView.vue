<script setup lang="ts">
import { boberAPI } from '@/common/boberAPI';
import RoomNavbar from '@/components/room/RoomNavbar.vue';
import { useUserStore } from '@/stores/username';
import { useRoute } from 'vue-router';
import {ref} from "vue";
import RoomTable from "@/components/room/RoomTable.vue";
import type {Card} from "@/components/room/UserCard.vue";

const route = useRoute();

const roomId = route.params.id ?? "unknown";
if (roomId === undefined || Array.isArray(roomId)) {
  throw new Error("Invalid room ID");
}

const userStore = useUserStore();
const room = ref(null);
const taskName = ref("");

if (!userStore.roomUsernames[roomId]) {
  boberAPI.joinRoom(roomId).then((usernameResponse) => {
    console.log("Joined room as", usernameResponse);
    userStore.setUsername(roomId, usernameResponse);
  });
}

boberAPI.getRoomDetails(roomId).then((roomResponse) => {
  room.value = roomResponse;
})

// const cards : Card[] = [
//   {
//     username: 'blabla',
//     estimate: '3'
//   },  {
//     username: 'blabla',
//     estimate: '3'
//   },  {
//     username: 'blabla',
//     estimate: '3'
//   }
// ];

const cards : Card[] = Array.from({ length: 5 }, (_, i) => ({
  username: `User${i + 1}`,
  estimate: (i + 1).toString()
}));
</script>

<template>
    <section class="page">
      <RoomNavbar :session-id="roomId" :username="userStore.roomUsernames[roomId] || ''" />
      <div class="page__container">
        <div class="page__main">
          <input v-model="taskName" placeholder="Nazwa taska" class="page__input"  />
          <p>Your room ID is: {{ taskName }}</p>
          <RoomTable :cards="cards" :actionButtonText="'Pokaż'"/>
        </div>
        <div class="page__sidebar">
          <div class="sidebar__current-task">
            <p>{{ taskName }}</p>
            <p>?</p>
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
  }

  .sidebar {
    &__current-task {
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      line-height: 30px;
    }
  }
</style>
