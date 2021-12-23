<template>
  <div>
    <TextButton text="Play" @change="onPlay" />
    <Envelope1 :points="points" no-new-points @change="onChange" class="env" />
    <Spectrogram ref="spec" />
  </div>
</template>

<script setup lang="ts">
import * as Tone from 'tone'
import { onMounted, onUnmounted, ref } from 'vue';
import TextButton from '../components/TextButton.vue';
import Spectrogram, { ISpectrogram } from '../components/Spectrogram.vue';
import Envelope1 from '../components/Envelope.vue';
import { Point } from '../components/nexus';

const spec = ref<ISpectrogram>()
const points: Point[] = [
  {
    x: 0.1,
    y: 0.4
  },
  {
    x: 0.35,
    y: 0.6
  },
  {
    x: 0.65,
    y: 0.2
  },
  {
    x: 0.9,
    y: 0.4
  },
]
const toEnvelope = (points: Point[]) => {
  const attack = points[0].x
  const decay = points[1].x - points[0].x
  const sustain = points[2].y
  const release = points[3].x - points[2].x
  return {
    attack: attack * 2,
    decay: decay * 2,
    sustain,
    release: release * 3
  }
}

const synth = new Tone.Synth({
  oscillator: {
    type: 'sawtooth'
  },
  envelope: toEnvelope(points)
})
const onPlay = (state: boolean) => {
  if (state) {
    synth.triggerAttack('c4')
  } else {
    synth.triggerRelease()
  }
}
const onChange = (points: Point[]) => {
  synth.set({
    envelope: toEnvelope(points)
  })
}
onMounted(() => {
  synth.toDestination()
  spec.value?.colorize('fill', '#fff')
  spec.value?.resize(600, 300)
  spec.value?.connect(synth)
})
onUnmounted(() => {
  synth.dispose()
})
</script>
<style>
.env {
  margin-top: 24px;
}
</style>