import {View, Text,Image,ScrollView, SafeAreaView} from 'react-native'
import { TouchableOpacity } from 'react-native'
import {FontAwesome5,Feather} from 'react-native-vector-icons'
import {Divider} from 'react-native-elements'

const HeaderTab = ()=>{

    const icons = [
        {
            id:1,
            src:require('./assets/belling/pexels-anna-shvets-4167541.jpg'),
            title:"Appointement"
        },
        {
            id:2,
            src:require('./assets/belling/luke-jones-CEFYNiM9xLk-unsplash.jpg'),
            title:"Hospital"
        },
        {
            id:3,
            src:require('./assets/belling/luke-jones-CEFYNiM9xLk-unsplash.jpg'),
            title:"Covid 19"
        },
        {
            id:4,
            src:require('./assets/belling/luke-jones-CEFYNiM9xLk-unsplash.jpg'),
            title:"More"
        },
    ]
    const bottomIcons = [
            {
                id:1,
                icon: "home",
                color:'blue'
            }, 
            {
                id:2,
                icon: "calendar",
                color:'grey'
            },  
            {
                id:3,
                icon: "message-circle",
                color:'grey'
            },
            {
                id:2,
                icon: "user",
                color:'grey'
            },

    ]
    const doctors = [
        {
            id:1,
            src:require('./assets/belling/pexels-anna-shvets-4167541.jpg'),
            name:"dr Skylar Korsgaard",
            job:"General Practioner"
        },
        {
            id:2,
            src:require('./assets/belling/bruno-rodrigues-279xIHymPYY-unsplash.jpg'),
            name:"dr Adison Schieifer",
            job:"Dental Specialist"
        },

    ]

    return(
        <SafeAreaView style={{flex:1}}>
        <ScrollView>
        <View style={{marginTop:30,flexDirection:"row",alignItems: "center",justifyContent:"space-around"}}>
            <View>
                <Text style={{fontSize:20,fontWeight:"600"}}>Hi, Jane</Text>
                <Text>How are you feeling today ?</Text>
            </View>
            <View style={{flexDirection:"row",padding:15}}>
                <FontAwesome5 name="bell" size={22} style={{margin:10}}/>
                <FontAwesome5 name="search" size={22} style={{margin:10}}/>
            </View>
        </View>
        <View style={{width:"90%",height:180,backgroundColor:"indigo",marginTop:50,alignSelf:"center",borderRadius:15}}>
          <View>
            <View style={{padding:15,flexDirection:"row",alignItems:"center",}}>
              <Image 
               style={{width:60,height:60,margin:15,borderRadius:5}}
              source={require('./assets/belling/bruno-rodrigues-279xIHymPYY-unsplash.jpg')}/>
            <View>
           <Text style={{color:"#fff", fontSize:20}}>dr. Ruben Dorwart</Text>
           <Text style={{color:"#fff"}}>Dental Specialist</Text>
            </View>
            </View>
           <TouchableOpacity style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginLeft:10}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",}}>
            <FontAwesome5 name="calendar" size={24} color="#fff"/>
            <Text style={{color:"#fff"}}>Today</Text>
            </View>
            <FontAwesome5 name="clock" size={17} color="#fff"/>
            <Text style={{color:"#fff"}}>14:30 - 15:30AM</Text>
           </TouchableOpacity>
           <View>
           </View>
          </View>
        </View>
        <View style={{margin:20}}>
            <Text style={{fontSize:20,fontWeight:"600"}}>Health Needs</Text>
            <View style={{flexDirection:"row",margin:7,justifyContent:"space-around"}}>
            {
                icons.map((icon,i)=>(
                    <IconButton key={i} icon={icon}/>
                ))
            }

            </View>
            <View style={{margin:20,right:20}}>
                <Text style={{fontSize:20,fontWeight:"500"}}>Nearby Doctor</Text>
                {
                    doctors.map((doctor,i) =>(
                        <Doctor  key={i} doctor={doctor}/>
                    ))
                }
            </View>
        </View>
        </ScrollView>
            <Divider width={0.5}/>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                {
                    bottomIcons.map((icon, i) =>(
                        <BottomIcons key={i} icon={icon}/>
                    ))
                }
            </View>
            </SafeAreaView>
    )
}

export default  HeaderTab;



const IconButton = ({icon}) =>(
    <TouchableOpacity>
        <Image 
        style={{width:60, height:60, borderRadius:30}}
        source={icon.src}/>
        <Text style={{alignSelf:"center"}}>{icon.title}</Text>
    </TouchableOpacity>
)

const Doctor = ({doctor}) => {
    return(
        <View style={{flexDirection:"row",alignItems: "center",margin:5}}>
            <Image 
             style={{width:90, height:90, borderRadius:10,margin:10 }}
            source={doctor.src}/>
            <View>
            <Text style={{ fontSize:20}}>{doctor.name}t</Text>
           <Text style={{}}>General Practioner</Text>
            </View>
        </View>
    )
}

const BottomIcons = ({icon})=> (
   <TouchableOpacity style={{margin:10}}>
    <Feather name={icon.icon} size={27} color={icon.color}/>
   </TouchableOpacity>
)