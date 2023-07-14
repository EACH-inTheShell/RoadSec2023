FROM node:20.4

EXPOSE 3000
WORKDIR /srv/

RUN useradd -m eits
COPY --chown=eits package.json /srv/
RUN npm install

COPY --chown=eits app.js /srv/
USER eits
CMD node app.js
