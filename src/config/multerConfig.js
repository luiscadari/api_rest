import multer from "multer";
import { extname, resolve } from "path";

const randomValue = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${randomValue()}-${extname(file.originalname)}`);
    },
  }),
};
