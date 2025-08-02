# Database Notes

One church can have multiple confession times. One confession time can have multiple churches. So we are dealing with a MANY-TO-MANY relationship here.

Relational databases are good at modeling such relationships so we will be using an SQL db. Specifically an SQLite db to keep it simple.

We will model church confession times with three tables:

1. Church — stores church info.
2. ConfessionTime — stores distinct time ranges (optionally including day of the week).
3. ChurchConfession — a linking (junction) table that connects churches to confession times.

Note that SQLite is more limited form of SQL. For example it doesn't have a TIME type, so we have to use TEXT instead.

To create the church table:

```sql
CREATE TABLE Church (
    Id INTEGER PRIMARY KEY,
    Name TEXT,
    Address TEXT,
    Website TEXT,
    ConfessionTimeStart TEXT,  -- Stored as ISO 8601 time (e.g., '15:30')
    ConfessionTimeEnd TEXT,     -- Same as above
    Confession2TimeStart TEXT,
    Confession2TimeEnd TEXT
);
```

To insert Westminster Cathedral into the church table:

```sql
INSERT INTO Church (Name, Address, Website, ConfessionTimeStart, ConfessionTimeEnd, Confession2TimeStart, Confession2TimeEnd)
VALUES (
    'Westminster Cathedral',
    'Victoria St, London SW1P 1LT',
    'https://westminstercathedral.org.uk/',
    '11:30',
    '12:30',
    '16:30',
    '17:30'
);
```

To check the column headings of the church table:

```sql
PRAGMA table_info(Church);
```

To delete the church table:

```sql
DROP TABLE IF EXISTS Church;
```

To delete all the data (but keep the structure) in the church table:

```sql
DELETE FROM Church;
```
