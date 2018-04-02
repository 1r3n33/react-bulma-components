import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class LevelItem extends PureComponent {
  static displayName = 'Level.Item'
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
  }

  render() {
    const {
      children,
      className,
      renderAs,
      ...props
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        {...props}
        className={classnames('level-item', className, {
        })}
      >
        {children}
      </Element>
    );
  }
}