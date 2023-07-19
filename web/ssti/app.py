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
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
            body {
              background-color: #222831;
              font-family: 'Roboto Mono', monospace;
              color: #e4e4e4;
              min-height: 95vh;
              max-width: 100vw;
              max-height: 100vh;
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;
            }
            input {
              all: unset;
              border: 1px solid white;
              margin-top: 10px;
              padding: 5px;
              color: #e4e4e4;
              text-align: center;
            }
            </style>
          </head>

          <body>
            <div>
              Ola, ''' + (nome if nome != None else 'pessoa anonima') + '''!
              <form>
                <input type="text" name="nome" placeholder="nome" value="{{nome}}" autofocus="">
                <input type="submit" value="give name">
              </form>
            </div>
          </body>
        </html>'''

        return render_template_string(template, nome=nome)

if __name__ == '__main__':
        app.run(host='0.0.0.0', port=8000, debug=False)
