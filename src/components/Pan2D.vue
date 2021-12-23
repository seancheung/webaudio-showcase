<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Pan2D } from 'nexusui'

interface Props extends ControlProps {
  range?: number;
  mode?: 'absolute' | 'relative'
  speakers?: Array<[number, number]>
  levels?: number[]
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', value: number[]): void
}>()

const { id, exposes } = useControl(Pan2D, {
  props,
  emits,
  methods: ['moveSource', 'moveSpeaker']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface IPan2D extends IControl {
  moveSource(x: number, y: number): void
  moveSpeaker(index: number, x: number, y: number): void
}
</script>