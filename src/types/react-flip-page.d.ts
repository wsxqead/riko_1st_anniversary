declare module "react-flip-page" {
  import { Component } from "react";

  interface FlipPageProps {
    className?: string; // ✅ className 속성 추가
    orientation?: "horizontal" | "vertical";
    animationDuration?: number;
    treshold?: number;
    flipOnTouch?: boolean;
    responsive?: boolean;
    showHint?: boolean;
    uncutPages?: boolean; // ✅ uncutPages 속성 추가
    onPageChange?: (pageIndex: number) => void;
    children: React.ReactNode;
    style?: React.CSSProperties; // ✅ `style` 속성 추가
  }

  export default class FlipPage extends Component<FlipPageProps> {}
}
