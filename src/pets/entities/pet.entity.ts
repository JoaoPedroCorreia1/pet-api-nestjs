import { Pet } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PetEntity implements Pet {
  @ApiProperty()
  id: number;

  @ApiProperty()
  type: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
