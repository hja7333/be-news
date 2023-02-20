You will need to create two .env files for your project: .env.test and .env.development. Into each, add PGDATABASE=<database_name_here>, with the correct database name for that environment (see /db/setup.sql for the database names). Double check that these .env files are .gitignored.

Ensure that you have cloned down the repo first.

You will need to make your own public repo so that you can share this project as part of your portfolio by doing the following:

Create a new public GitHub repository. Do not initialise the project with a readme, .gitignore or license.
From your cloned local version of this project you'll want to push your code to your new repository using the following commands:

git remote set-url origin YOUR_NEW_REPO_URL_HERE
git branch -M main
git push -u origin main

We'll have two databases in this project. One for real looking dev data and another for simpler test data.

You will need to create two .env files for your project: .env.test and .env.development. Into each, add PGDATABASE=<database_name_here>, with the correct database name for that environment (see /db/setup.sql for the database names). Double check that these .env files are .gitignored.

You'll need to run npm install at this point - Please do not install specific packages as you can do this down the line when you need them.

You have also been provided with a db folder with some data, a setup.sql file and a seeds folder.
