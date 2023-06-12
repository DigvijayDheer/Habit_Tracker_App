const express = require("express");
const router = express.Router();

const {
  renderMainPage,
  renderDashboard,
  toggleUserView,
  addHabit,
  toggleFavoriteHabits,
  updateHabitStatus,
  deleteHabit,
} = require("../controllers/habitController");

// Render the main page
router.route("/").get(renderMainPage);

// Render the dashboard and handle habit addition
router.route("/dashboard").get(renderDashboard).post(addHabit);

// Toggle user view between week and day view
router.route("/user-view").post(toggleUserView);

// Toggle favorite habits
router.route("/favorite-habit").get(toggleFavoriteHabits);

// Update habit status
router.route("/status-update").get(updateHabitStatus);

// Delete a habit
router.route("/remove").get(deleteHabit);

module.exports = router;
