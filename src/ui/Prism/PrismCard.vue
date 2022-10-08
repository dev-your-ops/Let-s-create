<template>
  <div class="ui-prism p-3">
    <div class="content">
      <div class="content-example">
        <div v-if="title" class="text-blue-700 text-lg mb-2">{{ title }}</div>
        <slot />
      </div>
      <div class="content-action">
        <i class="fas fa-code cursor-pointer" @click="showCode = !showCode" />
      </div>
    </div>
    <div v-if="showCode" class="mt-4">
      <prism v-if="showCode" :language="language">{{ code }}</prism>
    </div>
  </div>
</template>

<script>
import Prism from 'vue-prism-component';

export default {
  name: 'PrismCard',
  components: {
    Prism,
  },
  props: {
    code: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: 'javascript',
    },
  },
  data() {
    return {
      showCode: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui-prism {
  background-color: #f1fbfd;

  .content {
    display: flex;

    &-example {
      width: 90%;
    }

    &-action {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        color: #bccdd4;
      }
    }
  }
}
</style>
