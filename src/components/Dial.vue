<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Dial } from 'nexusui'

interface Props extends ControlProps {
  interaction?: 'radial' | 'vertical' | 'horizontal'
  max?: number,
  min?: number,
  mode?: 'absolute' | 'relative'
  normalized?: number
  step?: number
  value?: number
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', value: number): void
}>()

const { id, exposes } = useControl(Dial, {
  props,
  emits
})

defineExpose(exposes);
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface IDial extends IControl {

}
</script>