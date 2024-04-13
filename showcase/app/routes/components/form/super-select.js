/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

export default class ComponentsSuperSelectRoute extends Route {
  model() {
    // these are used only for presentation purpose in the showcase
    const STATES = ['default', 'hover', 'focus'];

    // Options data
    const OPTIONS = ['Option 1', 'Option 2', 'Option 3'];
    const SELECTED_OPTION = ['Option 1'];
    const SELECTED_OPTIONS = ['Option 1', 'Option 2'];

    const GROUPED_OPTIONS = [
      { groupName: 'Group', options: ['Option 1', 'Option 2'] },
      { groupName: 'Group', options: ['Option 3', 'Option 4'] },
      {
        groupName: 'Group',
        options: [
          { groupName: 'Subgroup', options: ['Option 5', 'Option 6'] },
          { groupName: 'Subgroup', options: ['Option 7', 'Option 8'] },
        ],
      },
      {
        groupName: 'Group',
        options: [
          { groupName: 'Subgroup', options: ['Option 10', 'Option 11'] },
          { groupName: 'Subgroup', options: ['Option 12', 'Option 13'] },
        ],
      },
    ];
    const SELECTED_GROUPED_OPTION = ['Option 1'];
    const SELECTED_GROUPED_OPTIONS = ['Option 1', 'Option 2'];

    const PLACES_OPTIONS = [
      'Oregon (us-west-2)',
      'N. Virginia (us-east-1)',
      'ALongUnbrokenStringALongUnbrokenStringALongUnbrokenStringALongUnbrokenStringALongUnbrokenString',
      'Ireland (eu-west-1)',
      'London(eu-west-2)',
      'Frankfurt (eu-central-1)',
    ];
    const SELECTED_PLACES_OPTION = ['Oregon (us-west-2)'];
    const SELECTED_PLACES_OPTIONS = [
      'Oregon (us-west-2)',
      'N. Virginia (us-east-1)',
      'Ireland (eu-west-1)',
    ];

    const CLUSTER_SIZE_OPTIONS = [
      {
        size: 'Extra Small',
        description: '2 vCPU | 1 GiB RAM',
        price: '$0.02',
      },
      { size: 'Small', description: '2 vCPU | 2 GiB RAM', price: '$0.04' },
      { size: 'Medium', description: '4 vCPU | 4 GiB RAM', price: '$0.08' },
      { size: 'Large', description: '8 vCPU | 8 GiB RAM', price: '$0.16' },
      {
        size: 'Extra Large',
        description: '16 vCPU | 16 GiB RAM',
        price: '$0.32',
      },
    ];
    const SELECTED_CLUSTER_SIZE_OPTION = CLUSTER_SIZE_OPTIONS[1];
    const SELECTED_CLUSTER_SIZE_OPTIONS = [
      CLUSTER_SIZE_OPTIONS[1],
      CLUSTER_SIZE_OPTIONS[2],
    ];

    return {
      STATES,
      OPTIONS,
      SELECTED_OPTION,
      SELECTED_OPTIONS,
      GROUPED_OPTIONS,
      SELECTED_GROUPED_OPTION,
      SELECTED_GROUPED_OPTIONS,
      PLACES_OPTIONS,
      SELECTED_PLACES_OPTION,
      SELECTED_PLACES_OPTIONS,
      CLUSTER_SIZE_OPTIONS,
      SELECTED_CLUSTER_SIZE_OPTION,
      SELECTED_CLUSTER_SIZE_OPTIONS,
    };
  }
}
