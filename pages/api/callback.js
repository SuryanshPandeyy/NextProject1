import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  if (req.method === "POST") {
    const { name, number, comment } = req.body;
console.log(name, number, comment);
    await db.collection("callback").insertOne({
      name,
      number,
      comment,
    });

    res.status(200).json({ status: "OK" });
  } else if (req.method === "GET") {
    const user = await db.collection("callback").find().toArray();
    
    res.status(200).json({ status: 200, callback: user });
  } else if (req.method === "PUT") {
    const { _id, name, number, comment } = req.body;

    await db.collection("callback").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          name,
          number,
          comment,
        },
      }
    );

    res.status(200).json({ status: 200 });
  } else if (req.method === "DELETE") {
    const { _id } = req.body;

    await db.collection("callback").deleteOne({ _id: new ObjectId(_id) });

    res.status(200).json({ status: 200 });
  }
};

export default handler;
