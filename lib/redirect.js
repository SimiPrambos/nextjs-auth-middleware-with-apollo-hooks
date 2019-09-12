import Router from 'next/router'

export default (target) => {
  try {
    Router.replace(target)
	} catch (error) {
		console.log('cannot redirect. trying with different method!')
	}
}
