<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Number } from 'nexusui'

interface Props extends ControlProps {
  max?: number;
  min?: number;
  step?: number;
  value?: number;
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', value: number): void
}>()

const { id, exposes } = useControl(Number, {
  props,
  emits,
  methods: ['link']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface INumber extends IControl {
  link(destination: any, element?: any): void
}
</script>