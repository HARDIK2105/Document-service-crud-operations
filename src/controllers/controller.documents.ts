import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";

export const getDocuments = async (_req: Request, res: Response) =>{
    try {
        const documents = await collections.document_items.find({}).toArray();

        res.status(200).send(documents);
    } catch (error) {
        res.status(500).send(error.message);
    }

}

export const getDocumentByKey = async (req: Request, res: Response) =>{
    const key = req?.params?.key;

    try {
        const query = { key };
        const document = await collections.document_items.findOne(query);
        
        if (document) {
            res.status(200).send(document);
        }
        else{
            res.status(200).send(`No such document present`);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }

}

export const createDocument = async (req: Request, res: Response) => {
    try {
        const newDoc = req.body;
        const result = await collections.document_items.insertOne(newDoc);

        result
            ? res.status(201).send(`Successfully created a new document with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new  item.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }

}

export const updateDocument = async (req: Request, res: Response) => {

    const key = req?.params?.key;

    try {
        const updateDocument = req.body;
        const query = { key };
        const result = await collections.document_items.updateOne(query, { $set:  {content: updateDocument.updatedContent}});

        result
            ? res.status(200).send(`Successfully updated item with key ${key}`)
            : res.status(304).send(`item with key: ${key} not updated`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

}

export const deleteDocument = async (req: Request, res: Response) => {
    const key = req?.params?.key;

    try {
        const query = { key };
        const result = await collections.document_items.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed  item with key ${key}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove item with key ${key}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`item with key ${key} does not exist`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

}
