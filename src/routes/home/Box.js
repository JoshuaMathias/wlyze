import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
     };
}

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const BoxSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
        return {
          text: props.text
        };
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const text = monitor.getText();
    const dropResult = monitor.getDropResult();
    console.log(text);
    // Card?Actions.moveCardToList(item.id, dropResult.listId);
  }
};


class Box extends Component {
    propTypes: {
      text: PropTypes.string.isRequired,
      isDragging: PropTypes.bool.isRequired,
      connectDragSource: PropTypes.func.isRequired



    },
    render() {
        var style= {
           left: this.props.left,
           top: this.props.top
        };
        var labelStyle = {
          left: this.props.left,
          top: (this.props.top - 50)
        };

        // var isDragging = this.props.isDragging;
        // var connectDragSource = this.props.connectDragSource;
        const { isDragging, connectDragSource } = this.props;
       
        return connectDragSource(
            <div style={{
              opacity: isDragging ? 0.5 : 1,
              fontSize: 25,
              fontWeight: 'bold',
              cursor: 'move'
            }}>
               <label htmlFor="main" style={labelStyle}>{this.props.title}</label>
               <textarea id="main" className="writeBox" rows={this.props.rows} cols={this.props.cols} 
                  style={style}>
               </textarea>
            </div>
        )
    }
}

//module.exports = Box;
// module.exports = DragSource("BOX", boxSource, collect)(Box);
export default DragSource(BoxSource, collect)(Box);
