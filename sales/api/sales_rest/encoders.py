from common.json import ModelEncoder

from .models import AutomobileVO, Sale, SalesPerson, Customer, EmployeeVO

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
        "sold",
    ]

class EmployeeVOEncoder(ModelEncoder):
    model = EmployeeVO
    properties = [
        "import_href",
        "name",
        "employee_number",
    ]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "price",
        "automobile",
        "sales_person",
        "customer",
        ]

    encoders = {
            "automobile": AutomobileVOEncoder(),
            "sales_person": SalesPersonEncoder(),
            "customer": CustomerEncoder(),
        }
