import { Controller, Get, Ctx, Flow, Version, Post, State, Body } from 'koa-ts-controllers'
import { setSomethingStateFlow, getBody } from '../flow/flow'
 
@Controller('/action')
// 控制器使用class类实现的，但不是任意一个class都能成为控制器
export class Main {
  @Get('/')
  async hello() {
    return 'okay'
  }

  @Flow(setSomethingStateFlow)
  @Get('/state')
  @Version('1')
  async state(@State() state: any) {
    return state
  }

  @Get('/body')
  // @Version('1')
  async body(@Body() body: any) {
    return body
  }
}