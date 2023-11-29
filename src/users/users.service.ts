import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  
  constructor(@InjectModel(User.name) private readonly userModel : Model<UserDocument>){}

  async create(createUserDto: CreateUserDto) : Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll() : Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string) : Promise<User> {
    return this.userModel.findOne({ _id : id }).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate({ _id : id }, updateUserDto,{ new:true })
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete({ _id : id }).exec()
  }
}
