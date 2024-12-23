const express = require("express");
const { getAttendance, saveAttendance, getAttendanceRecords } = require("../controllers/Attendance.controller");
const { verifyToken } = require("../middleware/jwt");
const Attendance_router = express.Router();

// Route to get employee attendance details
Attendance_router.get("/getAttendance", getAttendance);

// Route to save employee attendance
Attendance_router.post("/postAttendance", saveAttendance);

//Route to get the employee attendance
Attendance_router.get("/getAttendanceRecords", verifyToken, getAttendanceRecords);

module.exports = Attendance_router;
