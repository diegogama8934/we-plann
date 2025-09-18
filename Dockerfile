# Usa Node
FROM node:20-alpine

WORKDIR /app

# Copia solo package.json y lockfile primero
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia todo el código
COPY . .

# Expone puerto
EXPOSE 3000

CMD ["npm", "run", "dev"]
