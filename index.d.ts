import { Component } from "react";

interface HamburgerProps {
  active: boolean;
  type: 'cross' | 'spinCross' | 'arrow' | 'spinArrow';
  color?: string;
  onPress?: () => void;
}

export default class Hamburger extends Component<HamburgerProps> {}
