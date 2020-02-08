create table category
(
	category_id int auto_increment
		primary key,
	name varchar(100) not null,
	article_counts int not null,
	articles varchar(1000) null
);

