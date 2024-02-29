import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService){}
    //GET /ninjas --> []
    @Get()
    getNinjas(@Query('weapon') weapon:'stars'|'nunchucks'){
        return this.ninjasService.getNinjas(weapon)
    }

    @Get(':id')
    getNinjaById(@Param('id', ParseIntPipe)id:number){
        try{
            return this.ninjasService.getNinja(id);
        } catch {
            throw new  NotFoundException()
        }
        
    }

    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body(new ValidationPipe()) createNinkaDto: CreateNinjaDto){
        return this.ninjasService.createNinja(createNinkaDto)
    }

    @Put(':id')
    updateNinja(@Param('id', ParseIntPipe)id:number, @Body() updateNinjaDto: UpdateNinjaDto){
        return this.ninjasService.updateNinja(id, updateNinjaDto)
    }

    @Delete(':id')
    removeMinja(@Param('id', ParseIntPipe)id:number){
        return this.ninjasService.removeNinja(id)
    }
}
