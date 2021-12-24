<template>
  <div>
    <div class="buttons">
      <TextButton text="Sine" @change="onPlaySine('sine', $event)" />
      <TextButton text="Square" @change="onPlaySine('square', $event)" />
      <TextButton text="Triangle" @change="onPlaySine('triangle', $event)" />
      <TextButton text="Saw" @change="onPlaySine('sawtooth', $event)" />
    </div>
    <Oscilloscope ref="osc" />
  </div>
</template>

<script setup lang="ts">
import * as Tone from 'tone'
import Oscilloscope, { IOscilloscope } from '../components/Oscilloscope.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import TextButton from '../components/TextButton.vue';

const osc = ref<IOscilloscope>()

const synth = new Tone.Synth({
  oscillator: {
    type: 'triangle'
  }
})
const onPlaySine = (type: 'sine' | 'square' | 'triangle' | 'sawtooth', active: boolean) => {
  if (active) {
    synth.set({
      oscillator: {
        type
      }
    })
    synth.triggerAttack('c3')
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
<style lang="less" scoped>
.buttons {
  display: flex;
  flex-direction: row;
  & > *:not(:last-child) {
    margin-right: 24px;
  }
}
</style>