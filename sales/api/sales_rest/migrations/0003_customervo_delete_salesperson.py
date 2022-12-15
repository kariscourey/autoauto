# Generated by Django 4.0.3 on 2022-11-03 04:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("sales_rest", "0002_alter_sale_sales_person"),
    ]

    operations = [
        migrations.CreateModel(
            name="CustomerVO",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "import_href",
                    models.CharField(max_length=200, null=True, unique=True),
                ),
                ("name", models.CharField(max_length=50)),
                ("phone_number", models.PositiveBigIntegerField(unique=True)),
            ],
        ),
        migrations.DeleteModel(
            name="SalesPerson",
        ),
    ]
