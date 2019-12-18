import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import axios from "axios";
import Styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export default class CheckProduct extends Component {
  static navigationOptions = {
    title: "Scan Result"
  };
  state = {
    loading: true,
    productInfo: null,
    notFound: false
  };

  componentDidMount() {
    const camData = this.props.navigation.getParam("data");
    this.searchFromApi(camData);
  }

  searchFromApi = data => {
    console.log("cam data: ", data);
    axios
      .post("https://product-sergeant-api.herokuapp.com/products/find", {
        upc: data
      })
      .then(data => {
        if(data.data.product){
          this.setState({
            ...this.state,
            productInfo: data.data.product,
            loading: false
          });
        }else{
          this.setState({...this.state, notFound: true, loading: false}, () => console.log(data))
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const { productInfo } = this.state;
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}
        >
          <ActivityIndicator
            animating={true}
            color={Colors.red800}
            size="large"
          />
        </View>
      );
    }
    if(this.state.notFound){
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
          <View> 
            <Text style={{fontSize: 16,fontWeight: "bold", textAlign: 'center' }}>Product Not Found</Text>
          </View>
          </View>
      )
    }
    return (
      <Container>
        <ViewCard>
            <Text style={[styles.Btext]}>{productInfo.name}</Text>
          <Text style={{textAlign: 'center'}}>Brand: {productInfo.brand}</Text>
          <Text style={{textAlign: 'center'}}>Origin: {productInfo.origin}</Text>
          <Text style={{textAlign: 'center'}}>Vendor:  {productInfo.vendor}</Text>
          <Text style={{textAlign: 'center'}}>exp: {productInfo.expiry_date}</Text>
          {productInfo.scanned ? (<View style={{marginTop: 19, backgroundColor: "red", marginBottom: 4, padding: 19}}>
            <Text>The product has been scanned multiple times(try to avoid)</Text>
          </View>) : (
            <View style={{marginTop: 19, backgroundColor: "green", marginBottom: 4, padding: 19}}>
              <Text style={{textAlign: 'center',  color: "#fff"}}>This product is authenic</Text>
            </View>
          )}
        </ViewCard>
      </Container>
    );
  }
}

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  shadow-color: grey;
  shadow-opacity: 0.48;
  shadow-radius: 11.95;
  elevation: 18;
`;

const ViewCard = Styled.View`
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 50%;
  background-color: #ffffff;
  shadow-color: grey;
  shadow-opacity: 0.48;
  shadow-radius: 11.95;
  elevation: 18;
`;

const styles = StyleSheet.create({
  Btext: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    alignSelf: 'stretch',
    textAlign: 'center'
  }
});
