FROM python:3.11

EXPOSE 8000
ENV FLAG="Tem injecao de tudo quanto eh tipo, ne?"

RUN pip install flask jinja2
COPY ./app.py /srv
WORKDIR /srv

CMD python app.py
