import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  if (req.method === "POST") {
    const { file } = req.body;
    console.log(file);

    for (let i of file) {
      await db.collection("products").insertOne({
        file: i,
      });
    }

    res.status(200).json({ status: "OK" });
  } else if (req.method === "GET") {
    const banner = await db.collection("products").find().toArray();

    res.status(200).json({ status: 200, banner });
  } else if (req.method === "PUT") {
    const { _id, file } = req.body;

    await db.collection("products").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          file,
        },
      }
    );

    res.status(200).json({ status: 200 });
  } else if (req.method === "DELETE") {
    const { _id } = req.body;

    await db.collection("products").deleteOne({ _id: new ObjectId(_id) });

    res.status(200).json({ status: 200 });
  }
};

export default handler;
