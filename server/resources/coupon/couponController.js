////////////////////////////////////////////////////////////
// FAKE DATA
////////////////////////////////////////////////////////////
var data = [
  {
    coupon_id: 1,
    title: '$20 off socks',
    image: '../../assets/img/socks.png',
    item_name: 'Socks',
    original_price: 10,
    coupon_price: 5,
    coupon_savings: 5,
    start_at: 'start_date',
    end_at: 'end_date',
    created_at: 'created_at_date',
  },
  {
    coupon_id: 2,
    title: '$5 off socks',
    image: '../../assets/img/socks.png',
    item_name: 'Socks',
    original_price: 10,
    coupon_price: 5,
    coupon_savings: 5,
    start_at: 'start_date',
    end_at: 'end_date',
    created_at: 'created_at_date',
  },
  {
    coupon_id: 3,
    title: '$5 off socks',
    image: '../../assets/img/socks.png',
    item_name: 'Socks',
    original_price: 10,
    coupon_price: 5,
    coupon_savings: 5,
    start_at: 'start_date',
    end_at: 'end_date',
    created_at: 'created_at_date',
  }
];

// GET request for /coupon
// retrieve all coupons in coupon table
exports.retrieveCoupons = (req, res) => {
  res.status(200).json({ coupons: data });
  // db.coupon.findAll()
  //   .then((coupons) => {
  //     console.log('successfully retrieved all coupons');
  //     res.status(200).json(coupons);
  //   }).catch((err) => {
  //     res.send(404).send('could not find any coupons');
  //   });
};

// POST request for /coupon
// create new coupon in coupon table
exports.createCoupon = (req, res) => {
  db.coupon.create({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    original_price: req.body.original_price,
    coupon_price: req.body.coupon_price,
    coupon_savings: req.body.coupon_savings,
    start_at: req.body.start_at,
    end_at: req.body.end_at,
    created_at: req.body.created_at,
    business_id: req.body.business_id
  }).then((coupon) => {
    console.log('successfully created a coupon');
    res.status(201).json(coupon);
  }).catch((err) => {
    res.status(404).send('could not create a coupon');
  });
};

// GET request for /coupon/:coupon_id
// retrieve all coupons with a specific coupon_id
exports.retrieveOneCoupon = (req, res) => {
  var num = parseInt(req.url.match(/[0-9]+/g)[0], 10);
  res.status(200).json({ message: 'Reached coupon id route', num });
  // db.coupon.findAll({where: {coupon_id: req.body.coupon_id}})
  //   .then((coupon) => {
  //     console.log('successfully retrieved coupon with coupon id:', req.body.coupon_id);
  //     res.status(200).json(coupon);
  //   }).catch((err) => {
  //     res.send(404).send('could not find any coupons with coupon id:', req.body.coupon_id);
  //   });
};