const userSchema = require("../models/UserDB");
const teamSchema = require("../models/TeamDB");
const organizationSchema = require("../models/organizationDB");

exports.getTotalBudget = async (req, res, next) => {
  try {
    const teams = await teamSchema.find({});
    const users = await userSchema.find({});
    let expense = 0;

    const totalBudget = teams.reduce(function (acc, obj) {
      users.forEach((user) => {
        if (user.teamId == obj._id) {
          if (user.status === "active") {
            expense = expense + obj.expenseLimit;
            // console.log(obj.name, expense);
          }
        }
      });

      //   const expenseBudget = users.reduce(function (acc1, user) {
      //     // console.log(obj.name);
      //     if (user.teamId === obj.id) {
      //       if (user.status == "active") {
      //         // console.log("Active");
      //         // console.log(obj.expenseLimit);
      //         acc1 = acc1 + obj.expenseLimit;
      //       }
      //       //   console.log("Expense Sum", acc1);
      //     }
      //     expense = expense + acc1;
      //     // console.log(expense);
      //     return expense;
      //   }, 0);
      //   console.log("Total Expense:", expenseBudget);
      return acc + obj.budget * obj.teamSize + expense;
    }, 0);

    // console.log("TotalBudget", totalBudget);
    // const expenseBudget = users.reduce(function(acc,obj){
    //     if(obj.e)
    // })
    // var minutes = 5,
    //   the_interval = minutes * 1000;
    // setInterval(function () {
    //   console.log("I am doing my 5 minutes check");
    //   // do your stuff here
    // }, the_interval);
    res.status(200).json({
      data: totalBudget,
    });
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  const users = await userSchema.find({});
  res.status(200).json({
    data: users,
  });
};
