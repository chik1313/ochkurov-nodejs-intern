
create TABLE person(
          id SERIAL PRIMARY KEY,
          name VARCHAR(255),
          surname VARCHAR(255)
);

create TABLE contact(
         id SERIAL PRIMARY KEY,
         email VARCHAR(255),
         phone VARCHAR(255),
         user_id INTEGER,
         FOREIGN KEY (user_id) REFERENCES person (id)
);
