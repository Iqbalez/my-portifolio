declare module "gsap-trial/SplitText" {
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
