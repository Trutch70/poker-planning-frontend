<script setup lang="ts">
import UserCard, {type Card} from "@/components/room/UserCard.vue";

interface RoomTableProps {
  cards: Card[];
  onActionButtonClick: () => void;
  actionButtonText: string;
}

const props = defineProps<RoomTableProps>();
</script>

<template>
  <div class="roomAndUsers__container">
    <div>
      <UserCard username="boberitos" estimate="3"/>
    </div>
    <div class="roomTable__container">
      <div>
      </div>
      <div class="roomTable__table">
        <button class="roomTable__button">{{ props.actionButtonText }}</button>
      </div>
      <div>

      </div>
    </div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
  .roomAndUsers {
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .roomTable {
    &__container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__table {
      border-radius: 30px;
      background: #2E0005;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 227px;
      max-width: 652px;
      width: 100%;
    }

    &__button {
      padding: 18px 35px;
      min-width: 235px;
      border: 1px solid white;
      border-radius: 10px;
      background: #3D0006;
      color: white;
      font-size: 36px;
    }
  }
</style>
