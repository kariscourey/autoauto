# Generated by Django 4.0.3 on 2022-11-03 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0006_rename_customer_name_service_customer'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmployeeVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.CharField(max_length=200, null=True, unique=True)),
                ('name', models.CharField(max_length=50)),
                ('employee_number', models.PositiveIntegerField(unique=True)),
            ],
        ),
    ]