# Design

## Back-End Design

### Customers microservice
Customers management project within the customers directory. Contains app customers_rest. </br>

#### Customers_rest
Centers on the Customer model, instances of which describe customers. Related views permit CRUD functionality for model instances.

### Employees microservice
Employees management project within the employees directory. Contains app employees_rest. </br>

#### Employees_rest
Centers on the Employee model, instances of which describe employees. Employee model includes foreign key reference to Position. Related views permit CRUD functionality for model instances.

### Inventory microservice
Automobile inventory management project within the inventory directory. Contains app inventory_rest.

#### Inventory_rest
Centers on the Automobile model, instances of which describe automobiles. Automobile model includes foreign key reference to Model, which includes foreign key reference to Manufacturer. Related views permit CRUD functionality for model instances.

### Sales microservice
Sales management project within the sales directory. Contains app sales_rest. </br>
Utilizes polling IPC integration pattern to obtain information regarding automobile, employee creation.

#### Sales_rest
Centers on the Sale model, instances of which describe sales. Sale model includes foreign key references to Customer, Sales Person, and Automobile. Related views permit CRUD functionality for model instances.

### Services microservice
Services management project within the services directory. Contains app services_rest. </br>
Utilizes polling IPC integration pattern to obtain information regarding automobile, employee creation.

#### Services_rest
Centers on the Service model, instances of which describe services. Service model includes foreign key references to Customer, Technician, and Automobile. Related views permit CRUD functionality for model instances.


## Front-End Design

### Forms
Standard React function components, featuring Hooks, that permit the creation of instances per the title of the component.

### Lists
Standard React function components, featuring Hooks, that permit the listing of instances per the title of the component.
