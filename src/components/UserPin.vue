<template>
  <div class="flex column no-wrap">
    <div class="flex row no-wrap">
      <div v-for="(num, index) in pin" :key="`num-${index}-input`">
        <input
          v-if="!loading"
          type="password"
          class="pin-input q-ma-sm"
          v-model="pin[index]"
          :id="`pin-input-${index}`"
          :autofocus="1 === Number(index)"
          :ref="`num-${index}-input`"
          @input="(event) => valueChange(event.target.value, Number(index))"
          @paste.prevent
          @keyup.delete="remove(Number(index))"
          @click="(e) => e.target.select()"
          maxlength="1"
        />
      </div>
    </div>
    <div
      class="text-center text-body1 text-negative text-weight-bold q-mt-md"
      v-if="notANum"
    >
      Your PIN must be 4 numbers
    </div>
    <q-spinner-gears
      v-if="loading"
      color="primary"
      size="3rem"
      :thickness="5"
    />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      pin: ref({ 1: '', 2: '', 3: '', 4: '' }),
      loading: ref(false),
      notANum: ref(false),
    };
  },
  beforeUnmount() {
    window.removeEventListener('paste', this.paste);
  },
  mounted() {
    window.addEventListener('paste', this.paste);
  },
  computed: {
    pinLength() {
      return Object.keys(this.pin).length;
    },
    numReg() {
      return new RegExp(/\d{1}/);
    },
    isValidPin() {
      const pin = Object.values(this.pin).join('');
      return /^\d+$/.test(pin) && pin.length === this.pinLength;
    },
  },
  methods: {
    isValidInput(value) {
      return /\d{1}/.test(value);
    },
    paste(e) {
      e.preventDefault();
      const cliboardData = e.clipboardData || window.clipboardData;
      const clipboard = cliboardData.getData('text');
      if (!/^\d+$/.test(clipboard)) return;
      const numbers = clipboard.split('');
      const startFrom =
        Number((document?.activeElement?.id).replace('pin-input-', '')) || 1;
      for (let i = 0; i < this.pinLength; i++) {
        const toUpdate = startFrom + i;
        if (toUpdate > this.pinLength) break;
        this.pin[toUpdate] = numbers[i];
      }
      if (this.isValidPin) this.validatePin();
    },
    valueChange(value, index) {
      if (this.pin[index] === '') return;
      this.notANum = false;
      if (!this.numReg.test(value)) {
        this.pin[index] = '';
        this.notANum = true;
        return;
      }
      if (this.isValidPin) {
        this.validatePin();
        return;
      }
      this.select(index + 1);
    },
    select(index) {
      if (index < 1 || index > this.pinLength) return;
      const refName = `num-${index}-input`;
      this.$refs[refName][0].focus();
      this.$refs[refName][0].select();
    },
    remove(index) {
      if (this.pin[Number(index)] === '') this.select(index - 1);
      else this.pin[Number(index)] = '';
    },
    validatePin() {
      const result = Object.values(this.pin).join('');
      // validate result
      console.log(result);
      this.loading = true;
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
  outline: 1px solid $n-grey
  border: none
  background: none
  text-align: center
  transition: all .2s ease-in-out
  &:focus
    outline: 1px solid #fff
    transform: scale(1.1)
</style>