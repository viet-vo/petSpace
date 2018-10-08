-- borrowers
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('bob@gmail.com', 'cats', 'Bob McDonald', '23892 Kite Hill Dr.', 'Laguna Niguel', 'CA', '92677');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('yuliana@gmail.com', 'dog', 'Yuliana Castellanos', '325 West Adams st.', 'Los Angeles', 'CA', '90007');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('jewels@gmail.com', 'dog', 'Julie Mendoza', '616 St Paul Ave.', 'Los Angeles', 'CA', '90017');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('doggy@gmail.com', 'dog', 'Jewels Jewel', '589 St Paul Ave.', 'Los Angeles', 'CA', '90017');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('catluvtaylor@gmail.com', 'dog', 'Chris Taylor  ', '589 St Paul Ave.', 'Los Angeles', 'CA', '90017');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('bella@gmail.com', 'dog', 'Issa Belly  ', ' 14232 Dyer St.', 'Sylmar', 'CA', '91342');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('mia@gmail.com', 'dog', 'Mia Bella  ', ' 560 Minihaha St.', 'Mission hills', 'CA', '91345');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('bambam@gmail.com', 'dog', 'Sam Bam  ', ' 4060 Mission  Drive.', 'Mission hills', 'CA', '91345');
INSERT INTO borrowers (email, password, name, streetAddress, city, state, zip)
VALUES ('lidia@gmail.com', 'dog', 'Lidia Smith  ', ' 550 N Figueroa St', 'Los Angeles', 'CA', '90012');

-- providers
INSERT INTO providers (email, password, name, streetAddress, city, state, zip, category)
VALUES ('westlashelter@shelter.org', 'welovepets', 'West Los Angeles Animal Shelter', '11361 Pico Blvd', 'Los Angeles', 'CA', '90064', 'Shelter');
INSERT INTO providers (email, password, name, streetAddress, city, state, zip, category)
VALUES ('southla@shelter.org', 'welovepets', 'South LA Animal Shelter', '1850 W 60th St.', 'Los Angeles', 'CA', '90047', 'Shelter');
INSERT INTO providers (email, password, name, streetAddress, city, state, zip, category)
VALUES ('northcentral@animalshelter.org', 'welovepets', 'North Central Animal Shelter', '3201 Lacy St', 'Los Angeles', 'CA', '90031', 'Shelter');
INSERT INTO providers (email, password, name, streetAddress, city, state, zip, category)
VALUES ('westla@animalshelter.org', 'welovepets', 'West Los Angeles Animal Shelter', '11361 Pico Blvd', 'Los Angeles', 'CA', '90064', 'Shelter');
INSERT INTO providers (email, password, name, streetAddress, city, state, zip, category)
VALUES ('eastvalley@animalshelter.org', 'welovepets', 'City East Valley Animal Shelter', '14409 Vanowen St', 'Van Nuys', 'CA', '91405', 'Shelter');
INSERT INTO providers (email, password, name, streetAddress, city, state, zip, category)
VALUES ('harboranimal@animalshelter.org', 'welovepets', 'Harbor Animal Care Center', '957 N Gaffey St', 'San Pedro', 'CA', '90731', 'Shelter');

-- Pets

INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Chiqi', 'Cat', 'tabby', 'Female', 1, 'https://nkla.org/adopt-a-pet/center-pets/chiqui/13637162', 15);

INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Milo', 'Cat', 'Calico', 'Male', 2, 'https://nkla.org/adopt-a-pet/center-pets/milo/13637163', 16);

INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Comet', 'Cat', 'Calico', 'Male', 1, 'https://nkla.org/adopt-a-pet/center-pets/comet/13636838', 17);

INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Lala Land', 'Dog', 'Pitbull', 'Female', 2, 'https://nkla.org/adopt-a-pet/center-pets/lala-land/13559356', 18);

INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Lala Land', 'Dog', 'Pitbull', 'Female', 2, 'https://nkla.org/adopt-a-pet/center-pets/lala-land/13559356', 19);

INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Benjamin Button', 'Dog', 'Pitbull', 'Male', 3,'https://nkla.org/adopt-a-pet/center-pets/benjamin-button/13559353', 20);

INSERT INTO pets (name, category, breed, gender, temperament, photoURL, provider_id)
VALUES ('Claire', 'Dog', 'Chihuahua', 'Female', 2, 'https://nkla.org/adopt-a-pet/center-pets/claire/13341562', 21);


