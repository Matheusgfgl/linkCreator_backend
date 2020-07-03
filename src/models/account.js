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

  Account.associate = (models) => { //Relacao de muitos
    Account.hasMany(models.Link, {foreignKey: 'accountId'});
  }

  Account.prototype.toJSON = function (){
    const values = {...this.get()};
    delete values.password;
    return values;
  }
  return Account;
}