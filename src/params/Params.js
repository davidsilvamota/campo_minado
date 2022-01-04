import { Dimensions } from "react-native";

const params = {
    blockSize: 30,
    borderSize:5,
    fonteSize:15,
    headerRatio:0.15, //proporção do painel superior na tela
    difficultLevel:0.1,
    
    getColumnsAmount(){
        const width = Dimensions.get("window").width
        return Math.floor(width/params.blockSize)
    },
    getRownsAmount(){
        const totalHeigth = Dimensions.get("window").height
        const borderHeigth = totalHeigth * ( 1 - params.headerRatio)
        return Math.floor(borderHeigth/params.blockSize)
    }
}
export default params