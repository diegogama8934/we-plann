# Usa una imagen oficial de Node
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia todo el código
COPY . .

# Expone el puerto de Next.js
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "dev"]
