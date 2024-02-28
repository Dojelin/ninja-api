import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService){}
    //GET /ninjas --> []
    @Get()
    getNinjas(@Query('weapon') weapon:'stars'|'nunchucks'){
        return this.ninjasService.getNinjas(weapon)
    }

    @Get(':id')
    getNinjaById(@Param('id')id:string){
        try{
            return this.ninjasService.getNinja(+id);
        } catch {
            throw new  NotFoundException()
        }
        
    }

    @Post()
    createNinja(@Body() createNinkaDto: CreateNinjaDto){
        return this.ninjasService.createNinja(createNinkaDto)
    }

    @Put(':id')
    updateNinja(@Param('id')id:string, @Body() updateNinjaDto: UpdateNinjaDto){
        return this.ninjasService.updateNinja(Number(id), updateNinjaDto)
    }

    @Delete(':id')
    removeMinja(@Param('id')id:string){
        return this.ninjasService.removeNinja(Number(id))
    }
}
