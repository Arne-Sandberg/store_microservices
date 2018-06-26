## Catalog microservice

This microservice is responsible for managing the Products and their Stock. It exposes a simple interface through which it is possible to get information about the products in the store.

#### Endpoints:
- `/store` returns a lists of all the products
- `/store/products/ID` returns details about a product having database pk the ID

##### TROUBLESHOOT
If the database is empty, manually apply the migrations.
If database changes are not reflected, delete the postgres data folder and repeat the update operation.