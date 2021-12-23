<template>
  <div>
    <TextButton text="Play" alternate-text="Stop" @change="onPlay" />
    <Slider :min="-16" :max="16" @change="onChange" ref="slider" />
    <Oscilloscope ref="osc" />
  </div>
</template>

<script setup lang="ts">
import * as Tone from 'tone'
import Oscilloscope, { IOscilloscope } from '../components/Oscilloscope.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import Slider, { ISlider } from '../components/Slider.vue';
import TextButton from '../components/TextButton.vue';

const osc = ref<IOscilloscope>()
const slider = ref<ISlider>()

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
const onChange = (volume: number) => {
  synth.set({
    oscillator: {
      volume
    }
  })
}
onMounted(() => {
  synth.toDestination()
  osc.value?.colorize('fill', '#fff')
  osc.value?.resize(600, 300)
  slider.value?.resize(600, 20)
  osc.value?.connect(synth)
})
onUnmounted(() => {
  synth.dispose()
})
</script>