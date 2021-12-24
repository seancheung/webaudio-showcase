import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/waveform",
    component: () => import("./chapters/WaveForm.vue"),
  },
  {
    path: "/amplitude",
    component: () => import("./chapters/Amplitude.vue"),
  },
  {
    path: "/pitch",
    component: () => import("./chapters/Pitch.vue"),
  },
  {
    path: "/panning",
    component: () => import("./chapters/Panning.vue"),
  },
  {
    path: "/filter",
    component: () => import("./chapters/Filter.vue"),
  },
  {
    path: "/envelope",
    component: () => import("./chapters/Envelope.vue"),
  },
  {
    path: "/webaudio",
    component: () => import("./chapters/WebAudio.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
