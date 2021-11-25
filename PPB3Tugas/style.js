import { StyleSheet, StatusBar } from "react-native";

const style=StyleSheet.create({
    // page
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        margin:5
    },
    cardWarp: {
        flex:1,
        justifyContent:"center", 
    },
    generalImage: {
        flex:1,
        width:30,
        height:30,
        resizeMode:'contain'
    },

    // pembagian layar
    line1 : {
        flex:1,
        flexDirection:"row",
        alignItems:"center",
    },
    line2 : {
        flex:2,
        flexDirection:"row",
        alignItems:"center",
        marginLeft:18
    },
    line3 : {
        flex:2,
        alignItems:"flex-start",
        marginLeft:15
    },
    line4 : {
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        marginLeft:15
    },
    line5 : {
        flex:1, 
        flexDirection:"row",
        marginLeft:15
    },
    line6 : {
        flex:2,
        flexDirection:"row",
        marginLeft:15,
        alignItems:"center"
    },
    line7 : {
        flex:1,
        flexDirection:"row",
        borderBottomWidth:1/2,
        borderColor:"grey"
    },
    line8 : {
        flex:2,
        flexDirection:"row",
    }, 
    
    // 1st line
    username : {
        flex:2,
        textAlign:"left",
        fontSize:20,
        fontWeight:"bold",
        color:"black"
    },
    image1stLock: {
        flex:1,
        width:30,
        height:30,
        resizeMode:'contain'
    },
    image1stArrowDown: {
        flex:1,
        width:20,
        height:20,
        resizeMode:'contain',
    },
    image1stTambah: {
        flex:1,
        width:30,
        height:30,
        resizeMode:'contain',
    },
    image1stList: {
        flex:1,
        width:30,
        height:30,
        resizeMode:'contain'
    },

    // 2nd line
    image2nd: {
        flex:1,
        width:90,
        height:90,
        borderRadius:200/2,
        resizeMode:'contain'
    },
    angka2nd: {
        fontSize:15, 
        fontWeight:"bold",
        color:"black",
        textAlign:"center"
    },
    tulisan2nd: {
        fontSize:15, 
        fontWeight:"bold",
        textAlign:"center",
    },

    // 3rd line
    deskripsi: {
        fontSize:15, 
        fontWeight:"bold",
        color:"black",
        textAlign:"center"
    },  

    // 4th line
    button: {
        alignItems: 'center',
        flex:4,
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        borderWidth:1,
        backgroundColor: 'white',
    },
    people4th: {
        flex:1,
        alignItems:"center",
        justifyContent: 'center',
        borderRadius: 4,
        width:20,
        height:46,
        elevation: 3,
        borderWidth:1,
        margin:5,
        backgroundColor: 'white',
    },

    // 5th line
    teks5Line: {
        flex:4,
        alignItems:"flex-start"
    },
    image5thArrowUp: {
        flex:1,
        width:10,
        height:15,
        resizeMode:'contain',
    },

    // 6th line
    cardStory: {
        flex:1,
        width:70,
        height:70,
        borderRadius:200/2,
        resizeMode:'contain',
        marginLeft:10,
        marginRight:10
    },

    // 7th line
    sevenThImage: {
        width:20,
        height:20,
        resizeMode:'contain',
        marginTop:30,
    },
    post: {
        flex:1,
        alignItems:"center",
        borderBottomWidth:1
    },
    tagged: {
        flex:1,
        alignItems:"center"
    },

    // 8th line
    cardPost: {
        flex:1,
        width:100,
        height:100,
        resizeMode:'contain',
        margin:10
    }
});

export {style};