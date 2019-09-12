import { gql } from 'apollo-boost'

export const todoes = gql`
	{
		todoes {
			id
			title
			is_done
		}
	}
`

export const batches = gql`
	{
		batches {
			id
			name
		}
	}
`

export const me = gql`
  {
    me {
      id
      fullname
      email
      role
    }
  }
`
