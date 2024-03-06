declare module '@hashicorp/ember-flight-icons/components/flight-icon' {
  import Component from '@ember/component';

  export interface FlightIconSignature {
    Args: {
      size?: string;
      color?: string;
      name: string | null;
      stretched?: boolean;
      // Incomplete
    };
    Element: SVGElement;
  }

  export class FlightIcon extends Component<FlightIconSignature> {}
  export default FlightIcon;
}