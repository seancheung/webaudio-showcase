<template>
  <div>
    <TextButton text="Play" alternate-text="Stop" @change="onPlay" />
    <Pan :value="0" @change="onChange" ref="pan" />
    <Meter ref="meter" />
  </div>
</template>

<script setup lang="ts">
import * as Tone from 'tone'
import { onMounted, onUnmounted, ref } from 'vue';
import TextButton from '../components/TextButton.vue';
import Meter, { IMeter } from '../components/Meter.vue';
import Pan, { IPan, PanValue } from '../components/Pan.vue';

const meter = ref<IMeter>()
const pan = ref<IPan>()
const panner = new Tone.Panner({
  pan: 0
})

const synth = new Tone.Synth({
  oscillator: {
    type: 'triangle'
  }
})
const onPlay = (state: boolean) => {
  if (state) {
    synth.triggerAttack('c3')
  } else {
    synth.triggerRelease()
  }
}
const onChange = ({ value }: PanValue) => {
  panner.set({
    pan: value
  })
}
onMounted(() => {
  panner.toDestination()
  synth.connect(panner)
  meter.value?.colorize('fill', '#fff')
  meter.value?.resize(600, 300)
  pan.value?.resize(600, 20)
  meter.value?.connect(Tone.Destination, 2)
})
onUnmounted(() => {
  synth.dispose()
})
</script>