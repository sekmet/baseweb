/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';

import {mergeOverride, toObjectOverride} from '../helpers/overrides.js';
import {useStyletron} from '../styles/index.js';
import Icon from './icon.js';
import omitDollarPrefixedKeys from './omit-dollar-prefixed-keys.js';
import type {IconPropsT} from './types.js';

function Search(props: IconPropsT, ref) {
  const [, theme] = useStyletron();
  const {overrides = {}, ...restProps} = props;
  const SvgOverride = mergeOverride(
    // Icons from theme really targets the SVG override in the underlying Icon component, but
    // have props typed with IconPropsT. Provided the missing props inline below here.
    {
      component: theme.icons && theme.icons.Search ? theme.icons.Search : null,
      props: {
        title: 'Search',
        viewBox: '0 0 24 24',
        ...omitDollarPrefixedKeys(restProps),
      },
    },
    overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {},
  );
  return (
    <Icon
      title="Search"
      viewBox="0 0 24 24"
      ref={ref}
      overrides={{Svg: SvgOverride}}
      {...restProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 6C8.79086 6 7 7.79086 7 10C7 12.2091 8.79086 14 11 14C13.2091 14 15 12.2091 15 10C15 7.79086 13.2091 6 11 6ZM5 10C5 6.68629 7.68629 4 11 4C14.3137 4 17 6.68629 17 10C17 11.2958 16.5892 12.4957 15.8907 13.4765L19.7071 17.2929C20.0976 17.6834 20.0976 18.3166 19.7071 18.7071C19.3166 19.0976 18.6834 19.0976 18.2929 18.7071L14.4765 14.8907C13.4957 15.5892 12.2958 16 11 16C7.68629 16 5 13.3137 5 10Z"
      />
    </Icon>
  );
}

export default React.forwardRef<IconPropsT, mixed>(Search);
