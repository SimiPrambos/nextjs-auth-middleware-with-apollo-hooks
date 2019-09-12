import { gql } from 'apollo-boost'

export const createTodo = gql`
	mutation createTodo($title: String!, $is_done: Boolean) {
		createTodo(data: {
			title: $title,
			is_done: $is_done
		}) {
			id
			title
			is_done
		}
	}
`

export const login = gql`
	mutation login($email: String!, $password: String!) {
		login(data: {
			email: $email,
			password: $password
		}) {
			token
		}
	}
`
