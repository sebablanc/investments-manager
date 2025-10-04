# Dockerfile para Entorno de Desarrollo (Development)
# Solo necesitamos Node.js para correr el servidor ng serve
FROM node:20-alpine

# Establecer el directorio de trabajo (debe coincidir con el volumen en docker-compose)
WORKDIR /app

# Copiar solo los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
# Esto se hace una vez al construir la imagen
RUN npm install

# Exponer el puerto por defecto de Angular
EXPOSE 4200

# NOTA: No copiamos el código fuente aquí, ya que será montado usando 'volumes'
#       en el archivo docker-compose.yml para permitir la sincronización en vivo.

# La instrucción CMD se define en docker-compose.yml (ng serve...)
# para anular el comando por defecto y ejecutar el servidor de desarrollo.