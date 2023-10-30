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
    password varchar(100) not null,
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
    address varchar(300) not null default '',
    email varchar(30) unique not null,
    password varchar(100) not null,
    phone_number bigint unique not null,
    account_creation_date date not null,
    company_id int,
    foreign key (company_id) references company(company_id)
);

create table delivery (
    delivery_id int primary key unique auto_increment,
    delivery_date datetime not null,
    delivery_cost float,
    customer_id int,
    foreign key (customer_id) references customer(customer_id)
);

create table payment (
    payment_id int primary key unique auto_increment,
    method varchar(20) default 'card',
    payment_date datetime not null,
    payment_amount float not null,
    card_name varchar(30),
    card_number bigint,
    cvv int,
    customer_id int,
    foreign key (customer_id) references customer(customer_id)
);

create table product (
    product_id int primary key unique auto_increment,
    description varchar(500),
    category varchar(50),
    name varchar(50),
    image_url varchar(200),
    price float
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
);

create table inventory (
    stock_id int primary key unique auto_increment,
    quantity int,
    category varchar(30),
    name varchar(50),
    product_id int,
    foreign key (product_id) references product(product_id)
);

create table shopping_cart (
	cart_id int primary key not null unique auto_increment,
    customer_id int,
    foreign key (customer_id) references customer(customer_id)
);
create table cart_items(
	cart_id int,
	product_id int,
    quantity int,
    total_price float,
	foreign key (cart_id) references shopping_cart(cart_id),
	foreign key (product_id) references product(product_id)
);

create table reviews (
    review_id int primary key unique auto_increment,
    rating int,
    review_date date,
    customer_id int,
    product_id int,
    foreign key (customer_id) references customer(customer_id),
    foreign key (product_id) references product(product_id)
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

insert into product(
category, description, name, image_url, price
)
values(
'Snacks', '10 Rs for 200gm', 'Bhujia Sev', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtI_OFRR6BCr02XPAw25P-GpbzCSsbHOf_w&usqp=CAU', 10
),
(
'Snacks', '10 Rs for 200gm', 'Lasaniya gathiya' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrPcx8FJ3qyKJ8kmSTVK3YaLCaXvkUmKE8g&usqp=CAU',10
),
(
'Snacks', '20 Rs for 200gm', 'Tomato Lays', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82MKjFVD-3AbBiqjyEvcWtBso2DSSBurtVQ&usqp=CAU', 20
),
(
'Snacks', '130 Rs for 300gm', 'Pringles', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUih5ltcKB09rRsyCPA0TQg4aXoMyXfRWiuw&usqp=CAU', 130
),
(
'Snacks', '30 Rs for 200gm', 'Doritos',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSL8bkSQzXQaYs3yqtdq5J3JuyItAq9k0jQ&usqp=CAU', 30
),
(
'Snacks', '20 Rs for 200gm', 'Punjabi Tadka',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKK04OST8DPRGoF0JLEM6W1QeNRZTHU60bqwJ_da5cusdW53aatgpfAS_oJrPphKukqU&usqp=CAU', 20
),
(
'Snacks', '20 Rs for 200gm', 'Long Masala Banana Chips',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNmhh8-_fSaOPRMWjB9V0hIgb-np1n3eleQ&usqp=CAU', 20
) ,
(
'Snacks', '20 Rs for 200gm', 'Kurkure',
'https://m.media-amazon.com/images/I/71LyKlizpuL.AC_UF1000,1000_QL80.jpg', 20
);

insert into product(
category, description, name, image_url, price
)
values(
'Cookies', '30 Rs for 200gm', 'Dark Fantasy Choco Fills',
'https://www.bigbasket.com/media/uploads/p/l/286082_12-sunfeast-dark-fantasy-choco-fills-biscuits-cookies.jpg?tr=w-640,q=80', 30
),
(
'Cookies', '30 Rs for 200gm', 'Oreo Biscuit',
'https://m.media-amazon.com/images/I/61Xj1A6WCTL.SL1500.jpg', 30
),
(
'Cookies', '20 Rs for 200gm', 'Marigold Biscuit',
'https://m.media-amazon.com/images/I/61EP5COKj4L.jpg', 20
),
(
'Cookies', '20 Rs for 200gm', 'Cheese Crackers',
'https://5.imimg.com/data5/UX/SO/HC/SELLER-16537610/priyagold-cheese-cracker-biscuits.jpg', 20
),
(
'Cookies', '20 Rs for 200gm', 'Milk Bikis',
'https://www.jiomart.com/images/product/original/491587134/britannia-milk-bikis-biscuits-500-g-product-images-o491587134-p491587134-0-202203170354.jpg?im=Resize=(1000,1000)', 20
),
(
'Cookies', '20 Rs for 200gm', 'Nutri Choice',
'https://www.bigbasket.com/media/uploads/p/l/40086304-2_6-britannia-nutrichoice-digestive-zero-high-fibre-biscuits.jpg', 20
),
(
'Cookies', '20 Rs for 200gm', 'Bourbon',
'https://5.imimg.com/data5/SELLER/Default/2023/3/291829697/UT/JE/CF/51126755/britannia-bourbon-biscuit.jpg', 20
),
(
'Cookies', '10 Rs for 200gm', 'Parle G',
'https://www.jiomart.com/images/product/original/491539619/parle-g-original-glucose-biscuits-100-g-product-images-o491539619-p491539619-0-202301131722.jpg?im=Resize=(1000,1000)', 10
);

insert into product(
category, description, name, image_url, price
)
values(
'Sweets', '500 Rs for 200gm','Ferrero Rocher',
'https://m.media-amazon.com/images/I/81JugTbWdzL.jpg', 500
),
(
'Sweets', '270 Rs for 200gm','Dairy Milk Silk',
'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/11022b.jpg?ts=1688807689', 270
),
(
'Sweets', '30 Rs for 37.3gm','Kitkat',
'https://www.bigbasket.com/media/uploads/p/xl/40122230_9-nestle-kitkat-crispy-wafer-bar.jpg', 30
),
(
'Sweets', '10 Rs for 18gm','Munch',
'https://5.imimg.com/data5/SELLER/Default/2022/4/BX/LT/MY/5116174/nastle-maha-munch-chocolate.jpg', 10
),
(
'Sweets', '225 Rs for 1Kg','Haldiram Rasgulla',
'https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/r/a/rasgulla_6.jpg', 225
),
(
'Sweets', '225 Rs for 1Kg','Haldiram Gulab Jamun',
'https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/g/j/gj-500g-front-1v1.jpg', 225),
(
'Sweets', '400 Rs for 400gm','Haldiram Besan Laddu',
'https://baazwsh.com/cdn/shop/products/besan-ladoo-400g-haldirams-baazwsh-763272.jpg?v=1665488010',400
),
(
'Sweets', '360Rs for 500gm','Milk Cake',
'https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/m/i/milk_cake.jpg',360
);

insert into product (category, description, name, image_url, price )
values
( 'Fruits' ,
 '22 Rs for 500gm' ,
'Banana',
'https://tse4.mm.bing.net/th?id=OIP.IXKCpF-CG8jGSmOdUoYKIQHaEK&pid=Api&P=0&h=180',
22),
( 'Fruits' ,
 '80 Rs for 250gm' ,
'Grapes',
'https://tse1.mm.bing.net/th?id=OIP.S0MwlWV6Tgy2br4GfBaJcgHaE6&pid=Api&P=0&h=180',
80),
( 'Fruits' ,
 '80 Rs for 250gm' ,
'Apples',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aXqHdPUhiGbV6IpAjNQWfago64IWwCZqlA&usqp=CAU',
80),
( 'Fruits' ,
 '140 Rs for 500gm' ,
'Oranges',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPhPFg7QhdbFjttG9SNME-uHndIPW2Y40Zw&usqp=CAU',
140),
( 'Fruits' ,
 '90 Rs for 800gm' ,
'Pineapple',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNw11AtnkYWJNc3efgIMjnzsXPAB19qAP_w&usqp=CAU',
90),
( 'Fruits' ,
 '40 Rs for 500gm' ,
'Guava',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dQwLWdyqVnvijep83uzmRoX-FGXO_9SUcw&usqp=CAU',
40),
( 'Fruits' ,
 '220 Rs for 1 Kg' ,
'Mangoes',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXdJPRyEebLRiUikB5x9hw-AwOYdNLUaKeA&usqp=CAU',
220),
( 'Fruits' ,
 '60 Rs for 500 gm' ,
'Strawberries',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Q4uIH9CEAuEL80813qdvOdWUGUzbpbYMxQ&usqp=CAU',
60);

insert into product (category, description, name, image_url, price )
values
( 'Vegetables' ,
 '80 Rs for 500 gm' ,
'Tomato',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRv2MZNE1IHOovltlxkw6gSUDGfBV8spalw&usqp=CAU',
80),
( 'Vegetables' ,
 '70 Rs for 500 gm' ,
'Potato',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHlE72HwnX2MLLVaN-pu9c7FmJbXV23cv9g&usqp=CAU',
70),
( 'Vegetables' ,
 '100 Rs for 1 Kg' ,
'LadyFinger',
'https://www.nutritionfact.in/wp-content/uploads/2023/05/Ladies-Finger.jpg',
100),
( 'Vegetables' ,
 '80 Rs for 1 Kg' ,
'Brinjal',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7KiwyXsuatUij3b0HeQ9SHmEshhkCeXSnQ&usqp=CAU',
80),
( 'Vegetables' ,
 '50 Rs for 1 Kg' ,
'Onion',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlYw2zxaNolhltDbhHmmJiFPckqc0rPzTrw&usqp=CAU',
50),
( 'Vegetables' ,
 '70 Rs for 500 gm' ,
'Spinach',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oLcSs5YVJ-OEE7Piq_6fiiMXyg4CLIkObQ&usqp=CAU',
70),
( 'Vegetables' ,
 '60 Rs for 500 gm' ,
'Beans',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOC5aQWdC0S3_H8nWyGGcSWDXb-aOhO09Og&usqp=CAU',
60),
( 'Vegetables' ,
 '40 Rs for 500 gm' ,
'Cauliflower',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJIMJGJA3ZQ2oveGs0z1hquI_Q87x4anyWQ&usqp=CAU',
40);

insert into product (category, description, name, image_url, price )
values
( 'Cleaners' ,
 '20 Rs for 250 ml' ,
'Vim liquid gel',
'https://th.bing.com/th/id/OIP.gpvKgPVK2jzVleF40MlhewHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.5&pid=1.7',
20),
( 'Cleaners' ,
 '110 Rs for 500 ml' ,
'Lizol liquid',
'https://cdn01.pharmeasy.in/dam/products_otc/S29945/lizol-lavender-disinfectant-floor-cleaner-liquid-bottle-of-500-ml-2-1670493093.jpg ',
110),
( 'Cleaners' ,
 '270 Rs for 1 Kg' ,
'SurfExcel detergent',
'https://www.bigbasket.com/media/uploads/p/l/40192803_1-surf-excel-quick-wash-detergent-powder.jpg',
270),
( 'Cleaners' ,
 '100 Rs for 500 ml' ,
'Harpic liquid',
'https://familyneeds.co.in/cdn/shop/products/1_54789f6c-4710-4f16-b0db-a520ecd01310_600x600.jpg?v=1598646838',
100),
( 'Cleaners' ,
 '70 Rs for 150 ml' ,
'Savlon liquid',
'https://m.media-amazon.com/images/I/61o5c4JhzTL.jpg',
70),
( 'Cleaners' ,
 '100 Rs for 250 ml' ,
'Dettol liquid',
'https://www.netmeds.com/images/product-v1/600x600/410290/dettol_liquid_handwash_original_200_ml_52183_0_1.jpg',
100),
( 'Cleaners' ,
 '60 Rs for 500 gm' ,
'Tide washing powder',
'https://ml0co0iaphua.i.optimole.com/w:1000/h:1000/q:mauto/f:avif/https://gharstuff.com/wp-content/uploads/2018/11/Tide-Plus-Extra-Power-Jasmine-Rose-Detergent-Powder-500g-2.jpg',
60),
( 'Cleaners' ,
 '75 Rs for 200 gm' ,
'Napthalene balls',
'https://www.bigbasket.com/media/uploads/p/l/40173107_5-bb-home-naphthalene-balls.jpg',
75);

insert into product (category, description, name, image_url, price )
values
( 'Fresheners' ,
 '280 Rs for 275 gm' ,
'Ambipur Spray',
'https://www.princeofficesolutions.com/media/catalog/product/cache/5aaeaba771243db0eb99143619c69cf0/p/o/pos547_1.png',
100),
( 'Fresheners' ,
 '280 Rs for 225 ml' ,
'Godrej air Spray',
'https://sindirasupermarket.com/wp-content/uploads/2020/11/aer1-300x300.jpg',
100),
( 'Fresheners' ,
 '70 Rs for 45 ml' ,
'Goodnight refill',
'https://www.laverretail.com/wp-content/uploads/2023/05/GN.jpg',
70),
( 'Fresheners' ,
 '56 Rs for 48 gm' ,
'Odonil air freshner',
'https://5.imimg.com/data5/NE/JP/MY-23387521/odonil-toilet-air-freshener.jpg',
56);


DELIMITER //
CREATE FUNCTION InsertInventoryWithResult(in_category VARCHAR(30), in_name VARCHAR(50), in_product_id INT)
RETURNS VARCHAR(50)
DETERMINISTIC
BEGIN
    DECLARE success_message VARCHAR(50);
    DECLARE fail_message VARCHAR(50);
    DECLARE result VARCHAR(50);

    -- Attempt to insert the values

    INSERT INTO inventory (quantity, category, name, product_id)
    VALUES (50, in_category, in_name, in_product_id);

    -- Check if the insert was successful and set the result
    IF ROW_COUNT() = 1 THEN
        SET success_message = 'Success: Row inserted into inventory.';
        SET result = success_message;
    ELSE
        SET fail_message = 'Error: Row not inserted into inventory.';
        SET result = fail_message;
    END IF;

    RETURN result;
END //
DELIMITER ;

SELECT InsertInventoryWithResult('Snacks', 'Bhujia Sev', 1);
SELECT InsertInventoryWithResult('Snacks', 'Lasaniya gathiya', 2);
SELECT InsertInventoryWithResult('Snacks', 'Tomato Lays', 3);
SELECT InsertInventoryWithResult('Snacks', 'Pringles', 4);
SELECT InsertInventoryWithResult('Snacks', 'Doritos', 5);
SELECT InsertInventoryWithResult('Snacks', 'Punjabi Tadka', 6);
SELECT InsertInventoryWithResult('Snacks', 'Long Masala Banana Chips', 7);
SELECT InsertInventoryWithResult('Snacks', 'Kurkure', 8);

SELECT InsertInventoryWithResult('Cookies', 'Dark Fantasy Choco Fills', 9);
SELECT InsertInventoryWithResult('Cookies', 'Oreo Biscuit', 10);
SELECT InsertInventoryWithResult('Cookies', 'Marigold Biscuit', 11);
SELECT InsertInventoryWithResult('Cookies', 'Cheese Crackers', 12);
SELECT InsertInventoryWithResult('Cookies', 'Milk Bikis', 13);
SELECT InsertInventoryWithResult('Cookies', 'Nutri Choice', 14);
SELECT InsertInventoryWithResult('Cookies', 'Bourbon', 15);
SELECT InsertInventoryWithResult('Cookies', 'Parle G', 16);

SELECT InsertInventoryWithResult('Sweets', 'Ferrero Rocher', 17);
SELECT InsertInventoryWithResult('Sweets', 'Dairy Milk Silk', 18);
SELECT InsertInventoryWithResult('Sweets', 'Kitkat', 19);
SELECT InsertInventoryWithResult('Sweets', 'Munch', 20);
SELECT InsertInventoryWithResult('Sweets', 'Haldiram Rasgulla', 21);
SELECT InsertInventoryWithResult('Sweets', 'Haldiram Gulab Jamun', 22);
SELECT InsertInventoryWithResult('Sweets', 'Haldiram Besan Laddu', 23);
SELECT InsertInventoryWithResult('Sweets', 'Milk Cake', 24);

SELECT InsertInventoryWithResult('Fruits', 'Banana', 25);
SELECT InsertInventoryWithResult('Fruits', 'Grapes', 26);
SELECT InsertInventoryWithResult('Fruits', 'Apples', 27);
SELECT InsertInventoryWithResult('Fruits', 'Oranges', 28);
SELECT InsertInventoryWithResult('Fruits', 'Pineapple', 29);
SELECT InsertInventoryWithResult('Fruits', 'Guava', 30);
SELECT InsertInventoryWithResult('Fruits', 'Mangoes', 31);
SELECT InsertInventoryWithResult('Fruits', 'Strawberries', 32);

SELECT InsertInventoryWithResult('Vegetables', 'Tomato', 33);
SELECT InsertInventoryWithResult('Vegetables', 'Potato', 34);
SELECT InsertInventoryWithResult('Vegetables', 'LadyFinger', 35);
SELECT InsertInventoryWithResult('Vegetables', 'Brinjal', 36);
SELECT InsertInventoryWithResult('Vegetables', 'Onion', 37);
SELECT InsertInventoryWithResult('Vegetables', 'Spinach', 38);
SELECT InsertInventoryWithResult('Vegetables', 'Beans', 39);
SELECT InsertInventoryWithResult('Vegetables', 'Cauliflower', 40);

SELECT InsertInventoryWithResult('Cleaners', 'Vim liquid gel', 41);
SELECT InsertInventoryWithResult('Cleaners', 'Lizol liquid', 42);
SELECT InsertInventoryWithResult('Cleaners', 'SurfExcel detergent', 43);
SELECT InsertInventoryWithResult('Cleaners', 'Harpic liquid', 44);
SELECT InsertInventoryWithResult('Cleaners', 'Savlon liquid', 45);
SELECT InsertInventoryWithResult('Cleaners', 'Dettol liquid', 46);
SELECT InsertInventoryWithResult('Cleaners','Tide washing powder', 47);
SELECT InsertInventoryWithResult('Cleaners', 'Napthalene balls', 48);

SELECT InsertInventoryWithResult('Fresheners', 'Ambipur Spray', 49);
SELECT InsertInventoryWithResult('Fresheners', 'Godrej air Spray', 50);
SELECT InsertInventoryWithResult('Fresheners', 'Goodnight refill', 51);
SELECT InsertInventoryWithResult('Fresheners', 'Odonil air freshner', 52);

DELIMITER //
CREATE PROCEDURE ValidateNumberEmail(
    IN customer_email VARCHAR(30),
    IN customer_phone_number BIGINT
)
BEGIN
    DECLARE email_valid BOOLEAN;
    DECLARE phone_valid BOOLEAN;

    -- Validate email format
    SET email_valid = (SELECT
        CASE
            WHEN customer_email REGEXP '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$' THEN TRUE
            ELSE FALSE
        END
    );

    -- Validate phone number format (assuming 10-digit format)
    SET phone_valid = (SELECT
        CASE
            WHEN LENGTH(CAST(customer_phone_number AS CHAR)) = 10 AND customer_phone_number > 0 THEN TRUE
            ELSE FALSE
        END
    );

    IF email_valid AND phone_valid THEN
        SELECT 'Valid' AS Auth;
    ELSE
        SELECT 'Invalid' AS Auth;
    END IF;
END;
//
DELIMITER ;

DELIMITER //

CREATE PROCEDURE ValidatePaymentInfo(
    IN cardName VARCHAR(30),
    IN cardNumber BIGINT,
    IN cvv INT
)
BEGIN
    DECLARE cardNameCheck INT;
    DECLARE cardNumberCheck INT;
    DECLARE cvvCheck INT;

    -- Check card_name (only letters, no numbers)
    IF cardName REGEXP '^[A-Za-z]+$' THEN
        SET cardNameCheck = 1;
    ELSE
        SET cardNameCheck = 0;
    END IF;

    -- Check card_number (only numbers, no characters)
    IF cardNumber REGEXP '^[0-9]+$' THEN
        SET cardNumberCheck = 1;
    ELSE
        SET cardNumberCheck = 0;
    END IF;

    -- Check cvv (exactly 3 digits)
    IF cvv REGEXP '^[0-9]{3}$' THEN
        SET cvvCheck = 1;
    ELSE
        SET cvvCheck = 0;
    END IF;

    IF cardNameCheck = 1 AND cardNumberCheck = 1 AND cvvCheck = 1 THEN
        SELECT 'Valid' AS Auth;
    ELSE
        SELECT 'Invalid' AS Auth;
    END IF;
END //

DELIMITER ;

DELIMITER //
CREATE TRIGGER update_inventory_after_cart_increase
AFTER UPDATE ON cart_items
FOR EACH ROW
BEGIN
    DECLARE quantity_diff INT;

    -- Calculate the difference in quantity
    SET quantity_diff = NEW.quantity - OLD.quantity;

    -- Update the inventory
    UPDATE inventory
    SET quantity = GREATEST(quantity - quantity_diff, -1)
    WHERE product_id = NEW.product_id;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER update_inventory_on_insert
BEFORE INSERT ON cart_items
FOR EACH ROW
BEGIN
    -- Insert operation: Add the new quantity to the inventory
    UPDATE inventory
    SET quantity = GREATEST(quantity - NEW.quantity, -1)
    WHERE product_id = NEW.product_id;
END;
//

DELIMITER //
CREATE TRIGGER update_inventory_on_delete
AFTER DELETE ON cart_items
FOR EACH ROW
BEGIN
    -- Delete operation: Add the deleted quantity back to the inventory
    UPDATE inventory
    SET quantity = quantity + OLD.quantity
    WHERE product_id = OLD.product_id;
END;
//
DELIMITER ;

INSERT INTO company values(1,'QuickPick');

INSERT INTO employee values(111,'groot','groot','groot',1212121212,'45, Parklane Joy Pune','$2b$10$3fbVVKtB4YI4NTD3WbKcVeo5av6DbHd3ovrS7U3OIwJ0VVZJvbaeS','groot@admin.com',1);

INSERT INTO employee values(112,'beetroot','beetroot','beetroot',1223344556,'48, Amar Heights Nashik','$2b$10$4xfsqHIFFgJ9TaGad/JWL.XDZXKExbDKLQ8c8odwUatdW7vspvYGi','beetgroot@admin.com',1);

INSERT INTO management values(111);
INSERT INTO technical values(112);

INSERT INTO supplier (address,phone_number,first_name,last_name,company_id)
values
("402 Parklane sus gaon Pune",6543218282,"Shreya","Nair",1),
("709 Above Sai Hotel Sangam Vihar Delhi",987654321,"Rakshit","agarwal",1),
("12/13 Khopoli Road Pune",1234567212,"Manoj","Kumar",1),
("123 Churchgate mumbai",1234597311,"John","Doe",1);

INSERT into vendor(supplier_id) values (1),(2),(3),(4);

INSERT INTO distributor(supplier_id) values (1),(2),(3),(4);
