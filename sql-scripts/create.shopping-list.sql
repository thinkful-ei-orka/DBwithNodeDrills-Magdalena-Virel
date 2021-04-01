DROP TYPE IF EXISTS grocery;
CREATE TYPE grocery as ENUM(
    'Main',
    'Snack',
    'Lunch',
    'Breakfast'
);

CREATE TABLE IF NOT EXISTS shopping_list (
    id Integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL,
    price decimal(12,2) NOT NULL,
    category grocery NOT NULL,
    checked BOOLEAN,
    date_added TIMESTAMP DEFAULT now() NOT NULL
);