import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
    //GET /ninjas --> []
    @Get()
    getNinjas(@Query('type') type:string){
        return [{
            type
        }]
    }

    @Get(':id')
    getNinjaById(@Param('id')id:string){
        return {
            id
        }
    }

    @Post()
    createNinja(@Body() createNinkaDto: CreateNinjaDto){
        return {
            name: createNinkaDto.name
        }
    }

    @Put(':id')
    updateNinja(@Param('id')id:string, @Body() updateNinjaDto: UpdateNinjaDto){
        return {
            id,
            name: updateNinjaDto.name
        }
    }

    @Delete(':id')
    removeMinja(@Param('id')id:string){
        return {}
    }
}
