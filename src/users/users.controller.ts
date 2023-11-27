import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBasicAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './schemas/user.schema';

@Controller('users')
@ApiTags('Users')
@ApiBasicAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario.' })
  @ApiResponse({ status: 201, description: 'Usuario creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  @ApiResponse({ status: 401, description: 'Sin autorización' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Consultar todos los usuarios.' })
  @ApiResponse({ status: 200, description: 'Consulta exitosa' })
  @ApiResponse({ status: 401, description: 'Sin autorización' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar un usuario.' })
  @ApiResponse({ status: 200, description: 'Elemento encontrado', type: User})
  @ApiResponse({ status: 401, description: 'Sin autorización' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar los datos de un usuario por Id.' })
  @ApiResponse({ status: 204, description: "Elemento actualizado con exito."})
  @ApiResponse({ status: 401, description: 'Sin autorización' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario por Id.' })
  @ApiResponse({ status : 204, description : "Elemento eliminado con exito." })
  @ApiResponse({ status: 401, description: 'Sin autorización' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
