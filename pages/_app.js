
import App from "next/app"
import React from "react"
import withApollo from "../lib/withApollo"
import { ApolloProvider } from "@apollo/react-hooks"

async function handleMiddleware(middlewares, ctx) {
  if (middlewares) {
    let i = 0
    const count = middlewares.length

    async function next() {
      i++
      if (i > count) {
        return
      }
      await middlewares[i - 1](ctx, next)
    }
    await next()
  }
}

class MyApp extends App {

  static async getInitialProps({ ctx, Component: { middlewares } }) {
    await handleMiddleware(middlewares, ctx)
    return {}
  }

  render() {
    const { Component, pageProps, apolloClient, router } = this.props

    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
