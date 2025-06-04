import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async create(createUserInput: CreateUserInput) {
    return this.usersRepository.create({
      ...createUserInput,
      password: await this.hashPassword(createUserInput.password)
    });
  }

  async findAll() {
    return await this.usersRepository.find({});
  }

  async findOne(_id: string) {
    return await this.usersRepository.findOne({ _id });
  }

  async update(_id: string, updateUserInput: UpdateUserInput) {
    if (updateUserInput.password) {
      updateUserInput.password = await this.hashPassword(updateUserInput.password);
    }

    return await this.usersRepository.findOneAndUpdate(
      { _id }, {
        $set: {
          ...updateUserInput
        }
    });
  }

  async remove(_id: string) {
    return await this.usersRepository.findOneAndDelete({ _id });
  }

  private async hashPassword(password: string): Promise<string> {
    return bcryptjs.hash(password, 10);
  }
}
