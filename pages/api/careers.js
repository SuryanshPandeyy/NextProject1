import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  if (req.method === "POST") {
    const { email, fname, lname, phone, resume, job, social } = req.body;

    await db.collection("careers").insertOne({
      email,
      fname,
      lname,
      phone,
      resume,
      job,
      social,
    });

    res.status(200).json({ status: "OK" });
  } else if (req.method === "GET") {
    const user = await db.collection("careers").find().toArray();

    res.status(200).json({ status: 200, careers: user });
  } else if (req.method === "PUT") {
    const { _id, email, fname, lname, phone, resume, job, social } = req.body;

    await db.collection("careers").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          email,
          fname,
          lname,
          phone,
          resume,
          job,
          social,
        },
      }
    );

    res.status(200).json({ status: 200 });
  } else if (req.method === "DELETE") {
    const { _id } = req.body;

    await db.collection("careers").deleteOne({ _id: new ObjectId(_id) });

    res.status(200).json({ status: 200 });
  }
};

export default handler;
