import templateOnlyComponent from '@ember/component/template-only';

interface HdsDropdownHeaderSignature {
  Args: {
    hasDivider: boolean;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const HdsDropdownHeaderComponent = templateOnlyComponent<HdsDropdownHeaderSignature>();

export default HdsDropdownHeaderComponent;
