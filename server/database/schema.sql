create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL
);

INSERT INTO user (email, password, firstname, lastname)
VALUES ("user1@mail.com", "motdepasse", "John", "User"),
("user2@mail.com", "mot2passe", "Jane", "Doe");

create table admin (
  id int primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL
);

INSERT INTO admin (email, password, firstname, lastname) 
  VALUES ("amine.ladmine@youflim.com", "jaimelesfilms", "Amine", "Ladmine");

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

INSERT INTO movie (title, duration, synopsis, date, classification, admin_id) VALUES
('Inception', 148, 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', '2010-07-16', 13, 1),
('The Dark Knight', 152, 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', '2008-07-18', 13, 1),
('Interstellar', 169, "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", '2014-11-07', 13, 1),
('Parasite', 132, 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.', '2019-05-30', 16, 1),
('The Godfather', 175, 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', '1972-03-24', 18, 1),
('Pulp Fiction', 154, "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", '1994-10-14', 16, 1),
('The Matrix', 136, 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', '1999-03-31', 16, 1),
('The Shawshank Redemption', 142, 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', '1994-09-22', 13, 1),
('Fight Club', 139, 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.', '1999-10-15', 18, 1),
('The Lion King', 88, 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', '1994-06-24', 8, 1);