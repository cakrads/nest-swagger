import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    CatsModule
  ],
})
export class AppModule { }
