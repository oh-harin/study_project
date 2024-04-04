<template>
  <div>
    <div>{{ word }}</div>
    <form @submit.prevent="onSubmitForm">
      <input type="text" ref="answer" v-model="value">
      <button type="submit">입력!</button>
    </form>
    <div>{{ result }}</div>
  </div>
</template>

<script>
export default {
  props: ['startWord'],
  data() {
    return {
      word: this.startWord,
      result: '',
      value: '',
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      if (this.word[this.word.length - 1] === this.value[0]) {
        this.result = '딩동댕';
        this.word = this.value;
        this.value = '';
        this.$refs.answer.focus();
      } else {
        this.result = '땡';
        this.value = '';
        this.$refs.answer.focus();
      }
    },
  },
};
</script>