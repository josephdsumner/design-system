/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';

export interface HdsModalFooterSignature {
  Args: {
    onDismiss?: (event: MouseEvent) => void;
  };
  Blocks: {
    default: [{ close?: (event: MouseEvent) => void }];
  };
  Element: HTMLDivElement;
}

export default class HdsModalFooterComponent extends Component<HdsModalFooterSignature> {
  constructor(owner: unknown, args: HdsModalFooterSignature['Args']) {
    super(owner, args);

    deprecate(
      'The `Hds::Modal::Footer` sub-component is now deprecated and will be removed in the next major version of `@hashicorp/design-system-components`. Use `Hds::DialogPrimitive::Footer` as one-to-one replacement.',
      false,
      {
        id: 'hds.components.modal.footer',
        until: '5.0.0',
        url: 'https://helios.hashicorp.design/components/flyout?tab=version%20history#460',
        for: '@hashicorp/design-system-components',
        since: {
          enabled: '4.6.0',
        },
      }
    );
  }
}
