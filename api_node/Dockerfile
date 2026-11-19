# Utiliza una imagen oficial de Node.js
FROM node:22-slim

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json app.js ./

# Instala las dependencias
RUN npm install

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]