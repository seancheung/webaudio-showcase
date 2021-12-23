<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Multislider } from 'nexusui'

interface Props extends ControlProps {
  max?: number;
  min?: number;
  numberOfSliders?: number;
  smoothing?: number;
  step?: number;
  values?: number[];
  candycane?: number
  mode?: 'bar' | 'line'
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', values: number[]): void
}>()

const { id, exposes } = useControl(Multislider, {
  props,
  emits,
  methods: ['setAllSliders', 'setSlider']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface IMultislider extends IControl {
  setAllSliders(values: number[]): void
  setSlider(index: number, value: number): void
}
</script>