import { ref } from 'vue';

const isNavbar = ref<boolean>(false);
export function useNavbar() {
  function toggleNavbar() {
    isNavbar.value = !isNavbar.value;
  }
  return { isNavbar, toggleNavbar };
}
