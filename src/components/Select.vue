<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Select } from 'nexusui'

interface Props extends ControlProps {
  options: string[];
  selectedIndex?: number
  value?: string
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', value: { value: string, index: number }): void
}>()

const { id, exposes } = useControl(Select, {
  props,
  emits,
  methods: ['defineOptions']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface ISelect extends IControl {
  defineOptions(options: string[]): void
}
</script>