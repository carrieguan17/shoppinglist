/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

drop database if exists shopping_list;
create database shopping_list;
use shopping_list;
create table items (
  itemName varchar(50),
  quantity int
);

insert into items (itemName, quantity) values("Wine Glasses", 8);
insert into items (itemName, quantity) values("Switch Controler", 4);
insert into items (itemName, quantity) values("Postcard", 4);
