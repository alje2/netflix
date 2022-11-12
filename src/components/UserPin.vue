<template>
  <div class="flex column no-wrap pin-wrap justify-center items-center bg-dark">
    <div
      class="text-center text-h4 text-negative text-weight-bold q-my-md"
      :class="{ 'text-h6': $q.screen.xs }"
      v-if="isInvalid"
    >
      Whoops, wrong PIN. Please try again.
    </div>
    <div class="flex row no-wrap">
      <div v-for="(num, index) in pin" :key="`num-${index}-input`">
        <input
          type="password"
          class="pin-input q-ma-sm"
          v-model="pin[index]"
          :id="`pin-input-${index}`"
          :autofocus="index == 0"
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
    <q-icon
      name="icon-mat-close"
      color="white"
      size="40px"
      class="absolute-top-right q-ma-xl"
      @click="$emit('close')"
    />
  </div>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  props: {
    // the pin would be validated with a backend call
    // for testing purposes we are sending it as a prop
    currentPin: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      q: useQuasar(),
      pin: ref([]),
      notANum: ref(false),
      isInvalid: ref(false),
    };
  },
  beforeUnmount() {
    window.removeEventListener('paste', this.paste);
  },
  mounted() {
    this.resetPin();
    document.activeElement.blur();
    window.addEventListener('paste', this.paste);
  },
  watch: {
    pin: {
      deep: true,
      handler(pin) {
        if (this.pin.join('').length === this.pin.length) this.validatePin();
      },
    },
  },
  computed: {
    isNumbers() {
      return new RegExp(/^\d+$/);
    },
    isNumber() {
      return new RegExp(/\d{1}/);
    },
  },
  methods: {
    resetPin() {
      const firstInput = document.getElementById('pin-input-0');
      this.pin = new Array(this.currentPin.length).fill('');
      firstInput?.focus();
    },
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
      // this.validatePin();
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
      this.isInvalid = false;
      this.q.loading.show();
      setTimeout(() => {
        const pin = this.pin.join('');
        const isAllNums = this.isNumbers.test(pin);
        const isValid = pin === this.currentPin;
        if (isAllNums && isValid) {
          document.activeElement.blur();
          this.$emit('pinValidated');
        } else {
          this.isInvalid = true;
          this.resetPin();
        }
        this.q.loading.hide();
      }, 1000);
    },
  },
};
</script>

<style lang="sass" scoped>
.pin-wrap
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
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
