create table user
(
	user_id int auto_increment
		primary key,
	user_name varchar(100) not null,
	password varchar(100) not null,
	user_type int default 0 not null,
	create_time datetime not null,
	update_time datetime null,
	is_deleted int default 0 not null
);

