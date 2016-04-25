/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import { DragDropContext } from './Write';
import HTML5Backend from 'react-dnd-html5-backend';
// import { DragDropContext } from 'react-dnd';

const title = 'Writealyze';

function Home(news, context) {
  console.log(context);
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Write x={0} y={0}/>
      </div>
    </div>
  );
}

Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(Home, s);
