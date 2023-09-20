import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  if (req.method === "GET") {
    const banner = await db.collection("phone").find().toArray();

    res.status(200).json({ status: 200, banner });
  } else if (req.method === "PUT") {
    const { _id, file, opt } = req.body;

    await db.collection("phone").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          file,
          opt
        },
      },
    );

    res.status(200).json({ status: 200 });
  }
};

export default handler;
