<script setup lang="ts">
import { boberAPI } from '@/common/boberAPI';
import RoomNavbar from '@/components/room/RoomNavbar.vue';
import { useUsernameStore } from '@/stores/username';
import { useRoute } from 'vue-router';

const route = useRoute();

const roomId = route.params.id ?? "unknown";
if (roomId === undefined || Array.isArray(roomId)) {
  throw new Error("Invalid room ID");
}

const { username, setUsername } = useUsernameStore();

boberAPI.joinRoom(roomId).then((usernameResponse) => {
  console.log("Joined room as", usernameResponse);
  setUsername(usernameResponse);
});

const displayedUsername = username ?? 'Ładowanie...';

</script>

<template>
    <section class="room-page">
      <RoomNavbar :session-id="roomId" :username="displayedUsername" />
      <h1>Hello from room</h1>
      <p>Your room ID is: {{ roomId }}</p>
    </section>
</template>
