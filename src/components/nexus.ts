import { nanoid } from "nanoid";
import { onMounted, onUnmounted } from "vue";

export interface ControlProps {
  size?: [number, number];
}
export interface IControl {
  readonly id: number;
  resize(width: number, height: number): void;
  colorize(
    type: "accent" | "fill" | "dark" | "light" | "mediumDark" | "mediumLight",
    color: string
  ): void;
}
export interface Point {
  x: number;
  y: number;
}

export function delegate(control: { current?: any }, methods: string[]) {
  return methods.reduce(
    (p, c) => ({
      ...p,
      [c]: (...args: any[]) => control.current[c].apply(control.current, args),
    }),
    {
      resize: (...args: any[]) =>
        control.current.resize.apply(control.current, args),
    }
  );
}

interface ControlOptions {
  props?: any;
  methods?: string[];
  emits?: {
    (event: "change", value: any): void;
  };
}
export function useControl(Control: any, opts: ControlOptions) {
  const { props, emits, methods = [] } = opts;
  const id = nanoid();
  const control: { current?: any } = {};
  onMounted(() => {
    control.current = new Control(`#${id}`, {
      ...props,
    });
  });
  onMounted(() => {
    if (emits) {
      control.current.on("change", (value: any) => {
        emits("change", value);
      });
    }
  });
  onUnmounted(() => {
    control.current.destroy();
  });
  const exposes = { id, ...delegate(control, ["colorize", ...methods]) };
  return { id, control, exposes };
}
