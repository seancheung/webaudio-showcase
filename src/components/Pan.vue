<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Pan } from 'nexusui'

interface Props extends ControlProps {
  value?: number
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', value: PanValue): void
}>()

const { id, exposes } = useControl(Pan, {
  props,
  emits
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface IPan extends IControl {

}
export interface PanValue { value: number; L: number; R: number }
</script>