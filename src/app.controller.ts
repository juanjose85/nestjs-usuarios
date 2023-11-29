import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';


@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body : { username : string, password : string }) : Promise<{ accessToken : string }>{
    const user = await this.authService.validateUser(body.username, body.password)
    const accessToken = await this.authService.generateToken(user)
    return { accessToken }
  } 

  @Post('secure-data')
  @UseGuards(JwtAuthGuard )
  getSecureData():{ message : string }{
    return { message : 'Acceso permitido a datos seguro' }    
  }

}
