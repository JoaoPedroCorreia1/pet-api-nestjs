import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { Pet } from './interfaces/pet.interface';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(private readonly PetsService: PetsService) { }

  @Get()
  findAll(): Promise<Pet[]> {
    return this.PetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Pet | null> {
    return this.PetsService.findOne(id);
  }

  @Post()
  create(@Body() createPetDto: CreatePetDto): Promise<Pet> {
    return this.PetsService.create(createPetDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Pet | null> {
    return this.PetsService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePetDto: CreatePetDto,
  ): Promise<Pet | null> {
    return this.PetsService.update(id, updatePetDto);
  }
}
