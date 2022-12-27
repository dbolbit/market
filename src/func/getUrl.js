export const getUrl = str => {

	const arr = str.split("/"),
		url = arr[arr.length - 1]
	return url
}