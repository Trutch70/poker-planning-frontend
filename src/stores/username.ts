import { ref } from "vue";
import { defineStore } from "pinia";

export const useUsernameStore = defineStore("username", () => {
  const username = ref<string | null>(null);
  function setUsername(newName: string) {
    username.value = newName;
  }

  return { username, setUsername };
});
