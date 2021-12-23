<template>
  <div class="container">
    <div class="menu">
      <router-link to="/amplitude">音量</router-link>
      <router-link to="/pitch">音高</router-link>
      <router-link to="/waveform">基本波形</router-link>
      <router-link to="/filter">滤波器</router-link>
      <router-link to="/envelope">包络</router-link>
      <router-link to="/webaudio">WebAudioAPI</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: row;
  padding-top: 24px;
  .menu {
    display: flex;
    margin-right: 24px;
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>
