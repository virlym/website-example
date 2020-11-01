module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: {type : DataTypes.STRING, allowNull: false, validate: {len: {args: [1], msg: "needs to be at least 1 character"}}},
    complete: {type: DataTypes.BOOLEAN, defaultValue: false}
  });
  return Todo;
};
