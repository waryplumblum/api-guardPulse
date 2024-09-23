import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { UsersModule } from '../users/users.module'; // Asegúrate de importar el UsersModule

@Module({
  imports: [UsersModule], // Importa el módulo de usuarios si es necesario
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
