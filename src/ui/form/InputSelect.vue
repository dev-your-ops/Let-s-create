<template>
  <div class="input-select mb-3">
    <label :for="inputId" v-if="label">
      {{ label }}
      <i
        class="fas fa-asterisk fa-xs ml-1"
        style="color: Tomato;"
        v-if="required"
      />
    </label>

    <Treeselect
      :class="{ invalid: errorMessage.length }"
      :multiple="multiple"
      :options="options"
      v-model="value"
      :disabled="disabled"
      :required="required"
    />

    <small class="text-danger" v-if="errorMessage.length">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script>
import InputMixin from '@/components/ui/form/InputMixin';
import Treeselect from '@riophae/vue-treeselect';
import '@riophae/vue-treeselect/dist/vue-treeselect.css';

export default {
  name: 'InputSelect',
  components: { Treeselect },
  mixins: [InputMixin],
  created() {
    this.value = this.preSet;
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    onChange: {
      type: Function,
      default: null,
    },
  },
  watch: {
    value() {
      this.onChange && this.onChange(this.value);
      this.inputValue = this.value;
      this.newInputValue();
    },
  },
  data() {
    return {
      value: [],
    };
  },
};
</script>

<style lang="scss">
.input-select {
  .vue-treeselect__control {
    height: 40px;

    .vue-treeselect__control {
      border-color: #ced4da;
    }
  }

  .invalid {
    .vue-treeselect__control {
      border-color: red;

      &:hover {
        border-color: red !important;
      }
    }
  }
}
</style>
