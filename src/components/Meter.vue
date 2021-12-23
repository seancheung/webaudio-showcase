<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { Meter } from 'nexusui'

interface Props extends ControlProps {

}
const props = defineProps<Props>()

const { id, exposes } = useControl(Meter, {
  props,
  methods: ['connect', 'disconnect']
})
defineExpose(exposes)
</script>
<script lang="ts">
import { IControl, useControl, ControlProps } from './nexus'
export interface IMeter extends IControl {
  connect(source?: any): void
  disconnect(): void
}
</script>