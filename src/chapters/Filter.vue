<template>
  <div>
    <TextButton text="Play" alternate-text="Stop" @change="onPlay" />
    <Slider :min="20" :max="28000" :value="28000" @change="onChange" ref="slider" />
    <Spectrogram ref="spec" />
  </div>
</template>

<script setup lang="ts">
import * as Tone from 'tone'
import { onMounted, onUnmounted, ref } from 'vue';
import Slider, { ISlider } from '../components/Slider.vue';
import TextButton from '../components/TextButton.vue';
import Spectrogram, { ISpectrogram } from '../components/Spectrogram.vue';

const spec = ref<ISpectrogram>()
const slider = ref<ISlider>()

const synth = new Tone.Synth({
  oscillator: {
    type: 'sawtooth'
  }
})
const filter = new Tone.Filter({
  type: 'lowpass',
  frequency: 28000
})
const onPlay = (state: boolean) => {
  if (state) {
    synth.triggerAttack('c4')
  } else {
    synth.triggerRelease()
  }
}
const onChange = (frequency: number) => {
  filter.set({
    frequency
  })
}
onMounted(() => {
  synth.connect(filter)
  filter.toDestination()
  spec.value?.colorize('fill', '#fff')
  spec.value?.resize(600, 300)
  slider.value?.resize(600, 20)
  spec.value?.connect(filter)
})
onUnmounted(() => {
  synth.dispose()
})
</script>