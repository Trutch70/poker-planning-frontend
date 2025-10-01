<script setup lang="ts">
import RoomNavbar from '@/components/room/RoomNavbar.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const roomId = route.params.id ?? "unknown";
if (roomId === undefined || Array.isArray(roomId)) {
  throw new Error("Invalid room ID");
}
</script>

<template>
    <section class="room-page">
      <RoomNavbar :session-id="roomId" :username="'kotek'" />
      <h1>Hello from room</h1>
      <p>Your room ID is: {{ roomId }}</p>
    </section>
</template>
