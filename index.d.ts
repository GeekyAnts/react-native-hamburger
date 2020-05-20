export default interface HamburgerProps {
  active: boolean;
  type: 'cross' | 'spinCross' | 'arrow' | 'spinArrow';
  color?: string;
  onPress?: () => void;
}
