<template>
  <div class="form-group">
    <label :for="inputId" v-if="label"
      >{{ label
      }}<i
        class="fas fa-asterisk fa-xs ml-1"
        style="color: Tomato;"
        v-if="required"
      ></i
    ></label>

    <div>
      <textarea
        :class="{ 'is-invalid': errorMessage.length }"
        :disabled="loading"
        :id="inputId"
        :name="name"
        @keyup="newInputValue"
        class="form-control"
        v-model="inputValue"
      >
      </textarea>
      <div class="invalid-feedback" v-if="errorMessage.length">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import InputMixin from '@/components/ui/form/InputMixin';

export default {
  name: 'InputTextarea',
  mixins: [InputMixin],
};
</script>
