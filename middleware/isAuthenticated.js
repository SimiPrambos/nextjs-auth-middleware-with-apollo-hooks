import redirect from '../lib/redirect'
import { gql } from 'apollo-boost'

export default async (ctx, next) => {
  ctx.apolloClient.query({
    query: gql`
			{
				me {
					id
					fullname
					email
					role
				}
			}
		`
  })
    .then(() => {
      next()
    })
    .catch(() => {
      redirect(ctx, '/login')
    })
}
