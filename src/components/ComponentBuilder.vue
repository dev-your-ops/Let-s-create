<template>
  <div><Button @click="addComponent">add</Button></div>
</template>
<script>
export default {
  name: 'ComponentBuilder',
  created() {},
  updated() {
    console.log('Update', this);
  },
  methods: {
    addComponent() {
      console.log('Add Component', this);
    },
  },
};
</script>
