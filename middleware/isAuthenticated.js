import redirect from '../lib/redirect'
import { gql } from 'apollo-boost'

export default (context, next) => {
	context.apolloClient.query({
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
			redirect('/login')
		})
}
