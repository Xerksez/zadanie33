CREATE TABLE sample_table (
                              id SERIAL PRIMARY KEY,
                              text_field VARCHAR(255),
                              number_field INT
);

INSERT INTO sample_table (text_field, number_field)
VALUES ('Sample Text', 42);
