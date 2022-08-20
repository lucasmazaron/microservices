import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaSchema } from './interfaces/categorias/categoria.schema';
import { JogadorSchema } from './interfaces/jogadores/jogador.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://smartranking:smartranking1@smartranking.1jf0yqb.mongodb.net/micro-admin-backend?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'Jogador', schema: JogadorSchema }]),
    MongooseModule.forFeature([{ name: 'Categoria', schema: CategoriaSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
