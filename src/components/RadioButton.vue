<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { RadioButton } from 'nexusui'

interface Props extends ControlProps {
  numberOfButtons?: number;
  active?: number;
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', value: number): void
}>()

const { id, exposes } = useControl(RadioButton, {
  props,
  emits,
  methods: ['deselect', 'select']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface IRadioButton extends IControl {
  deselect(): void
  select(index: number): void
}
</script>