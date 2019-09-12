
import App from "next/app"
import React from "react"
import withApollo from "../lib/withApollo"
import { ApolloProvider } from "@apollo/react-hooks"

function handleMiddleware(middlewares, ctx) {
	if(middlewares) {
		let i = 0
		const count = middlewares.length

		function next() {
			i++
			if(i > count){
				return
			}
			middlewares[i-1](ctx, next)
		}
		next()
	}
}

class MyApp extends App {

	render() {
		const { Component, pageProps, apolloClient, router } = this.props
		handleMiddleware(Component.middlewares, {apolloClient, router})

		return (
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		)
	}
}

export default withApollo(MyApp)