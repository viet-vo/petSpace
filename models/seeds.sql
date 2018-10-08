INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('hmm@hmm.hmm', 'hmm', 'Hmm Hmm', '123 Hmm', 'Hmm', 'HM', '12345');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('deeznuts@gmail.com', 'deeznuts', 'Deez Nuts', '42069 Got Em Road', 'Los Angeles', 'CA', '92888');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('wetcat@gmail.com', 'wetcat', 'Wet Cat', '123 Moist Road', 'Orange', 'CA', '91578');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('dtrump@potus.com', 'makeamericagreatagain', 'Donald Trump', '23892 Kite Hill Dr.', 'Garden Grove', 'CA', '92622');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('taybae@gmail.com', 'password1', 'Tay Bae', '49514 Golden Hoops Ln.', 'Irvine', 'CA', '92489');

INSERT INTO providers (email, password, name, streetAddress, city, state, zip, category)
VALUES ('sanclementeshelter@animalshelter.org', 'welovepets', 'San Clemente Animal Shelter', '221 Avenida Fabricante', 'San Clemente', 'CA', '92672', 'Shelter');
INSERT INTO providers (email, password, name, streetAddress, city, state, zip, category)
VALUES ('allens@animalshelter.org', 'allensspecial', "Allen's Building of Various Animals", '123 Example St.', 'Los Angeles', 'CA', '92672', 'Shelter');
INSERT INTO providers (email, password, name, streetAddress, city, state, zip, category)
VALUES ('strangebbqsmell@animalshelter.org', 'password2', 'BBQ(Bosnea Basin Quartile', '321 Street St.', 'Riverside', 'CA', '12345', 'Shelter');
INSERT INTO providers (email, password, name, streetAddress, city, state, zip, category)
VALUES ('largefootsteps@animalshelter.org', 'welovepets', 'Large Footsteps', '800 Brookforest Drive', 'Shorewood', 'IL', '60404', 'Shelter');
INSERT INTO providers (email, password, name, streetAddress, city, state, zip, category)
VALUES ('animalhuggers@animalshelter.org', 'animalhuggers', 'We Hug Animals Only', '846 Daniel St.', 'Irvine', 'CA', '92672', 'Shelter');

INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Spots', 'Cat', 'Calico', 'Female', 4, 'https://www.catster.com/wp-content/uploads/2018/03/Calico-cat-curled-up-asleep.jpg',1);
INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Maymoon', 'Cat', 'Tabby', 'Female', 2, 'https://i.imgur.com/l0YAN0c.jpg',1);
INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Daniel', 'Dog', 'Husky', 'Male', 8, 'https://pbs.twimg.com/profile_images/639599645925076994/7Egv8qXQ.jpg',1);
INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Chris', 'Cat', 'Domestic Short Hair', 'Male', 4, 'https://simonscat.com/wp-content/uploads/2017/10/2593-1-344364__xwTimjZh-768x1024.jpg',1);
INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Taylor', 'Cat', 'Maine Coon', 'Female', 2, 'https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s581n8d6purvfgt.jpeg',1);