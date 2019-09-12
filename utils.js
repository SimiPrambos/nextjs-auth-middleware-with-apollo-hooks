
export function isPublicPath(path) {
	const publicPath = [
		'/login',
		'/'
	]
	const isPublic = publicPath.includes(path)
	return isPublic
}