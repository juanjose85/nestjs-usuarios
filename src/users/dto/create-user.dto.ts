import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
      example:"Pepe55",
      description:"Nombre de usuario para esta aplicación",
      minimum:50
    })
    @IsString()
    readonly username: string;
    @ApiProperty({example:"*******", description:"Password"})
    @IsString()
    readonly password : string;
    @ApiProperty({example:"correo@correo.com", description:"Tu cuenta de correo electronico."})
    @IsString()
    readonly email: string;
  }