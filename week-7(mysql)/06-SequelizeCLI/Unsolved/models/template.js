module.exports = function(sequelize, DataTypes) {
    var Template = sequelize.define("template", {
      name: DataTypes.STRING,
    });
    return Template;
  };
  