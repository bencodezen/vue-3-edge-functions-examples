export default async (request, context) => {
  let authCookie = context.cookies.get('authenticated')
  context.log(authCookie)

  if (authCookie) {
    console.log(authCookie)
  } else {
    context.log('else condition')
    context.cookies.set({
      name: 'authenticated',
      value: 'true'
    })
  }

  if (authCookie) {
    return context.json({
      country: context.geo.country,
      header: request.headers.get('x-nf-geo')
    })
  } else {
    return context.json({
      country: 'User not authenticated'
    })
  }
}
