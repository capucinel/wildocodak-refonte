DROP DATABASE IF EXISTS wildocodak;
CREATE DATABASE wildocodak;
USE wildocodak;
CREATE TABLE images (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(50),
    legend VARCHAR(50),
    url VARCHAR(200)
);

INSERT INTO images (category, url)
VALUES ("monument","/photos/11.jpg" ),
("monument","/photos/bastille.jpg" ),
("monument","/photos/louvre.jpg" ),
("monument","/photos/monument1.jpg" ),
("monument","/photos/notred.jpg" ),
("monument","/photos/toure.jpg" ),
("monument","/photos/notredame.jpg" ),
("bridge", "photos/pont5.jpg"),
("bridge", "photos/couple.jpg"),
("bridge", "photos/couple2.jpg"),
("statue", "photos/statue1.jpg"),
("statue", "photos/statue2.jpg"),
("statue", "photos/statue5.jpg"),
("statue", "photos/statue7.jpg"),
("statue", "photos/statue8.jpg"),
("statue", "photos/statue9.jpg"),
("statue", "photos/statue10.jpg"),
("statue", "photos/statuepyramide.jpg");







