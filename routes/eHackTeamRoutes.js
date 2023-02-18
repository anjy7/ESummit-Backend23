const express = require("express");
const eHackTeamController = require("../controllers/eHackTeam/eHackTeamController");
const eHackTeamRouter = express.Router();
const auth = require("../middleware/authMiddleware");
const { pagination } = require("../controllers/eHackTeam/pagination");

eHackTeamRouter
  .route("/")
  .get(auth, pagination(), eHackTeamController.getAllTeams);
eHackTeamRouter.route("/").post(auth, eHackTeamController.createTeam);
eHackTeamRouter.route("/:teamId").get(auth, eHackTeamController.getTeamDetails);
eHackTeamRouter.route("/:teamId").patch(auth, eHackTeamController.updateTeam);
eHackTeamRouter.route("/:teamId").delete(auth, eHackTeamController.deleteTeam);

eHackTeamRouter
  .route("/requests/:teamId")
  .get(auth, eHackTeamController.getTeamRequests);
eHackTeamRouter
  .route("/requests/:teamId")
  .post(auth, eHackTeamController.updateRequest);

eHackTeamRouter
  .route("/token/:teamId")
  .get(auth, eHackTeamController.getTeamToken);

eHackTeamRouter
  .route("/user/:teamId")
  .patch(auth, eHackTeamController.removeMember);
eHackTeamRouter.route("/user").get(auth, eHackTeamController.getAllMembers);

eHackTeamRouter
  .route("/addMember")
  .get(auth, eHackTeamController.getMemberRequests);
eHackTeamRouter
  .route("/addMember/:userId")
  .post(auth, eHackTeamController.addMemberRequest);
eHackTeamRouter
  .route("/addMember/:userId")
  .delete(auth, eHackTeamController.removeMemberRequest);

module.exports = eHackTeamRouter;