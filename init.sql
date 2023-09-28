create table company (
    company_id int primary key unique not null,
    company_name varchar(30) not null
);

create table employee (
    emp_id int primary key unique auto_increment not null,
    first_name varchar(30) not null,
    middle_name varchar(30),
    last_name varchar(30) not null,
    phone_number bigint unique not null,
    address varchar(50) not null,
    email varchar(30) unique not null,
    company_id int,
    foreign key (company_id) references company(company_id)
);

create table management (
    emp_id int,
    foreign key (emp_id) references employee(emp_id)
);

create table technical (
    emp_id int,
    foreign key (emp_id) references employee(emp_id)
);

create table customer (
    customer_id int primary key unique auto_increment,
    first_name varchar(30) not null,
    middle_name varchar(30),
    last_name varchar(30) not null,
    address varchar(50) not null,
    email varchar(30) unique not null,
    phone_number bigint unique not null,
    account_creation_date date not null,
    company_id int,
    foreign key (company_id) references company(company_id)
);

create table delivery (
    delivery_id int primary key unique auto_increment,
    delivery_date datetime not null,
    delivery_cost float,
    delivery_status varchar(15),
    customer_id int,
    foreign key (customer_id) references customer(customer_id)
);

create table payment (
    payment_id int primary key unique auto_increment,
    method varchar(20),
    payment_date datetime not null,
    payment_amount float not null
);

create table shopping_cart (
    no_of_products int,
    total_price float,
    customer_id int,
    foreign key (customer_id) references customer(customer_id)
);

create table inventory (
    stock_id int primary key unique auto_increment,
    quantity int,
    category varchar(30),
    remaining_quantity int,
    name varchar(50)
);

create table product (
    product_id int primary key unique auto_increment,
    description varchar(500),
    name varchar(50),
    image_url varchar(100),
    price float,
    customer_id int,
    foreign key (customer_id) references customer(customer_id),
    stock_id int,
    foreign key (stock_id) references inventory(stock_id)
);

create table reviews (
    review_id int primary key unique auto_increment,
    rating int,
    description varchar(250),
    review_date date,
    customer_id int,
    foreign key (customer_id) references customer(customer_id)
);

create table supplier (
    supplier_id int primary key unique auto_increment,
    address varchar(50) not null,
    phone_number bigint unique not null,
    first_name varchar(30) not null,
    middle_name varchar(30),
    last_name varchar(30) not null,
    company_id int,
    foreign key (company_id) references company(company_id)
);

create table vendor (
    vendor_id int primary key unique auto_increment,
    supplier_id int,
    foreign key (supplier_id) references supplier(supplier_id)
);

create table distributor (
    supplier_id int,
    foreign key (supplier_id) references supplier(supplier_id)
);
