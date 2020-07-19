/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from 'react';

import {Button, KIND} from '../../button/index.js';
import {ArrowDown, ArrowLeft, ArrowRight, ArrowUp} from '../../icon/index.js';
import {LightTheme, ThemeProvider} from '../../index.js';
import {Tab, Tabs} from '../index.js';

export default function Scenario() {
  const [activeKey, setActiveKey] = React.useState('0');
  return (
    <ThemeProvider theme={{...LightTheme, direction: 'rtl'}}>
      <div dir="rtl">
        <Tabs
          activeKey={activeKey}
          onChange={({activeKey}) => setActiveKey(activeKey)}
        >
          <Tab title="Robot" artwork={props => <ArrowUp {...props} />}>
            <Button kind={KIND.secondary}>🤖</Button>
          </Tab>
          <Tab title="Monster" artwork={props => <ArrowRight {...props} />}>
            <Button kind={KIND.secondary}>👺</Button>
          </Tab>
          <Tab title="Watermelon" artwork={props => <ArrowDown {...props} />}>
            <Button kind={KIND.secondary}>🍉</Button>
          </Tab>
          <Tab title="Dragon" artwork={props => <ArrowLeft {...props} />}>
            <Button kind={KIND.secondary}>🐲</Button>
          </Tab>
        </Tabs>
      </div>
    </ThemeProvider>
  );
}
