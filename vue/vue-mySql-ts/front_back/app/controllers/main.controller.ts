// 控制器是用class来实现的，但是不是任意一个class都能成为控制器

import { Controller, Get, Ctx, Post } from 'koa-controllers'
import { Context } from 'koa'

@Controller
export class MainController {
  @Get('/')
  public async index(@Ctx ctx: Context) {
    ctx.body = 'hello'
  }

  @Post('/')
  public async index2(@Ctx ctx: Context) {
    ctx.body = 'hello post'
  }
}

