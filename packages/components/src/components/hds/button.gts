/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import HdsInteractive, { type HdsInteractiveSignature } from './interactive';
import hdsLinkToModels from '../../helpers/hds-link-to-models';
import hdsLinkToQuery from '../../helpers/hds-link-to-query';

import FlightIcon from '@hashicorp/ember-flight-icons/components/flight-icon';

// @ts-expect-error why doesn't the declare module in global.d.ts fix this?
import { eq } from 'ember-truth-helpers';

export const DEFAULT_SIZE = 'medium';
export const DEFAULT_COLOR = 'primary';
export const DEFAULT_ICONPOSITION = 'leading';
export const SIZES = ['small', 'medium', 'large'] as const;
export const COLORS = ['primary', 'secondary', 'tertiary', 'critical'] as const;
export const ICONPOSITIONS = ['leading', 'trailing'] as const;

export type HdsButtonSize = typeof SIZES[number];
export type HdsButtonColor = typeof COLORS[number];
export type HdsButtonIconPosition = typeof ICONPOSITIONS[number];

export interface HdsButtonSignature {
  Args: HdsInteractiveSignature['Args'] & {
    size?: HdsButtonSize;
    color?: HdsButtonColor;
    text: string;
    icon?: string;
    iconPosition?: HdsButtonIconPosition;
    isIconOnly?: boolean;
    isInline?: boolean;
    isFullWidth?: boolean;
  };
  Element: HdsInteractiveSignature['Element'];
}

export default class HdsButtonIndexComponent extends Component<HdsButtonSignature> {
  /**
   * @param text
   * @type {string}
   * @description The text of the button or value of `aria-label` if `isIconOnly` is set to `true`. If no text value is defined an error will be thrown.
   */
  get text() {
    let { text } = this.args;

    assert(
      '@text for "Hds::Button" must have a valid value',
      text !== undefined
    );

    return text;
  }

  /**
   * @param size
   * @type {string}
   * @default medium
   * @description The size of the button; acceptable values are `small`, `medium`, and `large`
   */
  get size() {
    let { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Hds::Button" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  /**
   * @param color
   * @type {string}
   * @default primary
   * @description Determines the color of button to be used; acceptable values are `primary`, `secondary`, and `critical`
   */
  get color() {
    let { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Hds::Button" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  /**
   * @param icon
   * @type {string}
   * @default null
   * @description The name of the icon to be used.
   */
  get icon() {
    assert(
      `when the "Hds::Button" @color is "tertiary" an @icon is required`,
      !(this.color === 'tertiary' && !this.args.icon)
    );

    return this.args.icon ?? null;
  }

  /**
   * @param isIconOnly
   * @type {boolean}
   * @default false
   * @description Indicates if the button will only contain an icon; component will also ensure that accessible text is still applied to the component.
   */
  get isIconOnly() {
    if (this.icon) {
      return this.args.isIconOnly ?? false;
    }
    return false;
  }

  /**
   * @param iconPosition
   * @type {string}
   * @default leading
   * @description Positions the icon before or after the text; allowed values are `leading` or `trailing`
   */
  get iconPosition() {
    let { iconPosition = DEFAULT_ICONPOSITION } = this.args;

    assert(
      `@iconPosition for "Hds::Button" must be one of the following: ${ICONPOSITIONS.join(
        ', '
      )}; received: ${iconPosition}`,
      ICONPOSITIONS.includes(iconPosition)
    );

    return iconPosition;
  }

  /**
   * @param iconSize
   * @type {string}
   * @default 16
   * @description ensures that the correct icon size is used. Automatically calculated.
   */
  get iconSize() {
    if (this.args.size === 'large') {
      return '24';
    } else {
      return '16';
    }
  }

  /**
   * @param isFullWidth
   * @type {boolean}
   * @default false
   * @description Indicates that a button should take up the full width of the parent container. The default is false.
   */
  get isFullWidth() {
    return this.args.isFullWidth ?? false;
  }

  /**
   * Get the class names to apply to the component.
   * @method Button#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-button'];

    // add a class based on the @color argument
    classes.push(`hds-button--color-${this.color}`);

    // add a class based on the @isFullWidth argument
    if (this.isFullWidth) {
      classes.push('hds-button--width-full');
    }

    // add a class based on isIconOnly argument
    if (this.isIconOnly) {
      classes.push('hds-button--is-icon-only');
    }

    // add a class based on the @isInline argument
    if (this.args.isInline) {
      classes.push('hds-button--is-inline');
    }

    // add a class based on the @size argument
    classes.push(`hds-button--size-${this.size}`);

    return classes.join(' ');
  }

  <template>
    {{!
      Copyright (c) HashiCorp, Inc.
      SPDX-License-Identifier: MPL-2.0
    }}
    <HdsInteractive
      class={{this.classNames}}
      @current-when={{@current-when}}
      @models={{hdsLinkToModels @model @models}}
      @query={{hdsLinkToQuery @query}}
      @replace={{@replace}}
      @route={{@route}}
      @isRouteExternal={{@isRouteExternal}}
      @href={{@href}}
      @isHrefExternal={{@isHrefExternal}}
      ...attributes
      aria-label={{if this.isIconOnly this.text null}}
    >
      {{#if this.isIconOnly}}
        <span class="hds-button__icon">
          <FlightIcon @name={{this.icon}} @size={{this.iconSize}} @stretched={{true}} />
        </span>
      {{else}}
        {{#if this.icon}}
          {{#if (eq this.iconPosition "leading")}}
            <span class="hds-button__icon">
              <FlightIcon @name={{this.icon}} @size={{this.iconSize}} @stretched={{true}} />
            </span>
            <span class="hds-button__text">
              {{this.text}}
            </span>
          {{else}}
            <span class="hds-button__text">
              {{this.text}}
            </span>
            <span class="hds-button__icon">
              <FlightIcon @name={{this.icon}} @size={{this.iconSize}} @stretched={{true}} />
            </span>
          {{/if}}
        {{else}}
          <span class="hds-button__text">
            {{this.text}}
          </span>
        {{/if}}
      {{/if}}
    </HdsInteractive>
  </template>
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Hds::Button': typeof HdsButtonIndexComponent;
    'hds/button': typeof HdsButtonIndexComponent;
  }
}
