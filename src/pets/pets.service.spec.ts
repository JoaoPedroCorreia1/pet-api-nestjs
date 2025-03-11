import { Test, TestingModule } from '@nestjs/testing';
import { PetsService } from './pets.service';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { PetClass, PetSchema } from './schemas/pet.schema';
import DbModule, {
  closeMongoConnection,
} from './utils/database-module';

describe('PetService', () => {
  let service: PetsService;
  let connection: Connection;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DbModule({
          connectionName: (new Date().getTime() * Math.random()).toString(16),
        }),
        MongooseModule.forFeature([
          { name: PetClass.name, schema: PetSchema },
        ]),
      ],
      providers: [PetsService],
    }).compile();

    service = module.get<PetsService>(PetsService);
    connection = await module.get(getConnectionToken());
  });

  afterEach(async () => {
    await connection.close();
    await closeMongoConnection();
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });
});