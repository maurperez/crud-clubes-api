import { Controller, Get, Param, NotFoundException, Post, Body, BadRequestException, InternalServerErrorException } from '@nestjs/common';

import { ClubService } from './club.service'
import { Club } from './interface/club.interface';
import { createClubDto } from './dto/create-club.dto'
import { ClubValidationPipe } from './validation.pipe'


@Controller('club')
export class ClubController {
  constructor(private clubService: ClubService){}

  @Get()
  findAll(): Promise<Club[]> {
    return this.clubService.findAll()
  }

  @Get(':id')
  async findUnique(
    @Param('id') id: string
  ): Promise<Club>{
    const club = await this.clubService.findUnique(id)

    if(club) return club
    else throw new NotFoundException()
  }

  @Post()
  async create(
    @Body(new ClubValidationPipe()) createClubDto: createClubDto
  ): Promise<void>{
    try{
      await this.clubService.create(createClubDto)
    }catch(error) {
      if(error instanceof BadRequestException) throw error
      else throw new InternalServerErrorException()
    }
  }


}