import { useMutation } from '@apollo/react-hooks'
import { Formik, Form, Field } from 'formik'
import * as mutations from '../graphql/mutations'
import Router from 'next/router'
import Cookies from 'js-cookie'

export default () => {

	const [login, { error }] = useMutation(mutations.login, {
		onCompleted: ({ login: { token } }) => {
			Cookies.set('token', token)
			Router.push('/private')
		}
	})

	return (
		<div>
			<h2>Login here: </h2>
			{error && error.graphQLErrors.map((er, i) => (
				<p style={{ color: 'red' }} key={i}>{JSON.stringify(er.message)}</p>
			))}

			<Formik
				initialValues={{
					email: '',
					password: ''
				}}
				onSubmit={(values) => {
					login({
						variables: values
					})
				}}
			>
				{() => (
					<Form>
						<Field name="email" type="email" placeholder="email.." />
						<Field name="password" type="password" placeholder="password.." />
						<button type="submit">
							login
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}