import React from "react";
import { View, StyleSheet } from "react-native";
import params from "../params/Params";

export default function Fild(props: any) {
  const styleFild = [styles.fild];
  // outros estilos aqui
  if (styleFild.length === 1) styleFild.push(styles.regular);
  return (
    <>
      <View style={styleFild}></View>
    </>
  );
}
const styles = StyleSheet.create({
  fild: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: "#999",
    borderLeftColor: "#CCC",
    borderTopColor: "#CCC",
    borderRightColor: "#333",
    borderBottomColor: "#333",
  },
});
