#Instruções para execução do projeto

#cria a pasta do prisma com o arquivo schema.prisma e o .env confirurando o caminho do arquivo dev.db
npm prisma init --datasource-privider=SQLite

#cria as migrations para cada modelo definido no schema.prisma
#sendo necessário fornecer um nome para cada migration, ex: create notifications
npx prisma migrate dev