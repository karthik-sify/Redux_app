import { Button, Text, View } from "react-native";
import {connect} from 'react-redux';
import { buyIceCream } from "./IcereamAction";
import { useState } from "react";

const IceCream=(props)=>{
    const[cakeValue,setCakeValue]=useState(2); //get input from user
    return(
        <View>
        <Text>No Of IceCream: {props.noOfIceCream}</Text>
        <Button onPress={()=>props.buyIceCream(cakeValue)} title="buy IceCream"></Button>
        </View>
    );
};

const mapStateToProps=state=>{
    return{
        noOfIceCream:state.iceCreamState.noOfIceCream
    }
}

const mapDispatchToProps=dispatch=>{
    return{  //returs object buyIceCream which accepts number and dispatches buyIceCream() function
        buyIceCream:(number)=>dispatch(buyIceCream(number))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(IceCream)