<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Slider } from 'nexusui'

interface Props extends ControlProps {
  max?: number;
  min?: number;
  mode?: 'absolute' | 'relative'
  step?: number;
  value?: number;
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', value: number): void
}>()

const { id, exposes } = useControl(Slider, {
  props,
  emits
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface ISlider extends IControl {

}
</script>