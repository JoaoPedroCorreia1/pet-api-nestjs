import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PetEntity } from './entities/pet.entity';

@Controller('pets')
@ApiTags('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  @ApiOkResponse({ type: PetEntity, isArray: true })
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PetEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.petsService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: PetEntity })
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: PetEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePetDto: UpdatePetDto,
  ) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PetEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.petsService.remove(id);
  }
}
