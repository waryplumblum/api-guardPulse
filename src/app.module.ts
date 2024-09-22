import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Cargar variables del .env
    MongooseModule.forRoot(process.env.MONGODB_URI), // Leer el URI desde .env
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
