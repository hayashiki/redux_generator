import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as itemActions from '../../redux/item/action'

export class Item extends Component {

  componentDidMount() {
    this.props.itemActions.getItems()
  }

  render() {
    return (
      <React.Fragment>
        Item
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ item }) => ({
  item: item
})

const mapDispatchToProps = dispatch => ({
  itemActions: bindActionCreators(itemActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)
