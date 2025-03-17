import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Response, Request, query } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class HelloController {

    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response ) {
        console.log(request.url)
        response.status(200).json({
            message: 'Hello World'
        }) 
    }

    @Get('new')
    @HttpCode(201)
    somenthingNew() {
        return 'Something New';
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 Not Found';
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Error Page';
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        console.log(typeof num);
        return num + 14;
    }

    @Get('active/:status')
    @UseGuards(AuthGuard)
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status);
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}) {
        console.log(typeof query.age);
        console.log(typeof query.name);
        return `Hello ${query.name}, you are ${query.age + 30} years old`;
    }
}
