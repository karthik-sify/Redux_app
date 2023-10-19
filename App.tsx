import { View } from "react-native";

import Cakes from './Redux/SYNC/CAKE/Cakes';
import IceCream from "./Redux/SYNC/ICECREAM/IceCream";
import News from './Redux/ASYNC/News';
import { Provider } from "react-redux";  //to connect react and redux 
import store1 from "./Redux/SYNC/Store";
import store2 from "./Redux/ASYNC/Store";

const App = () => {

  return (
    <Provider store={store2}>
      <View style={{flex:1,backgroundColor:'white',padding:10}}>
        {/* <Cakes></Cakes>
        <IceCream></IceCream> */}
        <News ></News>
      </View>
    </Provider>
  );
};

export default App;