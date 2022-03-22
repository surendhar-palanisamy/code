import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({data:createUserDto})
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({where:{id}})
  }
  findOneByEmail(email:string)
  {
    return this.prisma.user.findUnique({where:{email}})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({data:updateUserDto,where:{id}})
  }



  remove(id: number) {
    return this.prisma.user.delete({where:{id}})
  }
}
