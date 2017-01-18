import db from '../db';

export default function retrieveBizCoupons(req) {
  return new Promise((resolve, reject) => {
    const business = {
      id: req.body.id
    };
    req.session.business = business;

    const queryCouponStr = `select * from coupon where business_id="${business.id}"`;
    db.query(queryCouponStr, (err, bizCoupons) => {
      console.log(bizCoupons, 'this is bizCoupons')
      if(err) {
        console.log('could not find coupons with biz id');
      }else{
        return resolve(bizCoupons);
      }
    });
  });
};