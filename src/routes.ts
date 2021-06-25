import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";



const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();


router.post("/users", ensureAdmin, createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, ensureAdmin, createComplimentController.handle);

router.get(
  "/users/compliments/receiver",
  ensureAuthenticated,
  listUserReceiverComplimentsController.handle
);
router.get(
  "/users/compliments/sender",
  ensureAuthenticated,
  listUserSenderComplimentsController.handle
);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);

export { router }