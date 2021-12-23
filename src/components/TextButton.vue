<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { TextButton } from 'nexusui'

interface Props extends ControlProps {
  state?: boolean;
  text?: string;
  alternateText?: string;
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', value: boolean): void
}>()

const { id, exposes } = useControl(TextButton, {
  props,
  emits,
  methods: ['flip', 'turnOff', 'turnOn']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface ITextButton extends IControl {
  flip(value?: boolean): void
  turnOff(emitting?: boolean): void;
  turnOn(emitting?: boolean): void;
}
</script>