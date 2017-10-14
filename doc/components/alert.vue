<template lang="pug">
  div
    vk-alert(:show="showAlert" :dismissible="true") This is a info alert—check it out!
</template>

<script>
  export default {
    data() {
      return {
        showAlert: true,
      };
    },
  };
</script>