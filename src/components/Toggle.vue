<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Toggle } from 'nexusui'

interface Props extends ControlProps {
  state?: boolean;
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', value: number): void
}>()

const { id, exposes } = useControl(Toggle, {
  props,
  emits,
  methods: ['flip']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface IToggle extends IControl {
  flip(): void
}
</script>