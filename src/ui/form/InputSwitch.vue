<template>
  <div class="form-group">
    <label
      :for="inputId"
      v-if="label"
    >
      {{ label }}
      <i
        class="fas fa-asterisk fa-xs ml-1"
        style="color: Tomato;"
        v-if="required"
      ></i></label>

    <div class="custom-control custom-switch">
      <input
        :class="{ 'is-invalid': errorMessage.length }"
        :id="inputId"
        class="custom-control-input"
        type="checkbox"
        v-model="value"
      />
      <label
        :for="inputId"
        class="custom-control-label"
      >
        {{ details }}
      </label>
      <div
        class="invalid-feedback"
        v-if="errorMessage.length"
      >
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import InputMixin from '@/components/ui/form/InputMixin';

export default {
  name: 'InputSwitch',
  mixins: [InputMixin],
  created () {
    if (this.preSet === true || this.preSet === 'true') this.value = true;
    this.inputValue = this.value;
    this.newInputValue();
  },
  watch: {
    value () {
      this.inputValue = this.value;
      this.newInputValue();
    },
  },
  props: {
    details: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      value: false,
    };
  },
};
</script>
