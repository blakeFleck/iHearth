import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native'
import ListViewEntry from './ListViewEntry';
import styles from './../styles';
import {
  Container,
  List,
  Content,
} from 'native-base';

const route = {
  type: 'push',
  route: {
    key: 'coupon',
    title: 'CouponViewEntry'
  }
};

export default class ListView extends Component {
  constructor(props) {
    super(props);
    _handleNavigate = this.props._handleNavigate;
  }

  // Before rendering, get state from server
  componentWillMount() {
    console.log('USER INFO...', this.props);
    console.log(this.props.userInfo.userInfo.user_id)
    this.user_id = this.props.userInfo.userInfo.user_id;
    this.props.fetchCoupons(this.user_id);
  }

  render() {
    return (
      <List>
        {this.props.coupons.items.map((coupon) => (
          <ListViewEntry
            key={ coupon.coupon_id }
            onPress={ (event) => { _handleNavigate(route); this.props.fetchCoupon(coupon.coupon_id) }}
            coupon={ coupon } />
        ))}
      </List>
    );
  }
} 