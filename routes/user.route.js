let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// userbooking Model

let userSchema = require("../Models/user");

// // CREATE userbooking

router.route("/create-user").post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      console.log("error", error);
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }

    //     try {
    //       console.log(data);
    //       res.json(data);
    //     } catch (error) {
    //       console.log(res.status(400));
    //       console.log("error:", error);
    //     }
  });
});

// router.route("/create-userbooking").post((req, res, next) => {

//     userbookingSchema.create(req.body, (error, data) => {

//     if (error) {

//       if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {

//         // If the error is due to a duplicate email (unique constraint violation)

//         const duplicateEmail = error.keyValue.email;

//         res

//           .status(400)

//           .json({ error: `The email '${duplicateEmail}' already exists.` });

//       } else {

//         // For other types of errors, you can return a generic error message

//         res

//           .status(500)

//           .json({ error: "Something went wrong. Please try again later." });

//       }

//     } else {

//       console.log(data);

//       res.json(data);

//     }

//   });

// });

// READ userbookings

router.route("/").get((req, res) => {
  userbookingSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single userbooking

router.route("/get-userbooking/:id").get((req, res) => {
  userbookingSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update userbooking

router.route("/update-userbooking/:id").put((req, res, next) => {
  userbookingSchema.findByIdAndUpdate(
    req.params.id,

    {
      $set: req.body,
    },

    (error, data) => {
      if (error) {
        return next(error);

        console.log(error);
      } else {
        res.json(data);

        console.log("userbooking updated successfully !");
      }
    }
  );
});

// Delete userbooking

router.route("/delete-userbooking/:id").delete((req, res, next) => {
  userbookingSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
