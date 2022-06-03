const dataSchema = require("../model/data");
const fs = require("fs");

module.exports = class Api {
  static async getAllData(req, res) {
    try {
      const data = await dataSchema.find();
      res.status(200).json(data);
    } catch (err) {
      console.log("Get All Data Catch Block", err);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  static async getDataById(req, res) {
    try {
      const id = req.params.id;
      const data = await dataSchema.findById(id);
      res.status(200).json(data);
    } catch (err) {
      console.log("Error in get data by id", err);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  static async createData(req, res) {
    const data = req.body;
    const image = req.file;
    data.image = image;
    try {
      await dataSchema.create(data);
      res.status(200).json({ message: "Data created successfully" });
    } catch (err) {
      console.log("error in data api", err);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  static async updateDataById(req, res) {
    let id = req.params.id;
    let newData = req.body;
    try {
      const data = await dataSchema.findByIdAndUpdate(id, newData);
      res.status(200).json(data);
    } catch (error) {
      console.log("error in update api catch block", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  static async deleteDataById(req, res) {
    const id = req.params.id;
    try {
      const data = await dataSchema.findByIdAndDelete(id);

      res.status(200).json(data);
    } catch (err) {
      console.log("error in delete api catch block", err);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};
