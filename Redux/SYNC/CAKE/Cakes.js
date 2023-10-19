import { Button, Text, View } from "react-native";
import {connect} from 'react-redux';
import { buyCake } from "./CakeAction";

const Cakes=(props)=>{
    return(
        <View>
        <Text>No Of Cakes: {props.noOfCakes}</Text>
        <Button onPress={props.buyCake} title="buy cake"></Button>
        </View>
    );
};

const mapStateToProps=state=>{
    return{
        noOfCakes:state.cakeState.noOfCakes
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Cakes)