/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import type {OverrideT} from '../helpers/overrides.js';
import type {ThemeT} from '../styles/types.js';

export type RatingOverridesT = {
  Root?: OverrideT,
  Item?: OverrideT,
};

export type StarRatingPropsT = {
  overrides?: RatingOverridesT,
  /** The current rating value. */
  value?: number,
  /** The total number of items to display. */
  numItems: number,
  /** Callback that's called with the newly selected value. */
  onChange?: ({value: number}) => mixed,
  size?: number,
};

export type EmoticonRatingPropsT = {
  overrides?: RatingOverridesT,
  /** The current rating value. */
  value?: number,
  /** Callback that's called with the newly selected value. */
  onChange?: ({value: number}) => mixed,
  size?: number,
};

export type RatingStateT = {
  previewIndex?: number,
  isFocusVisible?: boolean,
};

export type StyledRootPropsT = {
  $theme: ThemeT,
};

export type StyledRatingItemPropsT = {
  $theme: ThemeT,
  $isActive: boolean,
  $isSelected: boolean,
  $isFocusVisible: boolean,
  $index: number,
  $size: number,
};
