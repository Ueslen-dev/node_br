-- delete table
DROP TABLE IF EXISTS TB_HEROS

-- create  table
CREATE TABLE TB_HEROS (
    ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    POWER TEXT NOT NULL
)

-- insert data
INSERT INTO TB_HEROS (NAME, POWER)
VALUES 
    ('Flash', 'Velocidade'),
    ('Aquaman', 'Marinho'),
    ('Batman', 'Dinheiro')

-- read data
SELECT * FROM TB_HEROS WHERE NAME= 'Flash'

-- update data
UPDATE TB_HEROS
SET NAME = 'Goku', POWER = 'Sayjin'
WHERE ID = 1

-- delete data
DELETE FROM TB_HEROS WHERE id = 2
