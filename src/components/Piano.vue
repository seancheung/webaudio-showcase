<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Piano } from 'nexusui'

interface Props extends ControlProps {
  mode?: 'button' | 'toggle' | 'impulse';
  lowNote: number;
  highNote: number;
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', state: { note: number, state: boolean }): void
}>()

const { id, exposes } = useControl(Piano, {
  props,
  emits,
  methods: ['setRange', 'toggleIndex', 'toggleKey']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface IPiano extends IControl {
  setRange(low: number, high: number): void
  toggleIndex(index: number, on: boolean): void
  toggleKey(note: string, on: boolean): void
}
</script>