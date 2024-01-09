const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://bsmanupriyan:QXEl2sJczjh7aM3t@cluster0.in3wehf.mongodb.net/contact?retryWrites=true&w=majority`
      )
      .then(
        () => {
          console.log("Connected");
        },
        (error) => console.log(error)
      );
  } catch (error) {
    console.log(error);
  }
};

conn();
