CREATE TABLE deck (
    id SERIAL PRIMARY KEY ,
    domain_percentage DECIMAL(5, 2) CHECK (domain_percentage >= 0 AND domain_percentage <= 100),
    topic VARCHAR(300) NOT NULL
);

CREATE TABLE flashcard (
    id SERIAL PRIMARY KEY ,
    question VARCHAR(1000) NOT NULL,
    answer VARCHAR(1000) NOT NULL,
    domain INT NOT NULL,
    deck_id INT REFERENCES
    deck(id),
    CONSTRAINT deck_id
    FOREIGN KEY (deck_id) REFERENCES deck(id) ON DELETE CASCADE  
);

INSERT INTO deck (domain_percentage, topic)
VALUES (0, 'ultis');

INSERT INTO flashcard (question, answer, domain, deck_id)
VALUES ('Garen','Justicia demaciana', 1, 1);
INSERT INTO flashcard (question, answer, domain, deck_id)
VALUES ('Garen','Justicia demaciana', 1, 2);


SELECT * FROM flashcard WHERE deck_id = 2;
SELECT * FROM flashcard WHERE deck_id = 2;