<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Oscilloscope } from 'nexusui'

interface Props extends ControlProps {

}
const props = defineProps<Props>()

const { id, exposes } = useControl(Oscilloscope, {
  props,
  methods: ['connect', 'disconnect']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface IOscilloscope extends IControl {
  connect(source?: any): void
  disconnect(): void
}
</script>