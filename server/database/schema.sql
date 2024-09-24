create table user (
    id int unsigned primary key auto_increment not null,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL
);

INSERT INTO
    user (
        email,
        password,
        firstname,
        lastname
    )
VALUES (
        "user@mail.com",
        "$argon2id$v=19$m=19456,t=2,p=1$SkHM/t19uSNr7Gh69SLEdw$ZEPjVV3Uq6XFj+z+2DE5w0ejIwNpZqhwlci9HRAIccY",
        "John",
        "User"
    );

create table admin (
    id int primary key auto_increment not null,
    email varchar(255) not null unique,
    password varchar(255) not null,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL
);

INSERT INTO
    admin (
        email,
        password,
        firstname,
        lastname
    )
VALUES (
        "amine.ladmine@youflim.com",
        "jaimelesfilms",
        "Amine",
        "Ladmine"
    );

create table movie (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    synopsis TEXT NOT NULL,
    date DATE NOT NULL,
    classification INT NOT NULL,
    picture VARCHAR(255),
    URL VARCHAR(100) NOT NULL DEFAULT '',
    admin_id INT NOT NULL,
    Foreign Key (admin_id) REFERENCES admin (id)
);

INSERT INTO
    movie (
        title,
        duration,
        synopsis,
        date,
        classification,
        picture,
        URL,
        admin_id
    )
VALUES (
        'The Avengers',
        143,
        'Earth’s mightiest heroes must come together to stop the powerful Loki.',
        '2012-04-25',
        12,
        'https://m.media-amazon.com/images/I/81Q3-wGudPL._AC_UF1000,1000_QL80_.jpg',
        'https://www.youtube.com/embed/eOrNdBpGMv8',
        1
    ),
    (
        'Jurassic Park',
        127,
        'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
        '1993-06-11',
        12,
        'https://www.ecranlarge.com/content/uploads/2020/08/2e2dkgptwoyiaszgnaer9zpp49n-652.jpg',
        'https://www.youtube.com/embed/QWBKEmWWL38',
        1
    ),
    (
        'Star Wars',
        121,
        'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, and two droids to save the galaxy from the Empire’s planet-destroying battle station.',
        '1977-05-25',
        10,
        'https://static.posters.cz/image/1300/affiches-et-posters/star-wars-i153628.jpg',
        'https://www.youtube.com/embed/vZ734NWnAHA',
        1
    ),
    (
        'The Lord of the Rings: The Fellowship of the Ring',
        178,
        'A meek Hobbit sets out on a journey to destroy a powerful ring.',
        '2001-12-19',
        12,
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/the-lord-of-the-rings-franchise-poster.jpg',
        'https://www.youtube.com/embed/V75dMMIW2B4',
        1
    ),
    (
        'Avatar',
        162,
        'A paraplegic Marine is dispatched to the moon Pandora on a unique mission.',
        '2009-12-18',
        12,
        'https://i.ebayimg.com/images/g/IrMAAOSwe89ir7jD/s-l1200.jpg',
        'https://www.youtube.com/embed/5PSNL1qE6VY',
        1
    ),
    (
        'Gladiator',
        155,
        'A former Roman General sets out to exact vengeance against the corrupt emperor.',
        '2000-05-01',
        16,
        'https://www.ecranlarge.com/content/uploads/2020/07/5gjou3t2qrznujqjcg7fqdmi76t-349.jpg',
        'https://www.youtube.com/embed/owK1qxDselE',
        1
    ),
    (
        'Forrest Gump',
        142,
        'The presidencies of Kennedy and Johnson, the Vietnam War, and other events unfold through the perspective of an Alabama man.',
        '1994-07-06',
        12,
        'https://m.media-amazon.com/images/S/pv-target-images/f9ddd832d1b566f5b8dd29a4dbc76b7531c420c8c8d9fdfe94eca128bda8e2b1.jpg',
        'https://www.youtube.com/embed/bLvqoHBptjg',
        1
    ),
    (
        'The Silence of the Lambs',
        118,
        'A young FBI cadet must confide in an incarcerated and manipulative killer.',
        '1991-02-14',
        16,
        'https://m.media-amazon.com/images/M/MV5BZTk5NTYzMGEtMDE2OS00ODYxLWJiNjQtNGMyMmM2MTE0M2QxXkEyXkFqcGc@._V1_.jpg',
        'https://www.youtube.com/embed/W6Mm8Sbe__o',
        1
    ),
    (
        'Titanic',
        195,
        'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the Titanic.',
        '1997-12-19',
        12,
        'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png',
        'https://www.youtube.com/embed/kVrqfYjkTdQ',
        1
    ),
    (
        'The Sixth Sense',
        107,
        'A boy who communicates with spirits seeks the help of a disheartened child psychologist.',
        '1999-08-06',
        12,
        'https://upload.wikimedia.org/wikipedia/en/a/a4/The_Sixth_Sense_poster.png',
        'https://www.youtube.com/embed/3-ZP95NF_Wk?si=8nDkBDnvYspB3W_i',
        1
    ),
    (
        'Braveheart',
        178,
        'Scottish warrior William Wallace leads his countrymen in a rebellion.',
        '1995-05-24',
        16,
        'https://m.media-amazon.com/images/S/pv-target-images/d81d2b8a9916c706534940ade774e5f2a84ab4d38c1dcc6d275c717986fba698.png',
        'https://www.youtube.com/embed/1cnoM8EiGGU',
        1
    ),
    (
        'Saving Private Ryan',
        169,
        'Following the Normandy landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper.',
        '1998-07-24',
        16,
        'https://musicart.xboxlive.com/7/8cb61100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
        'https://www.youtube.com/embed/zwhP5b4tD6g',
        1
    ),
    (
        'Schindler’s List',
        195,
        'In German-occupied Poland, industrialist Oskar Schindler becomes concerned for his Jewish workforce.',
        '1993-11-30',
        12,
        'https://m.media-amazon.com/images/S/pv-target-images/eecc9d211cc4b92b03bed53a8af1556316cf19328dbe9606ce98640ba6c081cd.jpg',
        'https://www.youtube.com/embed/gG22XNhtnoY',
        1
    ),
    (
        'Harry Potter and the Philosopher\'s Stone',
        152,
        'An orphaned boy enrolls in a school of wizardry.',
        '2001-11-16',
        10,
        'https://cchsplume.com/wp-content/uploads/2023/11/Harry_Potter_and_the_Sorcerer27s_Stone.webp',
        'https://www.youtube.com/embed/VyHV0BRtdxo',
        1
    ),
    (
        'The Social Network',
        120,
        'The story of the founders of the social-networking website, Facebook.',
        '2010-10-01',
        12,
        'https://www.france.tv/image/vignette_3x4/1024/1365/h/g/i/0fce55b8-phpakuigh.jpg',
        'https://www.youtube.com/embed/lB95KLmpLR4',
        1
    ),
    (
        'The Wolf of Wall Street',
        180,
        'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker to his fall.',
        '2013-12-25',
        18,
        'https://m.media-amazon.com/images/S/pv-target-images/d49d4b692d69b2b5d3033d370b7b8be16f243c692d0e5057c71b10a3d7a51860.jpg',
        'https://www.youtube.com/embed/iszwuX1AK6A',
        1
    ),
    (
        '12 Years a Slave',
        134,
        'In the antebellum United States, Solomon Northup, a free black man, is abducted and sold into slavery.',
        '2013-10-18',
        18,
        'https://m.media-amazon.com/images/S/pv-target-images/e54a0ce803bfc0d7c3a0a6ccad61ababfaebdb9c715e02fe6a2b4fd6653260ce.jpg',
        'https://www.youtube.com/embed/z02Ie8wKKRg',
        1
    ),
    (
        'Inglourious Basterds',
        153,
        'In Nazi-occupied France during World War II, a group of Jewish U.S. soldiers plan to assassinate Nazi leaders.',
        '2009-08-21',
        18,
        'https://musicart.xboxlive.com/7/93c81100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
        'https://www.youtube.com/embed/KnrRy6kSFF0',
        1
    ),
    (
        'The Hunger Games',
        142,
        'Katniss Everdeen volunteers to take her younger sister\'s place in the Hunger Games.',
        '2012-03-23',
        12,
        'https://www.sbrhsbreeze.org/wp-content/uploads/2021/11/hunger-games.jpg',
        'https://www.youtube.com/embed/mfmrPu43DF8',
        1
    ),
    (
        'Deadpool',
        108,
        'A wisecracking mercenary with a morbid sense of humor is subjected to a rogue experiment.',
        '2016-02-12',
        16,
        'https://m.media-amazon.com/images/I/41vk1f9DG8L._AC_UF1000,1000_QL80_.jpg',
        'https://www.youtube.com/embed/ONHBaC-pfsk',
        1
    ),
    (
        'Logan',
        137,
        'In a future where mutants are nearly extinct, Logan must care for an ailing Professor X.',
        '2017-03-03',
        18,
        'https://lumiere-a.akamaihd.net/v1/images/logan_584x800_9a5af33a.jpeg',
        'https://www.youtube.com/embed/Div0iP65aZo',
        1
    ),
    (
        'The Revenant',
        156,
        'A frontiersman on a fur trading expedition in the 1820s fights for survival.',
        '2015-12-25',
        16,
        'https://imgsrc.cineserie.com/2016/08/397800.jpg?ver=1',
        'https://www.youtube.com/embed/LoebZZ8K5N0',
        1
    ),
    (
        'Black Panther',
        134,
        'T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people.',
        '2018-02-16',
        12,
        'https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0,0,540,810',
        'https://www.youtube.com/embed/xjDjIWPwcPU',
        1
    ),
    (
        'Coco',
        105,
        'Aspiring musician Miguel enters the Land of the Dead to find his great-great-grandfather.',
        '2017-11-22',
        10,
        'https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0,0,540,810',
        'https://www.youtube.com/embed/Rvr68u6k5sI',
        1
    ),
    (
        'Interstellar',
        169,
        'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        '2014-11-07',
        12,
        'https://static.posters.cz/image/750/affiches-et-posters/interstellar-one-sheet-i23157.jpg',
        'https://www.youtube.com/embed/zSWdZVtXT7E',
        1
    ),
    (
        'Inception',
        148,
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
        '2010-07-16',
        12,
        'https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUFTdchEHvt18l2PGcB3XY8vDva08SA2pwZxgB/jpg',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        1
    ),
    (
        'Bullet Train',
        126,
        'Five assassins aboard a fast-moving train find out their missions have something in common.',
        '2022-08-05',
        16,
        'https://www.sonypictures.fr/sites/france2/files/2022-12/BT-affiche-450x600.jpg',
        'https://www.youtube.com/embed/0IOsk2Vlc4o?si=E48CK_JTbuxZrg-Q',
        1
    ),
    (
        'Black Hawk Down',
        144,
        'A small group of U.S. soldiers is sent to capture a Somali warlord, leading to a fierce battle against his militia.',
        '2001-01-18',
        16,
        'https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg',
        'https://www.youtube.com/embed/2GfBkC3qs78?si=Btnj6OdKQrn9du9r',
        1
    ),
    (
        'The Intern',
        121,
        'A 70-year-old widower becomes an intern at an online fashion retailer, learning valuable life lessons along the way.',
        '2015-09-25',
        10,
        'https://m.media-amazon.com/images/S/pv-target-images/6c8e7e1890f497f2d3064afb768d35f721c09ecc6d0c4ad2cc29538dc346a7df.jpg',
        'https://www.youtube.com/embed/ZU3Xban0Y6A?si=56NGdnhW1EaRMk6t',
        1
    ),
    (
        'Crazy, Stupid, Love',
        118,
        'A man learns to navigate the dating scene with the help of a bachelor after his marriage falls apart.',
        '2011-07-29',
        12,
        'https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_.jpg',
        'https://www.youtube.com/embed/hCPYgel05dE?si=2n70ffHfubsRui3o',
        1
    ),
    (
        'The Matrix',
        136,
        'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
        '1999-03-31',
        12,
        'https://m.media-amazon.com/images/I/613ypTLZHsL._AC_UF1000,1000_QL80_.jpg',
        'https://www.youtube.com/embed/vKQi3bBA1y8?si=dvlk4hYVFgoeoC6N',
        1
    ),
    (
        'The Dark Knight',
        152,
        'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
        '2008-07-18',
        12,
        'https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg',
        'https://www.youtube.com/embed/EXeTwQWrcwY',
        1
    ),
    (
        'Mad Max: Fury Road',
        120,
        'In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrant and his army.',
        '2015-05-15',
        16,
        'https://play-lh.googleusercontent.com/6VM8voRWtSgbTWPFt42AHjX_qJ6iT6Z4N8rn2iVVFmnQT1WroyMuok1kfFm2mWwiBto4EPFwd79DNGIoHSw',
        'https://www.youtube.com/embed/hEJnMQG9ev8',
        1
    ),
    (
        'Get Out',
        104,
        'A young African American man visits his white girlfriend\'s family estate, uncovering disturbing secrets.',
        '2017-02-24',
        16,
        'https://fr.web.img4.acsta.net/pictures/17/03/16/13/25/487327.jpg',
        'https://www.youtube.com/embed/XzmeT5rEPDg?si=L_AukSRc61p8ZuTG',
        1
    ),
    (
        'Arrival',
        116,
        'A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
        '2016-11-11',
        12,
        'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg',
        'https://www.youtube.com/embed/tFMo3UJ4B4g?si=2Qypi9B8gqaKA_Rq',
        1
    ),
    (
        'Inside Out',
        95,
        'Growing up is not easy, and little Riley is no exception. Because of her father, she has just left her home and the life she has always known to move with her family to San Francisco.',
        '2015-05-17',
        10,
        'https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg',
        'https://www.youtube.com/embed/yRUAzGQ3nSY?si=BZmadeeW8e8Fq3NS',
        1
    ),
    (
        'Moana',
        107,
        'Moana, a strong-willed teenager, sets sail on a daring mission to save her people and fulfill an ancient quest. She teams up with the once-mighty demigod Maui to restore balance to the world.',
        '2016-11-30',
        10,
        'https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg',
        'https://www.youtube.com/embed/LKFuXETZUsI?si=UTaVcYEMIeHg2Xfu',
        1
    );

create table category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(100) NOT NULL
);

INSERT INTO
    category (type)
VALUES ('Action'),
    ('Aventure'),
    ('Drame'),
    ('Science-Fiction'),
    ('Fantastique'),
    ('Horreur'),
    ('Comédie'),
    ('Biographie'),
    ('Historique'),
    ('Animation');

create table movie_category (
    movie_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (movie_id, category_id),
    FOREIGN KEY (movie_id) REFERENCES movie (id),
    FOREIGN KEY (category_id) REFERENCES category (id)
);

ALTER TABLE movie ADD COLUMN isFree BOOLEAN DEFAULT false;

INSERT INTO
    movie_category (movie_id, category_id)
VALUES (1, 1),
    (1, 4),
    (2, 2),
    (2, 4),
    (3, 2),
    (3, 4),
    (4, 2),
    (4, 5),
    (5, 4),
    (5, 2),
    (6, 1),
    (6, 9),
    (7, 3),
    (7, 8),
    (8, 6),
    (8, 3),
    (9, 3),
    (10, 6),
    (11, 1),
    (11, 9),
    (12, 1),
    (12, 9),
    (13, 3),
    (13, 9),
    (14, 5),
    (14, 2),
    (15, 3),
    (15, 8),
    (16, 3),
    (16, 8),
    (17, 3),
    (17, 8),
    (18, 1),
    (18, 9),
    (19, 1),
    (19, 2),
    (20, 1),
    (20, 7),
    (21, 1),
    (21, 4),
    (22, 1),
    (22, 2),
    (23, 1),
    (23, 4),
    (24, 10),
    (24, 3),
    (25, 4),
    (25, 2),
    (26, 1),
    (26, 4),
    (27, 1),
    (27, 2),
    (28, 1),
    (28, 9),
    (29, 7),
    (30, 7),
    (31, 1),
    (31, 4),
    (32, 1),
    (32, 3),
    (33, 2),
    (34, 3),
    (34, 6),
    (35, 4),
    (36, 2),
    (36, 10),
    (37, 10);