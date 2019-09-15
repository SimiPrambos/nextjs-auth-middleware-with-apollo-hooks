import { useQuery } from '@apollo/react-hooks'
import * as queries from '../graphql/queries'
import isAuthenticated from '../middleware/isAuthenticated'

function PrivatePage(props) {

	const { data, loading, error } = useQuery(queries.batches)
  const { data: userData} = useQuery(queries.me)

	return (
		<div>
			<h1>Welcome {userData.me.fullname}</h1>
			{
				loading && <h1>loading...</h1>
			}
			{error && error.graphQLErrors.map((er, i) => (
				<p style={{ color: 'red' }} key={i}>{JSON.stringify(er.message)}</p>
			))}
			<ul>
				{
					data && data.batches.map(batch => (
						<li key={batch.id}>{batch.name}</li>
					))
				}
			</ul>
		</div>
	)
}

// example using middleware
PrivatePage.middlewares = [
	async (_ctx, next) => {
    console.log('Logger ...')
    await next()
	},
	isAuthenticated
]
