import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { document_items?: mongoDB.Collection } = {}

export async function connectToDatabase () {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb://0.0.0.0:27017");
  await client.connect();

  const db: mongoDB.Db = client.db("test_db");

  await applySchemaValidation(db);

  const documentCollection: mongoDB.Collection = db.collection("documents");

  collections.document_items = documentCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${documentCollection.collectionName}`);
}


async function applySchemaValidation(db: mongoDB.Db) {
  const jsonSchema = {
    $jsonSchema: {
      bsonType: "object",
      required: ["key", "content", "createdBy", "updatedBy", "accessLevel"],
      additionalProperties: true,
      properties: {
        _id: {},
        key: {
          bsonType: "string",
          description: "'key' is required and is a string",
        },
        content: {
          bsonType: "string",
          description: "'content' is required and is a number",
        },
        createdBy: {
          bsonType: "string",
          description: "'createdBy' is required and is a string",
        },
        updatedBy: {
          bsonType: "string",
          description: "'updatedBy' is required and is a string",
        },
        accessLevel: {
          bsonType: "string",
          description: "'accessLevel' is required and is a string",
        },
        
      },
    },
  };

  await db.command({
    collMod: "documents",
    validator: jsonSchema,
  }).catch(async (error: mongoDB.MongoServerError) => {
    if (error.codeName === 'NamespaceNotFound') {
      await db.createCollection("documents", { validator: jsonSchema });
    }
  });
}
