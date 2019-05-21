# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below


What is SQL?
 Structured Query Language
 - DSL- purpose to access the Database

 What is SQl For?

- A way to manage our DataBase
- Edit our Data
- Store/persist information

Operations in SQl
- (CRUD)
- Create Data
- Read Data
- Update Data
- Delete Data


## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
  SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
  SELECT name FROM artists WHERE name = "Black Sabbath";

```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
  CREATE TABLE fans (
    id INTEGER PRIMARY KEY,
    name TEXT
  );
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
  ALTER TABLE fans ADD COLUMN artist_id INTEGER
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql
  INSERT INTO fans (id, name, artist_id) VALUES (4, "SHU", 169)
```


6. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
  SELECT * FROM fans WHERE artist_id IS NOT 169
```

7. Write the SQL to display an artists name next to their album title

```sql
SELECT artists.name, albums.title FROM artists INNER JOIN albums ON albums.artist_id = artists.id
```



## BONUS (very hard)

8. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
