const Api = require("../controllers/api");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../middleware/auth");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  fileName: function (req, file, cb) {
    cb(
      null,
      file.feildName + "_" + Date.now() + "_" + file.originalname + ".jpg"
    );
  },
});

let uploads = multer({
  storage: storage,
}).single("image");

router.get("/", auth, Api.getAllData);
router.get("/:id", auth, Api.getDataById);
router.post("/", auth, uploads, Api.createData);
router.put("/:id", auth, Api.updateDataById);
router.delete("/:id", auth, Api.deleteDataById);

module.exports = router;
