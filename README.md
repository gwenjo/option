python3 -m http.server

python3 manage.py runserver

python3 manage.py startapp 

pip3 freeze > requirements.txt


cp -r ..//.pip-modules/lib/python3.8/site-packages/allauth/templates/* ./templates/allauth/ 

python3 manage.py loaddata categories
python3 manage.py loaddata products

python3 manage.py makemigrations --dry-run
python3 manage.py makemigrations

python3 manage.py migrate --plan
python3 manage.py migrate
