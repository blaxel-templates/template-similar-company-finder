
FROM node:20-slim

RUN apt update && apt install -y curl build-essential

RUN curl -fsSL https://raw.githubusercontent.com/blaxel/toolkit/main/install.sh | BINDIR=/bin sh
WORKDIR /blaxel

# Install dependencies
COPY package.json /blaxel/package.json
COPY package-lock.json /blaxel/package-lock.json
RUN npm i

# Copy source code and utils files
COPY README.m[d] /blaxel/README.md
COPY LICENS[E] /blaxel/LICENSE
COPY tsconfig.jso[n] /blaxel/tsconfig.json
COPY src /blaxel/src
COPY index.t[s] /blaxel/index.ts

RUN npm run build
RUN cp -r dist/* /blaxel

ENV COMMAND="node index.js"

ENTRYPOINT ["bl","serve","--port","80","--module","src.agent.agent","--remote"]
