
-- delete from familyRecipes WHERE recipeName='tomy2';

      -- drop TABLE family_recipes



-- CREATE TABLE [dbo].[users](
-- 	[user_id] [UNIQUEIDENTIFIER] PRIMARY KEY NOT NULL default NEWID(),
-- 	[username] [varchar](30) NOT NULL UNIQUE,
-- 	[password] [varchar](300) NOT NULL,
--   [first_name] [varchar](300) NOT NULL,
--   [last_name] [varchar](300) NOT NULL,
--   [country] [varchar](300) NOT NULL,
--     [email] [varchar](300) NOT NULL,
--     [image_URL] [varchar](300) NOT NULL,
--     [favorite_recipes] [varchar](300),
--     [watched_recipes] [varchar](300)
-- )

-- UPDATE recipes
-- SET image= 'https://i.ibb.co/7J8jgpB/petis.jpg'
-- WHERE title='Potato stuffed meat(Petis)';

--   DELETE FROM recipes WHERE title='test3';

-- ALTER TABLE recipes
-- ADD [type] [varchar](300), [recipe_owner] [varchar](300), [in_event] [varchar](300);


-- CREATE TABLE [dbo].[recipes](
-- 	[recipe_id] [UNIQUEIDENTIFIER] NOT NULL default NEWID(),
-- 	[user_id] [UNIQUEIDENTIFIER] NOT NULL,
--    [type] [varchar](300) NOT NULL,
-- 	[recipe_name] [varchar](300) NOT NULL,
--    [image_URL] [varchar](300) NOT NULL,
-- 	[preparation_time] [integer] NOT NULL,
-- 	[likes] [integer] NOT NULL,
-- 	[vegan] [BIT] NOT NULL,
--   [vegetarian] [BIT] NOT NULL,
-- 	[glutten_free] [BIT] NOT NULL,
--   [ingredients] [varchar](max) NOT NULL,
--   [instructions] [varchar](max) NOT NULL,
-- 	[dishes_number] [integer] NOT NULL,
--   [recipe_owner] [varchar](300) NOT NULL,
--   [in_event] [varchar](300) NOT NULL,
-- 	PRIMARY KEY (recipe_id),
-- 	FOREIGN KEY (user_id) REFERENCES users(user_id)
-- )

--   EXEC sp_rename 'recipes.instructions', 'analyzedInstructions', 'COLUMN';



-- UPDATE recipes
-- SET first_name = 'Almog', last_name = 'Sarafian', country='Israel', email='almogsa@post.bgu.ac.il'
-- WHERE username='almogsa';

-- INSERT INTO dbo.recipes VALUES (default, '0c1c2487-f42d-49f3-b61d-bc9444e7a93b','test','test', 0, 0, 0, 0, 'test', 'test', 0);


-- CREATE TABLE [dbo].[family_recipes](
-- 	[recipe_id] [UNIQUEIDENTIFIER] NOT NULL default NEWID(),
-- 	[user_id] [UNIQUEIDENTIFIER] NOT NULL,
-- 	[recipe_name] [varchar](300) NOT NULL,
--   [image_URL] [varchar](300) NOT NULL,
--    [recipe_owner] [varchar](300) NOT NULL,
--    [in_event] [varchar](300) NOT NULL,
--    [ingredients] [varchar](max) NOT NULL,
--    [instructions] [varchar](max) NOT NULL,
-- 	PRIMARY KEY (recipe_id),
-- 	FOREIGN KEY (user_id) REFERENCES users(user_id)
-- )


--  [image_URL] [varchar](300) NOT NULL,
-- 	[preparation_time] [integer] NOT NULL,
-- 	[likes] [integer] NOT NULL,
-- 	[vegan] [BIT] NOT NULL,
-- 	[glutten_free] [BIT] NOT NULL,
--     [dishes_number] [integer] NOT NULL,.


-- CREATE TABLE [dbo].[recipes_ingredients](
-- [user_id] [UNIQUEIDENTIFIER] NOT NULL,
-- [recipe_name] [varchar](300) NOT NULL,
-- [ingredients_name] [varchar](300) NOT NULL,
-- [amount] [integer] NOT NULL,
-- FOREIGN KEY (user_id) REFERENCES users(user_id)
-- )


-- CREATE TABLE [dbo].[favorite_recipes](
-- 	[recipe_id] [UNIQUEIDENTIFIER] NOT NULL,
-- 	[user_id] [UNIQUEIDENTIFIER] NOT NULL,
-- 	PRIMARY KEY (recipe_id),
-- 	FOREIGN KEY (user_id) REFERENCES users(user_id)
-- )

-- CREATE TABLE [dbo].[recipes_watched](
-- 	[recipe_id] [integer] NOT NULL,
-- 	[user_id] [UNIQUEIDENTIFIER] NOT NULL,
--     [watched_on] [DATE] NOT NULL,
-- 	PRIMARY KEY (recipe_id),
-- 	FOREIGN KEY (user_id) REFERENCES users(user_id)
-- )



