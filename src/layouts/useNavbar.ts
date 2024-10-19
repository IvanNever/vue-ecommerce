import { ref } from 'vue';

const isNavbar = ref<boolean>(true);
export function useNavbar() {
  function toggleNavbar() {
    isNavbar.value = !isNavbar.value;
  }
  return { isNavbar, toggleNavbar };
}
