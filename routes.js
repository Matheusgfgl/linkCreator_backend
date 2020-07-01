const app = require('/index')

export default  Routes = () => {
  
  app.get('/', ( req, res) => {
    return res.json('Api runing');
});
}