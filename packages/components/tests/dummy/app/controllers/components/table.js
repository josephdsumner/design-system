/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';

// we use an array to declare the custom sorting order for the clusters' status
const customSortingCriteriaArray = [
  'failing',
  'active',
  'establishing',
  'pending',
];

export default class ComponentsTableController extends Controller {
  @tracked customSortOrder_demo2 = 'asc';
  @tracked customSortBy_demo3 = undefined;
  @tracked customSortOrder_demo3 = 'asc';
  @tracked customFilterRows = 'all';
  @tracked currentPaginatedSelectablePage = 1;
  @tracked currentPaginatedSelectablePageSize = 2;
  @tracked selectableUserData = [...this.model.selectableUserData];
  @tracked animatedUserData = [...this.model.selectableUserData];

  selectedUserIds = [];
  animatedUserIds = [];

  // CUSTOM SORTING DEMO #1
  // Sortable table with custom sorting done via extra key added to the data model

  get clustersWithExtraData_demo1() {
    return this.model.clusters.map((record) => {
      return {
        ...record,
        'status-sort-order': customSortingCriteriaArray.indexOf(
          record['status']
        ),
      };
    });
  }

  // CUSTOM SORTING DEMO #2
  // Sortable table with custom `sortingFunction` declared in the column hash

  get customSortingFunction_demo2() {
    return (s1, s2) => {
      const index1 = customSortingCriteriaArray.indexOf(s1['status']);
      const index2 = customSortingCriteriaArray.indexOf(s2['status']);
      if (index1 < index2) {
        return this.customSortOrder_demo2 === 'asc' ? -1 : 1;
      } else if (index1 > index2) {
        return this.customSortOrder_demo2 === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    };
  }

  @action
  customOnSort_demo2(_sortBy, sortOrder) {
    this.customSortOrder_demo2 = sortOrder;
  }

  // CUSTOM SORTING DEMO #3
  // Sortable table with custom sorting using yielded `<ThSort>` + `sortBy/sortOrder/setSortBy` properties

  @action
  onClickThSort__demo3(column, setSortBy) {
    // NOTICE: this code is a direct clone of the internal code of `Hds::Table` backing class
    // we need to keep an internal state of the sorting
    if (this.customSortBy_demo3 === column) {
      // check to see if the column is already sorted and invert the sort order if so
      this.customSortOrder_demo3 =
        this.customSortOrder_demo3 === 'asc' ? 'desc' : 'asc';
    } else {
      // otherwise, set the sort order to ascending
      this.customSortBy_demo3 = column;
      this.customSortOrder_demo3 = 'asc';
    }
    // update the sorting icons for the table
    if (setSortBy) {
      setSortBy(column);
    }
  }

  @action
  onSelectionChange(selection) {
    console.log(selection);
  }

  @action
  onPaginationSelectionChange(selection) {
    const start =
      (this.currentPaginatedSelectablePage - 1) *
      this.currentPaginatedSelectablePageSize;
    const end =
      this.currentPaginatedSelectablePage *
      this.currentPaginatedSelectablePageSize;
    for (let i = start; i < end; i++) {
      this.model.selectableData[i].isSelected = selection.includes(
        this.model.selectableData[i].id
      );
    }
  }

  get sortedModelClusters__demo3() {
    const clonedModelClusters = Array.from(this.model.clusters);
    if (this.customSortBy_demo3 === 'peer-name') {
      clonedModelClusters.sort((s1, s2) => {
        const name1 = s1['peer-name'].toLowerCase();
        const name2 = s2['peer-name'].toLowerCase();
        if (name1 < name2) {
          return this.customSortOrder_demo3 === 'asc' ? -1 : 1;
        }
        if (name1 > name2) {
          return this.customSortOrder_demo3 === 'asc' ? 1 : -1;
        }
        return 0;
      });
    } else if (this.customSortBy_demo3 === 'status') {
      clonedModelClusters.sort((s1, s2) => {
        const index1 = customSortingCriteriaArray.indexOf(s1['status']);
        const index2 = customSortingCriteriaArray.indexOf(s2['status']);
        if (index1 < index2) {
          return this.customSortOrder_demo3 === 'asc' ? -1 : 1;
        } else if (index1 > index2) {
          return this.customSortOrder_demo3 === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
    return clonedModelClusters;
  }

  @action
  extraOnSortCallback_demo3() {
    console.log(
      `extraOnSortCallback called with customSortBy='${this.customSortBy_demo3}' and customSortOrder='${this.customSortOrder_demo3}'`
    );
  }

  // CUSTOM SORTING DEMO #4
  // Sortable table with custom sorting using yielded `<ThSort>` + `sortBy/sortOrder/setSortBy` properties

  sortModelClusters__demo4 = (sortBy, sortOrder) => {
    // here goes the logic for the custom sorting of the `model` array based on `sortBy/sortOrder`
    const clonedModelClusters = Array.from(this.model.clusters);
    if (sortBy === 'peer-name') {
      clonedModelClusters.sort((s1, s2) => {
        const name1 = s1['peer-name'].toLowerCase();
        const name2 = s2['peer-name'].toLowerCase();
        if (name1 < name2) {
          return sortOrder === 'asc' ? -1 : 1;
        }
        if (name1 > name2) {
          return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
      });
    } else if (sortBy === 'status') {
      clonedModelClusters.sort((s1, s2) => {
        const index1 = customSortingCriteriaArray.indexOf(s1['status']);
        const index2 = customSortingCriteriaArray.indexOf(s2['status']);
        if (index1 < index2) {
          return sortOrder === 'asc' ? -1 : 1;
        } else if (index1 > index2) {
          return sortOrder === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
    return clonedModelClusters;
  };

  @action
  mockIndeterminateState(checkbox) {
    checkbox.indeterminate = true;
  }

  // TODO refactor/rename/reorganize the code later

  @action
  onFilterChange(event) {
    this.customFilterRows = event.target.value;
  }

  get filteredSelectableData() {
    if (this.customFilterRows === 'all') {
      return this.model.selectableData;
    } else {
      const reminder = this.customFilterRows === 'even' ? 0 : 1;
      return this.model.selectableData.filter(
        (item) => item.id % 2 === reminder
      );
    }
  }

  get paginatedSelectableDataTotalItems() {
    return this.model.selectableData.length;
  }

  get paginatedSelectableData() {
    const start =
      (this.currentPaginatedSelectablePage - 1) *
      this.currentPaginatedSelectablePageSize;
    const end =
      this.currentPaginatedSelectablePage *
      this.currentPaginatedSelectablePageSize;
    return this.model.selectableData.slice(start, end);
  }

  // Keep track of users selected in the selectable users table
  @action
  onSelectableUsersChange({ selectedRowsKeys }) {
    this.selectedUserIds = [...selectedRowsKeys];
  }

  @action
  deleteSelectedUsers() {
    this.selectableUserData = this.selectableUserData.filter(
      (user) => !this.selectedUserIds.includes(user.id)
    );
    // Reset selectedUsers array:
    this.selectedUserIds = [];
  }

  @action
  onAnimatedUsersChange({ selectedRowsKeys }) {
    this.animatedUserIds = [...selectedRowsKeys];
  }

  @action
  isAnimated(userId) {
    return this.animatedUserData.find((user) => user.id === userId).animate;
  }

  @action
  animateSelectedUsers() {
    let clonedAnimatedUserData = [...this.animatedUserData];
    // Add class "shw-animate-user" to each user in animatedUsers array
    for (const userId of this.animatedUserIds) {
      clonedAnimatedUserData.find((user) => user.id === userId).animate = true;
    }
    this.animatedUserData = clonedAnimatedUserData;
    later(() => {
      this.resetUserAnimation();
    }, 5000);
  }

  resetUserAnimation() {
    let clonedAnimatedUserData = [...this.animatedUserData];
    for (let i = 0; i < clonedAnimatedUserData.length; i++) {
      clonedAnimatedUserData[i].animate = false;
    }
    this.animatedUserData = clonedAnimatedUserData;
  }

  @action
  onPaginatedSelectablePageChange(page) {
    this.currentPaginatedSelectablePage = page;
  }

  @action
  onPaginatedSelectablePageSizeChange(pageSize) {
    // we agreed to reset the pagination to the first element (any alternative would result in an unpredictable UX)
    this.currentPaginatedSelectablePage = 1;
    this.currentPaginatedSelectablePageSize = pageSize;
  }
}
