<template lang="pug">
  nav
    div.menu-item(v-for="item in list" :class="{ active: item.title === activeItem }")
      router-link.menu-item-link(:to="{ path: item.link }" @click.native="menuClick(item.title)") {{ item.title }}
      ul(v-if="item.subMenu && item.subMenu.length > 0")
        li(v-for="subItem in item.subMenu")
          router-link.menu-subitem-link(:to="{ path: subItem.link }") {{ subItem.title }}
</template>

<script>
  export default {
    props: ['list'],
    data() {
      return {
        activeItem: '',
      };
    },
    computed: {
    },
    methods: {
      menuClick(item) {
        this.activeItem = item;
      },
    },
    watch: {
      activeItem(newVal) {
        cosole.log(newVal);
      },
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        if (to.meta.category) {
          this.activeItem = to.meta.category;
        }
      });
    },
  };
</script>