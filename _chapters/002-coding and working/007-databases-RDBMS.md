---
title: RDBMS
slug: RDBMS
abstract: RDBMS
---

## topics to cover 


* partitions
* read and write intensive
* replication strategies




How to choose DB for your project based on query pattern?


![image-title-here](assets/gitbook/images/decision_based_on_query_pattern.png){:class="img-responsive"}


![image-title-here](assets/gitbook/images/selection_criterial_png.png){:class="img-responsive"}

![image-title-here](assets/gitbook/images/rdbms_keys2.png){:class="img-responsive"}

# sql joins

![image-title-here](assets/gitbook/images/SQL-Joins.png){:class="img-responsive"}

## Temp Table (Temporary Table)

*   Temp tables are created in the runtime and these tables are _**physically**_ created in the _**tempdb**_ database.
*   Temp tables are similar to normal tables and also have constraints, keys, indexes, etc. We can perform all operations in the temp table like a normal table.
*   The name of the temp table can have a maximum of _**116 characters**_.
*   The structure of temp table can be _**altered after creating**_ it.
*   There are below types of temp tables 
    *   Local Temp Table
    *   Global Temp Table

### Local Temp Table

*   Local temp tables are only available to the _**current session**_ that created them. The local temp tables are automatically deleted when the session is closed.
    *   **Example:** Let's consider we are creating the temp table using query window. The temp table will only be available till query window is opened. If you close the current query window, then the temp table will be deleted. We can't access that temp table with a new query window, it will throw the error.    
*   If the session that we are working on has subsequent nested sessions then, the temp tables will be visible in the nested sessions.
*   The local temp table name is started with a _**single hash ("#")**_.

```sql 
create table #Student
(
    Id int,
    Name nvarchar(50),
    Address nvarchar(150)
)
go
insert into #Student values ( 1, 'Test','Tamil Nadu');
go
select * from #Student;
```

**When to use Local Temp Table?**

*   If the size of the temporary data is huge (more than 100 rows).
*   When the user or connection which creates them alone can use it.
*   If you need to create indexes or apply read lock, then go to temp table.
*   You cannot use temp tables in User Defined Functions (UDF).

### Global Temp Table

*   Global temporary tables are temporary tables that are available for _**all sessions and all users**_. These can be created by any SQL Server connection user and these tables are automatically deleted when all the SQL Server connections are closed. 
*   The global temp table name is started with _**double hash ("##")**_.

```sql 
create table ##Student
(
    Id int,
    Name nvarchar(50),
    Address nvarchar(150)
)
go
insert into ##Student values ( 1, 'Test','Tamil Nadu');
go
select * from ##Student;
```

**When to use Global Temp Table?**

*   The global temp table has the same advantages over the local temp table with the feature of multiple users or sessions or connections should access to the same table.

## Temp Variable

*   Temp variable is similar to temp table to use holding the data temporarily. 
*   Table variable is a _**special kind of data type**_ and is used to _**store the result set**_. 
*   The scope of temp variable is _**limited to the current batch**_ and current Stored Procedure. It will delete once comes out the batch (Ex. Stored Procedure).
*   We can create a primary key, identity in the temp variable.
*   We cannot create non-clustered index. It can only have indexes that are automatically created with PRIMARY KEY and UNIQUE constraints as part of the creation.
*   Temp Variable is also created in the tempdb database but not the memory.
*   The Temp variable name is started with _**"@"**_.
*   Temp Variables are created using a _**"DECLARE"**_ statement.
*   We can use "insert into" statement for temp variable to store the values (Refer above examples)
*   We cannot use "Select \* into"  statement for temp variable to store the values. First, we have to create a temp variable and insert the values into it.
*   The name of the temp variable can have a _**maximum of 128 characters**_.
*   Table variables can be passed as a parameter to functions and stored procedures.

```sql
Declare @My_var2 TABLE  
(  
   IID int,  
   Name Nvarchar(50),  
   Salary Int ,  
   City_Name Nvarchar(50)  
)  
  
Insert Into @My_var2   
Select * from Employee  
  
Update @My_var2 Set name='Pankaj Kumar Choudhary'   
where IID >2  
  
Delete From @My_var2 Where IID=1  
Select * from @My_var2  
```

**When to use** **Table Variable?**

*   To store the temporary data in user-defined functions (UDF), stored procedures, and query batches.
*   If the volume of data is less, say less than 100 rows. 
*   If you don’t want to alter the table structure after creating it.

## CTE (Common Table Expression)

*   It is used to hold the _**temporary result set**_ or result of complex sub-query.
*   The scope of CTE is _**limited to the current quer**_y.
*   CTE improves readability and ease in the maintenance of complex queries and sub-queries. 
*   CTE is created by using _**"WITH"**_ statement and begin with a _**semicolon (;)**_.
*   There are two types of Common Table Expression 
    *   Non-Recursive CTE  - It does not have any reference to itself in the CTE definition.
    *   Recursive CTE - When a CTE has reference in itself, then it’s called recursive CTE.
  
```sql 
SELECT id,total
FROM orders
WHERE
-- filter for orders with above-average totals (total is the CTE)
total > (
    SELECT
    AVG(total)
    FROM
    orders
)
```

**When to use CTE?**

*   This is used to store the result of a complex subquery for further use.
*   This is also used to create a recursive query.

## cte vs subquery vs temp table

![image-title-here](assets/gitbook/images/cte_subquery.png){:class="img-responsive"}

# SQL indexes

* An index can be created in a table to find data more quickly and efficiently.
* Index is a data structure (most commonly a B- tree) that stores the values for a specific column in a table.
* B- trees are more commonly used because the data that is stored inside the B- tree can be sorted.
* When we are looking for exact value (clustered value) from table then it searches for that record.
* If we are looking for some more values like in between, less than or greater than then it will not be beneficial because when we search any single value then its directly point to row data in a table.
* Indexes with appropriate column work like an array where value is directly searched into a column. For example, if we search for the following record:
```sql
select * from library where Book_Name = 'CsharpCorner_Book490000'
```
* Then we are looking for 'CsharpCorner_Book490000'. This values is in our table and hence our CPU time gets divided by using Index applied on it.


### Physical operator on indexes

Physical operator is an object or routine that performs an operation like Index Delete, Index Insert, Index Scan, Index Seek etc

```sql 
CREATE INDEX idx_lastname
ON Persons (LastName);
```

[For more deatils on indexes and details](https://learn.microsoft.com/en-us/sql/relational-databases/indexes/indexes?view=sql-server-ver16&redirectedfrom=MSDN)


# sql views

A view is a 'virtual table' containing fields from one or more tables.

A view is a logical view on one or more tables. A view on one or more tables i.e, the data from a view is not actually physically stored instead being derived from one or more tables. A view can be used to summarize data which is distributed among several tables

You can think of a view as a virtual table environment that's created from one or more tables so that it's easier to work with data.

A view is a virtual table. Every view has a Query attached to it. (The Query is a SELECT statement that identifies the columns and rows of the table(s) the view uses.)

```sql
CREATE VIEW us_customers AS
SELECT customer_id, first_name
FROM Customers
WHERE Country = 'USA';
```

## Types of View in sql 

**Simple View:** A view based on only a single table, which doesn't contain GROUP BY clause and any functions.

```sql 
CREATE VIEW V_Customer
AS SELECT First_Name, Last_Name, Country
FROM Customer;
```

**Complex View:** A view based on multiple tables, which contain GROUP BY clause and functions.

**Inline View:** A view based on a subquery in FROM Clause, that subquery creates a temporary table and simplifies the complex query.

**Materialized View:** A view that stores the definition as well as data. It creates replicas of data by storing it physically.

```sql 
CREATE MATERIALIZED VIEW user_purchase_summary AS SELECT
  u.id as user_id,
  COUNT(*) as total_purchases,
  SUM(CASE when p.status = 'cancelled' THEN 1 ELSE 0 END) as cancelled_purchases
FROM users u
JOIN purchases p ON p.user_id = u.id;
```

# sql projections

A projection is a value that is returned by a query statement (SELECT, MATCH).

Eg. the following query
```sql
SELECT name as firstName, age * 12 as ageInMonths, out("Friend") from Person where surname = 'Smith'
```
has three projections:
* name as firstName
* age * 12 as ageInMonths
* out("Friend")

# partions

Database partitioning (also called data partitioning) refers to breaking the data in an application’s database into separate pieces, or partitions. These partitions can then be stored, accessed, and managed separately.

## Types of database partitioning

### Vertical partitioning
Vertical partitioning is when the table is split by columns, with different columns stored on different partitions.

In vertical partitioning, we might split the table above up into two partitions, one with the id, username, and city columns, and one with the id and balance columns.

### Horizontal partitioning 
Horizontal partitioning is when the table is split by rows, with different ranges of rows stored on different partitions.

To horizontally partition our example table, we might place the first 500 rows on the first partition and the rest of the rows on the second

## Partition algorithms
* RANGE partitioning.  This type of partitioning assigns rows to partitions based on column values falling within a given range. 

```sql 
CREATE TABLE employees (
    id INT NOT NULL,
    fname VARCHAR(30),
    lname VARCHAR(30),
    hired DATE NOT NULL DEFAULT '1970-01-01',
    separated DATE NOT NULL DEFAULT '9999-12-31',
    job_code INT NOT NULL,
    store_id INT NOT NULL
)
PARTITION BY RANGE (store_id) (
    PARTITION p0 VALUES LESS THAN (6),
    PARTITION p1 VALUES LESS THAN (11),
    PARTITION p2 VALUES LESS THAN (16),
    PARTITION p3 VALUES LESS THAN MAXVALUE
);

```

LIST partitioning.  Similar to partitioning by RANGE, except that the partition is selected based on columns matching one of a set of discrete values. 

```sql 
CREATE TABLE employees (
    id INT NOT NULL,
    fname VARCHAR(30),
    lname VARCHAR(30),
    hired DATE NOT NULL DEFAULT '1970-01-01',
    separated DATE NOT NULL DEFAULT '9999-12-31',
    job_code INT,
    store_id INT
)
PARTITION BY LIST(store_id) (
    PARTITION pNorth VALUES IN (3,5,6,9,17),
    PARTITION pEast VALUES IN (1,2,10,11,19,20),
    PARTITION pWest VALUES IN (4,12,13,14,18),
    PARTITION pCentral VALUES IN (7,8,15,16)
);
```

HASH partitioning.  With this type of partitioning, a partition is selected based on the value returned by a user-defined expression that operates on column values in rows to be inserted into the table. The function may consist of any expression valid in MySQL that yields an integer value. 

```sql 
CREATE TABLE employees (
    id INT NOT NULL,
    fname VARCHAR(30),
    lname VARCHAR(30),
    hired DATE NOT NULL DEFAULT '1970-01-01',
    separated DATE NOT NULL DEFAULT '9999-12-31',
    job_code INT,
    store_id INT
)
PARTITION BY HASH( YEAR(hired) )
PARTITIONS 4;
```

```sql 

CREATE TABLE employees (
    id INT NOT NULL,
    fname VARCHAR(30),
    lname VARCHAR(30),
    hired DATE NOT NULL DEFAULT '1970-01-01',
    separated DATE NOT NULL DEFAULT '9999-12-31',
    job_code INT,
    store_id INT
)
PARTITION BY LINEAR HASH( YEAR(hired) )
PARTITIONS 4;

```

KEY partitioning.  This type of partitioning is similar to partitioning by HASH, except that only one or more columns to be evaluated are supplied, and the MySQL server provides its own hashing function. These columns can contain other than integer values, since the hashing function supplied by MySQL guarantees an integer result regardless of the column data type. 

```
CREATE TABLE k1 (
    id INT NOT NULL,
    name VARCHAR(20),
    UNIQUE KEY (id)
)
PARTITION BY KEY()
PARTITIONS 2;
```



# sharding
Sharding refers to splitting the data in one database and storing them in multiple tables and databases according to some certain standard, so that the performance and availability can be improved. Both methods can effectively avoid the query limitation caused by data exceeding affordable threshold. What’s more, database sharding can also effectively disperse TPS. Table sharding, though cannot ease the database pressure, can provide possibilities to transfer distributed transactions to local transactions, since cross-database upgrades are once involved, distributed transactions can turn pretty tricky sometimes. The use of multiple primary-replica sharding method can effectively avoid the data concentrating on one node and increase the architecture availability.

Splitting data through database sharding and table sharding is an effective method to deal with high TPS and mass amount data system, because it can keep the data amount lower than the threshold and evacuate the traffic. Sharding method can be divided into vertical sharding and horizontal sharding.

### Vertical Sharding

According to business sharding method, it is called vertical sharding, or longitudinal sharding, the core concept of which is to specialize databases for different uses. Before sharding, a database consists of many tables corresponding to different businesses. But after sharding, tables are categorized into different databases according to business, and the pressure is also separated into different databases. The diagram below has presented the solution to assign user tables and order tables to different databases by vertical sharding according to business need.

[![Vertical Sharding](https://shardingsphere.apache.org/document/current/img/sharding/vertical_sharding.png)](https://shardingsphere.apache.org/document/current/img/sharding/vertical_sharding.png)

Vertical sharding requires to adjust the architecture and design from time to time. Generally speaking, it is not soon enough to deal with fast changing needs from Internet business and not able to really solve the single-node problem. it can ease problems brought by the high data amount and concurrency amount, but cannot solve them completely. After vertical sharding, if the data amount in the table still exceeds the single node threshold, it should be further processed by horizontal sharding.

### Horizontal Sharding

Horizontal sharding is also called transverse sharding. Compared with the categorization method according to business logic of vertical sharding, horizontal sharding categorizes data to multiple databases or tables according to some certain rules through certain fields, with each sharding containing only part of the data. For example, according to primary key sharding, even primary keys are put into the 0 database (or table) and odd primary keys are put into the 1 database (or table), which is illustrated as the following diagram.

[![Horizontal Sharding](https://shardingsphere.apache.org/document/current/img/sharding/horizontal_sharding.png)](https://shardingsphere.apache.org/document/current/img/sharding/horizontal_sharding.png)

Theoretically, horizontal sharding has overcome the limitation of data processing volume in single machine and can be extended relatively freely, so it can be taken as a standard solution to database sharding and table sharding.


# Storage engines

Storage engines are MySQL components that handle the SQL operations for different table types. InnoDB is the default and most general-purpose storage engine, and Oracle recommends using it for tables except for specialized use cases. (The CREATE TABLE statement in MySQL 8.0 creates InnoDB tables by default.)

* InnoDB: The default storage engine in MySQL 8.0. InnoDB is a transaction-safe (ACID compliant) storage engine for MySQL that has commit, rollback, and crash-recovery capabilities to protect user data. InnoDB row-level locking (without escalation to coarser granularity locks) and Oracle-style consistent nonlocking reads increase multi-user concurrency and performance. InnoDB stores user data in clustered indexes to reduce I/O for common queries based on primary keys. To maintain data integrity, InnoDB also supports FOREIGN KEY referential-integrity constraints. For more information about InnoDB, see Chapter 15, The InnoDB Storage Engine.

* MyISAM: These tables have a small footprint. Table-level locking limits the performance in read/write workloads, so it is often used in read-only or read-mostly workloads in Web and data warehousing configurations.

* Memory: Stores all data in RAM, for fast access in environments that require quick lookups of non-critical data. This engine was formerly known as the HEAP engine. Its use cases are decreasing; InnoDB with its buffer pool memory area provides a general-purpose and durable way to keep most or all data in memory, and NDBCLUSTER provides fast key-value lookups for huge distributed data sets.

* CSV: Its tables are really text files with comma-separated values. CSV tables let you import or dump data in CSV format, to exchange data with scripts and applications that read and write that same format. Because CSV tables are not indexed, you typically keep the data in InnoDB tables during normal operation, and only use CSV tables during the import or export stage.

* Archive: These compact, unindexed tables are intended for storing and retrieving large amounts of seldom-referenced historical, archived, or security audit information.

* Blackhole: The Blackhole storage engine accepts but does not store data, similar to the Unix /dev/null device. Queries always return an empty set. These tables can be used in replication configurations where DML statements are sent to replica servers, but the source server does not keep its own copy of the data.

* NDB (also known as NDBCLUSTER): This clustered database engine is particularly suited for applications that require the highest possible degree of uptime and availability.

* Merge: Enables a MySQL DBA or developer to logically group a series of identical MyISAM tables and reference them as one object. Good for VLDB environments such as data warehousing.

* Federated: Offers the ability to link separate MySQL servers to create one logical database from many physical servers. Very good for distributed or data mart environments.

* Example: This engine serves as an example in the MySQL source code that illustrates how to begin writing new storage engines. It is primarily of interest to developers. The storage engine is a “stub” that does nothing. You can create tables with this engine, but no data can be stored in them or retrieved from them.






