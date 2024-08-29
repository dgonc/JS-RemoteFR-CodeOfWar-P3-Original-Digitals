create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL
);

create table admin (
  id int primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL
);


create table movie (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  synopsis TEXT NOT NULL,
  date DATE NOT NULL,
  classification INT NOT NULL,
  picture VARCHAR(255),
  admin_id INT NOT NULL,
  Foreign Key (admin_id) REFERENCES admin(id)
);

