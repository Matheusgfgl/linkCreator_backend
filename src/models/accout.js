module.exports = (sequilize, DataTypes) => {

  const Account = sequilize.define('Account', {

    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return Account;
}