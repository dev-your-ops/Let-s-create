<template>
  <div id="app">
    <!-- <ComponentsPanel /> -->
    <Components />
    <!-- <ComponentBuilder /> -->
  </div>
</template>

<script>
import ComponentsPanel from './components/componentsPanel/';
import Components from './components/Components';
import ComponentBuilder from './components/ComponentBuilder';

export default {
  name: 'App',
  components: {
    ComponentBuilder,
    ComponentsPanel,
    Components,
  },
};
</script>

<style>
#app {
}
</style>
