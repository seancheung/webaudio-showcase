<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Envelope } from 'nexusui'

interface Props extends ControlProps {
  points: Point[]
  noNewPoints?: boolean
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'change', positions: Point[]): void
}>()

const { id, exposes } = useControl(Envelope, {
  props,
  emits,
  methods: ['addPoint', 'adjustPoint', 'destroyPoint', 'movePoint', 'scan', 'setPoints', 'sortPoints']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps, Point } from './nexus'
export interface IEnvelope extends IControl {
  addPoint(x: number, y: number): void
  adjustPoint(index: number, xOffset: number, yOffset: number): void
  destroyPoint(index: number): void
  movePoint(index: number, x: number, y: number): void
  scan(x: number): void
  setPoints(allPoints: Point[]): void
  sortPoints(): void
}
</script>