<template>
  <div>
    <Piano :low-note="24" :high-note="60" ref="piano" @change="onPianoPlay" />
  </div>
</template>

<script setup lang="ts">
import { Frequency } from 'tone'
import Piano, { IPiano } from '../components/Piano.vue';
import { onUnmounted, ref } from 'vue';

const piano = ref<IPiano>()
const ctx = new AudioContext()

const play = (freq: number) => {
  const osc = ctx.createOscillator();
  osc.type = 'square';
  osc.connect(ctx.destination);
  osc.frequency.value = freq;
  osc.start()
  return () => {
    osc.stop()
    osc.disconnect()
  }
}

let stop: null | (() => void);
const onPianoPlay = (data: { note: number, state: boolean }) => {
  if (data.state) {
    if (stop) {
      stop()
      stop = null
    }
    stop = play(Frequency(data.note, 'midi').valueOf())
  } else {
    stop?.()
    stop = null
  }
}
onUnmounted(() => {
  ctx.close()
})
</script>