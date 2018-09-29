import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as itemProductActions from '../../redux/itemProduct/action'

class ItemProduct extends React.Component {

  componentDidMount() {
    this.props.actions.getItemProduct()
  }

  render() {
    return (
      <React.Fragment>
        itemProduct
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ itemProduct }) => ({
  itemProduct: itemProduct
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(itemProductActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemProduct)