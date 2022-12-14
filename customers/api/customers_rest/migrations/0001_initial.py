# Generated by Django 4.0.3 on 2022-11-03 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Customer",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),  # noqa: E501
                ("name", models.CharField(max_length=50)),
                ("address", models.CharField(max_length=2000)),
                ("phone_number", models.PositiveBigIntegerField(unique=True)),
            ],
        ),
    ]
