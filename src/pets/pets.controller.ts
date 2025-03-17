import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PetEntity } from './entities/pet.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('pets')
@ApiTags('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: PetEntity, isArray: true })
  async findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: PetEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.petsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: PetEntity })
  async create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: PetEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePetDto: UpdatePetDto
  ) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: PetEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.petsService.remove(id);
  }
}
