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
    cb(null, Date.now() + "_" + file.originalname);
  },
});

let fileFilter = (req, file, cb) => {
  if (
    file.mimeType === "image/jpeg" ||
    file.mimeType === "image/jpg" ||
    file.mimeType === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let uploads = multer({
  storage: storage,
  fileFilter: fileFilter,
}).single("image");

router.get("/", auth, Api.getAllData);
router.get("/:id", auth, Api.getDataById);
router.post("/", auth, uploads, Api.createData);
router.put("/:id", auth, Api.updateDataById);
router.delete("/:id", auth, Api.deleteDataById);

module.exports = router;
