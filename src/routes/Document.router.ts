
import express, { Request, Response } from "express";

import { getDocuments , getDocumentByKey , createDocument, updateDocument , deleteDocument  } from "../controllers/controller.documents";
export const documentRouter = express.Router();

documentRouter.use(express.json());


documentRouter.get("/", getDocuments);

documentRouter.get("/:key", getDocumentByKey);

documentRouter.post("/", createDocument);

documentRouter.put("/:key", updateDocument);

documentRouter.delete("/:key", deleteDocument);
