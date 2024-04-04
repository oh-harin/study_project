<template>
  <div id="root">
    <WordRelay start-word="하린"></WordRelay>
    <WordRelay start-word="뷰"></WordRelay>
    <WordRelay start-word="테스트"></WordRelay>
  </div>
</template>

<script>
import WordRelay from '@/components/WordRelay.vue';

export default {
  name: 'MyComponent04',
  components: {
    WordRelay
  }
};
</script>