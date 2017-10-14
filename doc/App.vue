<template lang="pug">
  div.container-fluid
    div.row.flex-xl-nowrap
      div.col-12.col-md-3.col-xl-2.py-md-3.pl-4.bd-sidebar
        menubar(:list="menuList")
      div.d-none.d-xl-block.col-xl-2.bd-toc
      main.col-12.col-md-9.col-xl-8.py-md-3.pl-md-5.bd-content
       router-view
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import menubar from '@/utils/menu';
  import menuList from '@/data/menuList.json';

  export default {
    components: {
      menubar,
    },
    data() {
      return {
        menuList,
      };
    },
    methods: {
      testAlert() {
        this.showAlert = !this.showAlert;
      },
    }
  }
</script>

<style scoped>
  .bd-sidebar {
    order: 0;
  }

  .bd-content {
    order: 1;
  }

  .bd-toc {
    order: 2;
  }

  @media (min-width: 1200px) {
    .bd-sidebar {
      max-width: 320px;
    }
  }

  @media (min-width: 768px) {
    .bd-sidebar {
      border-right: 1px solid rgba(0,0,0,.1);
    }
  }
</style>