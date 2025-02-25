>## `Django Reacts` : [`Deployed`](https://django-reacts.vercel.app/)
>
>![image](https://github.com/user-attachments/assets/9c3a9993-2599-4d9e-a312-5ffb1c4d4b74)

```bash
# Install Command
vercel start

# Key Value Pair
DEBUG True
SECRET_KEY djanxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyt9-%
DJANGO_SETTINGS_MODULE backend.settings

# vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "manage.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "manage.py"
    }
  ]
}

# requirements.txt
gunicorn==21.2.0
Django==4.2.5

# manage.py
from django.core.wsgi import get_wsgi_application
app = get_wsgi_application()
```
