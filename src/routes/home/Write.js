/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import { ItemTypes } from './Constants';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

class Write extends Component {
  render() {
    const { x, y } = this.props;
    const black = (x + y) % 2 === 1;
  return (
    <div>
      <h1 className={s.title}>Write</h1>
      <Box title="Start Writing!" left="250" top="50" rows="10" cols="50" />
      <Box title="Synonyms" left="0" top="50" rows="10" cols="20" />
      <Box title="Definitions" left="750" top="50" cols="20" rows="10" />
      <Box title="Languages" left="750" top="350" rows="5" cols="20" />
      <Box title="Spanish Definitions" left="250" top="350" rows="5" cols="20" />
    </div>
  );
}
// Write.propTypes = {
//   x: PropTypes.number.isRequired,
//   y: PropTypes.number.isRequired
// };

export default flow(DragDropContext(HTML5Backend)(DropTarget(ItemTypes.BOX)(withStyles(Write, s))));