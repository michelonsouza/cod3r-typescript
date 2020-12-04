<template>
  <div id="app">
    <counter :initialValue="10" />
    <class-counter :initialValue="100" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from './components/Counter.vue';
import ClassCounter from './components/ClassCounter.vue';

@Component({
  components: {
    Counter,
    ClassCounter,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
