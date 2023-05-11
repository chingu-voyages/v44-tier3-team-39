import jwt from 'jsonwebtoken';
const JWT_SECRET = "1234";
// By signing with users password, if account gets hacked, changing password invalidates previous tokens
const generateToken = (id) => {
	return jwt.sign({ id }, JWT_SECRET, {
		expiresIn: '1h',
	});
};

export default generateToken;
