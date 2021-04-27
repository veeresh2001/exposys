# Generated by Django 3.1.2 on 2021-04-13 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0002_auto_20210412_1521'),
    ]

    operations = [
        migrations.CreateModel(
            name='stock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=200)),
                ('sharevalue', models.FloatField(default=0)),
                ('purchase_value', models.FloatField(default=0)),
                ('owner', models.CharField(max_length=200)),
            ],
        ),
        migrations.DeleteModel(
            name='post',
        ),
    ]
