<template>
  <div>
    <Piano :low-note="24" :high-note="60" ref="piano" @change="onPianoPlay" />
    <Oscilloscope ref="osc" />
  </div>
</template>

<script setup lang="ts">
import * as Tone from 'tone'
import Piano, { IPiano } from '../components/Piano.vue';
import Oscilloscope, { IOscilloscope } from '../components/Oscilloscope.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const piano = ref<IPiano>()
const osc = ref<IOscilloscope>()

const synth = new Tone.Synth()
const onPianoPlay = (data: { note: number, state: boolean }) => {
  if (data.state) {
    synth.triggerAttack(Tone.Frequency(data.note, 'midi'))
  } else {
    synth.triggerRelease()
  }
}
onMounted(() => {
  synth.toDestination()
  osc.value?.colorize('fill', '#fff')
  osc.value?.resize(600, 300)
  osc.value?.connect(Tone.Destination)
})
onUnmounted(() => {
  synth.dispose()
})
</script>