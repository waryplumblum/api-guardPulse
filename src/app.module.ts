import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuditsModule } from './audits/audits.module';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Cargar variables del .env
    MongooseModule.forRoot(process.env.MONGODB_URI), // Leer el URI desde .env
    AuditsModule, 
    UsersModule, 
    ReportsModule, 
    AuthModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
