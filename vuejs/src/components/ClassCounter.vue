<template>
  <div>
    <h1>ClassCounter</h1>
    <h2>{{ value }}</h2>
    <h2>{{ oddOrEven }}</h2>
    <button @click="setValue(-1)">Decrement</button>
    <button @click="setValue(1)">Increment</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ClassCounter extends Vue {
  @Prop(Number) private readonly initialValue!: number;

  private value = this.initialValue || 0;

  public setValue(delta: number): void {
    this.value += delta;
  }

  public get oddOrEven(): string {
    return this.value % 2 === 0 ? 'Odd' : 'Even';
  }
}
</script>

<style>

</style>
