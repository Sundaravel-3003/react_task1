
import './App.css';
import Card from "./card.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



function App() {
 
  return (
    <div>
        <section class="pricing py-5">
        <div class="container">
        <div class="row">
        <div class="col-lg-4">
          <Card name="FREE" money = "0" user ="Single User" storage="5" ></Card>
        </div>  
        <div class="col-lg-4">
          <Card name="PLUS" money = "9" users ="5 Users" storage="50"></Card>
        </div> 
        <div class="col-lg-4">
          <Card name="PRO" money = "49" users ="Unlimited Users" storage="150" subDomain="Unlimited"></Card>
        </div>  
        </div>
        </div>
        </section>
      </div>
      );
}

      export default App;
