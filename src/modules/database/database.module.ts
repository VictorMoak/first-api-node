import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({ 
    imports: [
    MongooseModule.forRoot('mongodb+srv://victorsouza_db_user:xq1T8tFaFK1JWs35@aula-ds.ec6xkvd.mongodb.net/minhaapi'),
  ],
})
export class DatabaseModule {}
