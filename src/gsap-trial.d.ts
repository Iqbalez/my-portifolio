declare module "gsap/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: any, vars?: Record<string, any>);
    revert(): void;
    split(vars?: Record<string, any>): void;
  }
  export default SplitText;
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: Record<string, any>): ScrollSmoother;
    static refresh(safe?: boolean): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    scrollTop(value?: number): number;
    kill(): void;
  }
  export default ScrollSmoother;
}
