import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  create(createPetDto: CreatePetDto) {
    return this.prisma.pet.create({ data: createPetDto });
  }

  findAll() {
    return this.prisma.pet.findMany();
  }

  findOne(id: number) {
    return this.prisma.pet.findUnique({ where: { id } });
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return this.prisma.pet.update({
      where: { id },
      data: updatePetDto,
    });
  }

  remove(id: number) {
    return this.prisma.pet.delete({ where: { id } });
  }
}