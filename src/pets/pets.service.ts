import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet } from './interfaces/pet.interface';
import { PetClass } from './schemas/pet.schema';

@Injectable()
export class PetsService {
  constructor(
    @InjectModel(PetClass.name)
    private PetModel: Model<PetClass>,
  ) { }

  async findAll(): Promise<Pet[]> {
    return await this.PetModel.find().exec();
  }

  async findOne(id: string): Promise<Pet | null> {
    return await this.PetModel.findOne({ _id: id });
  }

  async create(Pet: Pet): Promise<Pet> {
    const newPet = new this.PetModel(Pet);
    return await newPet.save();
  }

  async delete(id: string): Promise<Pet | null> {
    return await this.PetModel.findByIdAndDelete(id);
  }

  async update(id: string, Pet: Pet): Promise<Pet | null> {
    return await this.PetModel.findByIdAndUpdate(id, Pet, {
      new: true,
    });
  }
}
