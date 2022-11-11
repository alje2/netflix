<template>
  <div class="flex column no-wrap">
    <div class="flex row no-wrap">
      <div v-for="(num, index) in pin" :key="`num-${index}-input`">
        <input
          type="password"
          class="pin-input q-ma-sm"
          v-model="pin[index]"
          :id="`pin-input-${index}`"
          :autofocus="0 === index"
          :ref="`num-${index}-input`"
          @input="(event) => valueChange(event.target.value, index)"
          @paste.prevent
          @keyup.delete="remove(index)"
          @click="(e) => e.target.select()"
          maxlength="1"
          autocomplete="off"
        />
      </div>
    </div>
    <div
      class="text-center text-body1 text-negative text-weight-bold q-mt-md"
      v-if="notANum"
    >
      Your PIN must be 4 numbers
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    return {
      q: useQuasar(),
      pin: ref(new Array(4).fill('')),
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
    isNumbers() {
      return new RegExp(/^\d+$/);
    },
    isNumber() {
      return new RegExp(/\d{1}/);
    },
    isValidPin() {
      const pin = this.pin.join('');
      return this.isNumbers.test(pin) && pin.length === this.pin.length;
    },
  },
  methods: {
    paste(e) {
      e.preventDefault();
      const cliboardData = e.clipboardData || window.clipboardData;
      const clipboard = cliboardData.getData('text');
      if (!this.isNumbers.test(clipboard)) {
        this.notANum = true;
        return;
      }
      const numbers = clipboard.split('');
      const startFrom =
        Number(document?.activeElement?.id?.replace('pin-input-', '')) || 0;
      for (let i = startFrom; i < this.pin.length; i++) {
        this.pin[i] = numbers[i - startFrom];
      }
      this.validatePin();
    },
    valueChange(value, index) {
      if (this.pin[index] === '') return;
      this.notANum = false;
      if (!this.isNumber.test(value)) {
        this.pin[index] = '';
        this.notANum = true;
        return;
      }
      this.select(index + 1);
      this.validatePin();
    },
    select(index) {
      if (index < 0 || index >= this.pin.length) return;
      const refName = `num-${index}-input`;
      this.$refs[refName][0].focus();
      this.$refs[refName][0].select();
    },
    remove(index) {
      if (this.pin[index] === '') this.select(index - 1);
      else this.pin[index] = '';
    },
    validatePin() {
      if (!this.isValidPin) return;
      document.activeElement.blur();
      // const result = this.pin.join('');
      this.q.loading.show();
      setTimeout(() => {
        this.q.loading.hide();
        this.$router.push({ name: 'Movies' });
      }, 1000);
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
  border-radius: 2px
  &:focus
    outline: 1px solid #fff
    transform: scale(1.1)
</style>
