drop database if exists ihearth;
create database ihearth;

use ihearth;

create table user (
  user_id int not null auto_increment,
  email varchar(100) not null,
  password varchar(100) not null,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  dob datetime not null,
  gender varchar(1) not null,
  total_savings float(2) not null default 0,
  primary key (user_id)
);

create table business (
  business_id int not null auto_increment,
  email varchar(100) not null,
  password varchar(100) not null,
  company_name varchar(50) not null,
  address varchar(50) not null,
  city varchar(50) not null,
  state varchar(20) not null,
  zipcode int not null,

  primary key (business_id)
);

create table coupon (
  coupon_id int not null auto_increment,
  business_id int,
  title varchar(300) not null,
  image varchar(300) not null,
  item_name varchar(100) not null,
  description varchar(300) not null,
  original_price float(2) not null,
  coupon_price float(2) not null,
  coupon_savings float(2) not null,
  start_at datetime not null,
  end_at datetime not null,
  created_at datetime not null default current_timestamp(),

  primary key (coupon_id),

  index business_id (business_id),
  foreign key (business_id)
    references business (business_id)
    on delete cascade
    on update cascade
);

create table user_coupon (
  user_coupon_id int not null auto_increment,
  user_id int,
  coupon_id int,
  used boolean,
  expired boolean,

  primary key (user_coupon_id),

  index user_id (user_id),
  foreign key (user_id)
    references user (user_id)
    on delete set null
    on update cascade,

  index coupon_id (coupon_id),
  foreign key (coupon_id)
    references coupon (coupon_id)
    on delete set null
    on update cascade
);

create table beacon (
  beacon_id int not null auto_increment,
  business_id int,
  uuid varchar(100) not null,
  section varchar(20) not null,

  primary key (beacon_id),

  index business_id (business_id),
  foreign key (business_id)
    references business (business_id)
    on delete cascade
    on update cascade
);

create table coupon_beacon (
  coupon_beacon_id int not null auto_increment,
  coupon_id int,
  beacon_id int,

  primary key (coupon_beacon_id),

  index beacon_id (beacon_id),
  foreign key (beacon_id)
    references beacon (beacon_id)
    on delete cascade
    on update cascade,

  index coupon_id (coupon_id),
  foreign key (coupon_id)
    references coupon (coupon_id)
    on delete cascade
    on update cascade
);

/* --dummy data
insert into user (email, password, first_name, last_name, dob, gender, total_savings)
values ('jamesgu@gmail.com', 'password', 'James', 'Gu', '1993-05-21 12:00:00', 'm', 100.00);

insert into business (email, password, company_name, address, city, state, zipcode)
values ('nike@gmail.com', 'password', 'Nike', '744 Market Street', 'San Francisco', 'CA', 94112);

insert into coupon (business_id, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (1, '$5 off socks', 'https://facebook.github.io/react/img/logo_og.png', 'Socks', 'Lorem Ipsum...', 10.00, 5.00, 5.00, '2017-01-05 16:00:00', '2017-01-05 18:00:00');

insert into coupon (business_id, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (1, '$20 off jacket', 'https://facebook.github.io/react/img/logo_og.png', 'Jackets', 'Lorem Ipsum...', 120.00, 100.00, 20.00, '2017-01-05 01:00:00', '2017-01-05 03:00:00');
*/
