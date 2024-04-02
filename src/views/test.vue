<template>
  <div id="root">
    <div v-if="liked">좋아요 눌렀음</div>
    <button v-else v-on:click="onClickButton">Like</button>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      liked: false
    };
  },
  methods: {
    onClickButton() {
      this.liked = true;
    }
  }
};
</script>