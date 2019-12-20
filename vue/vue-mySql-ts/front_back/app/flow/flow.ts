export const setSomethingStateFlow = async (ctx, next) => {
  console.log('state', ctx.state)
  ctx.state.something = 'state zhele';
  await next();
}

export const getBody = async (ctx, next) => {
  console.log('body', ctx.body)
  ctx.state.something = '123'
  await next();
}