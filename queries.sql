-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

    SELECT p.ProductName, c.CategoryName
    FROM Product as p
    JOIN Category as c ON c.Id = p.CategoryId




-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

-- Order.OrderVia is the foreign key that refers to Shipper Id (whch has the CompanyName column)
-- I checked that the order date is right and got 853 rows so not sure how I was supposed to get 429 records.

    SELECT o.Id as OrderId, s.CompanyName as Company, o.OrderDate
    FROM [Order] as o
    JOIN Shipper as s ON s.Id = o.ShipVia
    WHERE o.OrderDate < '2012-09-12'
    ORDER BY o.OrderDate ASC;



-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records. 
    SELECT p.ProductName, od.Quantity, o.Id
    FROM Product AS p
    JOIN OrderDetail AS od ON od.ProductId = p.Id
    JOIN [Order] AS o ON o.Id = od.OrderId
    WHERE o.Id = 10251
    ORDER BY p.ProductName ASC;

-- Display the OrderID, *Customer's* Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

    SELECT o.Id, c.CompanyName, e.LastName
    FROM [Order] AS o
    JOIN Customer AS c ON c.Id = o.CustomerId
    JOIN Employee AS e ON e.Id = o.EmployeeId;