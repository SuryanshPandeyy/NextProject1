import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  if (req.method === "POST") {
    const { file, designation, title, desc } = req.body;
    // Attaching to a channel

    await db.collection("founder").insertOne({
      file,
      title,
      designation,
      desc,
    });

    res.status(200).json({ status: "OK" });
  } else if (req.method === "GET") {
    const user = await db.collection("founder").find().toArray();

    res.status(200).json({ status: 200, testimonials: user });
  } else if (req.method === "PUT") {
    const { _id, file, designation,  title, desc } = req.body;

    await db.collection("founder").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          file,
          title,
          designation,
          desc,
        },
      }
    );

    res.status(200).json({ status: 200 });
  } else if (req.method === "DELETE") {
    const { _id } = req.body;

    await db.collection("founder").deleteOne({ _id: new ObjectId(_id) });

    res.status(200).json({ status: 200 });
  }
};

export default handler;
