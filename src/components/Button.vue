<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Button } from 'nexusui'

interface Props extends ControlProps {
  mode?: 'button' | 'aftertouch' | ' toggle'
  state?: boolean
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', state: boolean): void
  (event: 'change', position: Point): void
}>()

const { id, exposes } = useControl(Button, {
  props,
  emits,
  methods: ['flip', 'turnOff', 'turnOn']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps, Point } from './nexus'
export interface IButton extends IControl {
  flip(value?: boolean): void
  turnOff(emitting?: boolean): void;
  turnOn(emitting?: boolean): void;
}
</script>