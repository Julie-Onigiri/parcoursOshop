BEGIN ;
-- Data for Name: categories; 
INSERT INTO "categories" ("name")
VALUES ('Laptop'),
('Mobile');


-- Data for Name: products;
INSERT INTO "products" ("ref", "title", "description", "image", "price", "category_id")
VALUES ('P00001', 'Macbroke', 'Le PC portable de la marque à la poire.', 'https://picsum.photos/seed/1/300/200', 1000, 1),
('P00002', 'iFraude', 'Le smartphone phare de la marque à la poire.', 'https://picsum.photos/seed/2/300/200', 1300, 2),
('P00002', 'Dell Pasunrond', 'Un ordinateur portable pas cher mais pas top.', 'https://picsum.photos/seed/3/300/200', 500, 1);

-- Data for Name: roles;
INSERT INTO "roles" ("name")
VALUES ('customer'),
('admin');

-- Data for Name: users;
INSERT INTO "users" ("name", "email", "password", "role_id")
VALUES ('John Example', 'example@example.com', '$2b$10$nIIIGWlkm3SzwVF81h4qOekR8ABLUqXoiWAVSkB6oNpKroyyky84G', 1), 
('Maurice Admin', 'admin@admin.com', '$2b$10$nIIIGWlkm3SzwVF81h4qOekR8ABLUqXoiWAVSkB6oNpKroyyky84G', 2);
COMMIT;