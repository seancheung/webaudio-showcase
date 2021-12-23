<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Position } from 'nexusui'

interface Props extends ControlProps {
  maxX?: number;
  maxY?: number;
  minX?: number;
  minY?: number;
  mode?: 'absolute' | 'relative'
  stepX?: number;
  stepY?: number;
  x?: number;
  y?: number;
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', position: Point): void
}>()

const { id, exposes } = useControl(Position, {
  props,
  emits
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps, Point } from './nexus'
export interface IPosition extends IControl {

}
</script>