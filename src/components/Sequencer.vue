<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Sequencer } from 'nexusui'
import { onMounted } from 'vue'

interface Props extends ControlProps {
  columns: number
  rows: number
  mode?: 'button' | 'aftertouch' | ' toggle'
  interval?: any;
  matrix?: any
  stepper?: any
  paddingRow?: number
  paddingColumn?: number
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', value: { row: number; column: number; state: boolean }): void
  (event: 'step', value: boolean[]): void
}>()

const { id, control, exposes } = useControl(Sequencer, {
  props,
  emits,
  methods: ['next', 'start', 'stop']
})
onMounted(() => {
  control.current.on("step", (value: any) => {
    emits("step", value);
  });
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface ISequencer extends IControl {
  next(): void
  start(ms?: number): void
  stop(): void
}
</script>