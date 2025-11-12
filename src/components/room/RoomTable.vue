<script setup lang="ts">
import UserCard, {type Card} from "@/components/room/UserCard.vue";

interface RoomTableProps {
  cards: Card[];
  onActionButtonClick: () => void;
  actionButtonText: string;
}

const props = defineProps<RoomTableProps>();

// const tableMap = {
//   1: ["TOP"],
//   2: ["TOP", "BOTTOM"],
//   3: ["TOP", "BOTTOM", "BOTTOM"],
//   4: ["TOP", "TOP", "BOTTOM", "BOTTOM"],
//   5: ["TOP", "TOP", "BOTTOM", "LEFT", "RIGHT"],
//   6: ["TOP", "TOP", "BOTTOM", "LEFT", "RIGHT", "BOTTOM"],
//   7: ["TOP", "TOP", "BOTTOM", "LEFT", "RIGHT", "BOTTOM", "TOP"],
//   8: ["TOP", "TOP", "BOTTOM", "LEFT", "RIGHT", "BOTTOM", "TOP", "BOTTOM"],
// }

const sliceTable = (cards: Card[]) => {
  if (cards.length <= 4) {
    return {
      top: cards.slice(0, Math.ceil(cards.length / 2)),
      bottom: cards.slice(Math.ceil(cards.length / 2)),
      left: [],
      right: []
    }
  }

  return {
    top: cards.slice(2, Math.ceil(((cards.length) / 2) + 1)),
    bottom: cards.slice(2 + Math.ceil((cards.length - 2) / 2)),
    left: [cards[0]!],
    right: [cards[1]!]
  }
}

const arrangedCards = sliceTable(props.cards);
</script>

<template>
  <div class="roomAndUsers__container">
    <div class="roomTable__row">
      <UserCard v-for="{ username, estimate } in arrangedCards.top" v-bind:key="username" :username="username" :estimate="estimate"  />
    </div>
    <div class="roomTable__row roomTable__row--table">
      <div>
        <UserCard v-for="{ username, estimate } in arrangedCards.left" v-bind:key="username" :username="username" :estimate="estimate"/>
      </div>
      <div class="roomTable__table">
        <button class="roomTable__button">{{ props.actionButtonText }}</button>
      </div>
      <div>
      <div>
        <UserCard v-for="{ username, estimate } in arrangedCards.right" v-bind:key="username" :username="username" :estimate="estimate"/>
      </div>
      </div>
    </div>
    <div class="roomTable__row">
      <UserCard v-for="{ username, estimate } in arrangedCards.bottom" v-bind:key="username" :username="username" :estimate="estimate"  />
    </div>
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
    &__row {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px; // increased from 20px
      margin-bottom: 30px; // increased from 20px

      &--table {
        gap: 40px; // increased from 40px
      }
    }

    &__container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__table {
      border-radius: 22px; // increased from 15px
      background: #2E0005;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 170px; // increased from 120px
      max-width: 480px; // increased from 350px
      width: 100%;
      flex-grow: 1;
    }

    &__button {
      padding: 12px 26px; // increased from 8px 18px
      min-width: 170px; // increased from 120px
      border: 1px solid white;
      border-radius: 8px; // increased from 5px
      background: #3D0006;
      color: white;
      font-size: 26px; // increased from 18px
    }
  }
</style>
