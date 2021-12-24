<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Spectrogram } from 'nexusui'

interface Props extends ControlProps {

}
const props = defineProps<Props>()

const { id, exposes } = useControl(Spectrogram, {
  props,
  methods: ['connect', 'disconnect']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface ISpectrogram extends IControl {
  connect(source: any): void
  disconnect(): void
}
</script>