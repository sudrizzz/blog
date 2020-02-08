create table article
(
	article_id int auto_increment
		primary key,
	title varchar(500) not null,
	url varchar(1000) not null,
	visit_num int not null,
	content text null,
	like_num int null,
	img_url varchar(1000) null,
	categories varchar(100) null,
	create_time datetime not null,
	last_edit_time datetime not null
);

