import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { PetClass, PetSchema } from './schemas/pet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PetClass.name, schema: PetSchema },
    ]),
  ],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule { }
