import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './pets/pets.module';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), PetsModule],
})
export class AppModule {}