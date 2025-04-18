import jwt from "jsonwebtoken";
import User from "../models/User";
export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ["Login required"],
    });
  }
  const [bearer, token] = authorization.split(" ");
  console.log("token: ", token);
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    const user = User.findOne({
      where: {
        id: id,
        email: email,
      },
    });
    if (!user) {
      return res.status(401).json({
        errors: ["Usuário inválido"],
      });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      errors: ["invalid token"],
    });
  }
};
