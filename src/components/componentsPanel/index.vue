<template>
  <div class="components-panel">
    <component :is="router" @switch-route="switchRoute" />
  </div>
</template>

<script>
import PanelHome from './PanelHome';

export default {
  name: 'ComponentsPanel',
  computed: {
    router() {
      switch (this.route) {
        case '/':
          return PanelHome;
        default:
          return PanelHome;
      }
    },
  },
  methods: {
    switchRoute(route) {
      this.route = route;
    },
  },
  data() {
    return {
      route: '/',
    };
  },
};
</script>

<style lang="scss">
.components-panel {
  z-index: 999999;
  position: fixed;
  top: 20%;
  height: 500px;
  width: 20%;
  background: blue;
}
</style>
