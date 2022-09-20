import React from 'react';
import PropTypes from 'prop-types';

export default class ToolBar extends React.Component {

  static propTypes = {
    onKillClick: PropTypes.func,
    disableKill: PropTypes.bool,
    onOpenDevToolClick: PropTypes.func,
    disabelOpenDevTool: PropTypes.bool
  }

  render() {
    const {
      showDevToolButton
    } = this.props;
    return (
      <div className="toolbar-actions">
        <div className="btn-group">
          <button
            className="btn btn-default"
            disabled={this.props.disableKill}
            onClick={this.props.onKillClick}
          >
            End process
          </button>
          {showDevToolButton && <button
            className="btn btn-default"
            disabled={this.props.disabelOpenDevTool}
            onClick={this.props.onOpenDevToolClick}
          >
            Open Dev Tool
          </button>
          }
        </div>
      </div>
    )
  }
}
