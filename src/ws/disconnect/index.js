// learn more about WebSocket functions here: https://arc.codes/primitives/ws
exports.handler = async function ws(req) {
	console.log('disconnected', JSON.stringify(req, null, 2));
	return { statusCode: 200 };
};
