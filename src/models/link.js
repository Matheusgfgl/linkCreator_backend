module.exports = (sequilize, DataTypes) => {

  const Link = sequilize.define('Link', {

    label : {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isSocial: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: 0,
    }
  })

  Link.associate = (models) => { //Chave estrangeira
      Link.belongsTo(models.Account, {foreignKey: 'accountId'});

  }
  return Link;
}