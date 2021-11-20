import { StyleSheet } from "react-native";

const style=StyleSheet.create({
    // container
    container: {
        backgroundColor:"white",
        marginLeft:10,
        marginRight:10
    },

    // perbagian
    bagianAtas: {
        flexDirection:"row"
    },
    // bagiantengah: {
    //     flexDirection:"row",
    //     alignItems:"flex-start"
    // },
    bagianBawah: {
        flexDirection:"row",
        alignItems:"baseline"
    },

    // gambar
    igLogo: {
        marginRight:50,
        width:100,
        height:50
        
    },
    tambahPost: {
        marginLeft:70,
        width:30,
        height:50
    },
    aktivitas: {
        marginLeft:20,
        width:30,
        height:50
    },
    dm: {
        marginLeft:20,
        width:30,
        height:50
    },
    home: {
        margin:20,
        marginEnd:30,
        width:30,
        height:null
    },
    search: {
        margin:20,
        marginEnd:30,
        width:30,
        height:null
    },
    video: {
        margin:20,
        marginEnd:30,
        width:30,
        height:null
    },
    shop: {
        margin:20,
        marginEnd:30,
        width:30,
        height:null
    },
    acoount: {
        margin:20,
        width:30,
        height:null,
    },
    image: {
        flex:1,
        width:null,
        height:null,
        resizeMode:'contain'
    },
    imageAccount: {
        flex:1,
        width:40,
        marginTop:35,
        height:null,
        borderRadius: 400/2,
        resizeMode:'contain', 
    }
});

export {style};