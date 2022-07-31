<template>
  <q-form class="flex row no-wrap">
    <q-input
      autofocus
      @paste.prevent
      input-class="text-center"
      class="pin-input q-ma-sm"
      v-model="num1"
      type="password"
      outlined
      square
      maxlength="1"
      @update:model-value="(value) => valueChange(value, 1)"
      ref="num1Input"
      @keyup.right="select(2)"
    />
    <q-input
      @paste.prevent
      input-class="text-center"
      class="pin-input q-ma-sm"
      v-model="num2"
      type="password"
      outlined
      square
      maxlength="1"
      @update:model-value="(value) => valueChange(value, 2)"
      ref="num2Input"
      @keyup.left="select(1)"
      @keyup.right="select(3)"
      @keyup.delete="(num2 = ''), select(1)"
    />
    <q-input
      @paste.prevent
      input-class="text-center"
      class="pin-input q-ma-sm"
      v-model="num3"
      type="password"
      outlined
      square
      maxlength="1"
      @update:model-value="(value) => valueChange(value, 3)"
      ref="num3Input"
      @keyup.left="select(2)"
      @keyup.right="select(4)"
      @keyup.delete="(num3 = ''), select(2)"
    />
    <q-input
      @paste.prevent
      input-class="text-center"
      class="pin-input q-ma-sm"
      v-model="num4"
      type="password"
      outlined
      square
      maxlength="1"
      @update:model-value="(value) => valueChange(value, 4)"
      ref="num4Input"
      @keyup.left="select(3)"
      @keyup.delete="(num4 = ''), select(3)"
    />
  </q-form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      num1: ref(''),
      num2: ref(''),
      num3: ref(''),
      num4: ref(''),
    };
  },
  methods: {
    valueChange(value, index) {
      if (value === '') return;
      if (index === 4) {
        this.validatePin();
        return;
      }
      this.select(index + 1);
    },
    select(index) {
      const refName = `num${index}Input`;
      this.$refs[refName].focus();
    },
    validatePin() {
      const result = `${this.num1}${this.num2}${this.num3}${this.num4}`;
      console.log({ result });
    },
  },
};
</script>

<style lang="sass" scoped>
.pin-input
  width: 56px
  height: 56px
  font-size: 1.6rem
  caret-color: transparent
</style>
