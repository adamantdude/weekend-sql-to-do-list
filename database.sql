DROP TABLE IF EXISTS "toDoList";
CREATE TABLE "toDoList" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(255) NOT NULL,
	"isComplete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "toDoList" 
	("task", "isComplete")
VALUES
	('Set appointment with dentist', FALSE),
	('Find a new broom', FALSE),
	('Adopt a pet alligator', FALSE),
	('Scramble some eggs', FALSE),
	('Fold an omelet', FALSE),
	('Watch the entire Lord of the Rings series', TRUE);