<template>
  <div>
    <h1>Counter</h1>
    <h2>{{value}}</h2>
    <button @click="setValue(-1)">Decrement</button>
    <button @click="setValue(1)">Increment</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    initialValue: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      value: this.initialValue,
    };
  },
  methods: {
    setValue(delta: number): void {
      this.value += delta;
    },
  },
});
</script>

<style>

</style>
