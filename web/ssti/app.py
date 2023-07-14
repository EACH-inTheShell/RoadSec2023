from flask import Flask, request, render_template_string
import jinja2

app = Flask(__name__)
app.secret_key = b'CHAVE_SECRETA'

@app.route('/', methods=['GET'])
def index():
        nome = request.args.get('nome')

        template = '''
        <!DOCTYPE html>
        <html>
          <head>
            <title>EiTS - SSTI</title>
          </head>
          <body>Ola, ''' + (nome if nome != None else 'pessoa anonima') + '''!
            <form>
              <input type="text" name="nome" placeholder="nome" value="{{nome}}" autofocus="">
              <input type="submit" value="give name">
            </form>
          </body>
        </html>'''

        return render_template_string(template, nome=nome)

if __name__ == '__main__':
        app.run(host='0.0.0.0', port=8000, debug=False)
