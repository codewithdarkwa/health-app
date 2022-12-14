import {View, Text,Image,ScrollView, SafeAreaView} from 'react-native'
import { TouchableOpacity } from 'react-native'
import {FontAwesome5,Feather} from 'react-native-vector-icons'
import {Divider} from 'react-native-elements'
import HealthNeeds from './HealthNeeds'

const Home = ()=>{

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
            src:require('./assets/images/pexels-anna-shvets-4167541.jpg'),
            name:"dr Skylar Korsgaard",
            job:"General Practioner"
        },
        {
            id:2,
            src:require('./assets/images/bruno-rodrigues-279xIHymPYY-unsplash.jpg'),
            name:"dr Adison Schieifer",
            job:"Dental Specialist"
        },
        {
            id:3,
            src:require('./assets/images/luke-jones-CEFYNiM9xLk-unsplash.jpg'),
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
                <Text style={{color:"grey"}}>How are you feeling today ?</Text>
            </View>
            <View style={{flexDirection:"row",padding:15}}>
                <TouchableOpacity>
                <FontAwesome5 name="bell" size={22} style={{margin:5,padding:12,borderRadius:'100%',borderWidth:0.5}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <FontAwesome5 name="search" size={22} style={{margin:5,padding:12,borderRadius:'100%',borderWidth:0.5}}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{
            width:"90%",
            height:180,
            backgroundColor:"indigo",
            marginTop:20,
            alignSelf:"center",
            borderRadius:15,
            margin:15
            }}>
          <View>
            <View style={{padding:15,flexDirection:"row",alignItems:"center",}}>
              <Image 
               style={{width:60,height:60,margin:15,borderRadius:5}}
              source={require('./assets/images/bruno-rodrigues-279xIHymPYY-unsplash.jpg')}/>
            <View>
           <Text style={{color:"#fff", fontSize:20}}>dr. Ruben Dorwart</Text>
           <Text style={{color:"#fff"}}>Dental Specialist</Text>
            </View>
            </View>
           <TouchableOpacity style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"grey",
            width:"70%",
            padding:5,
            borderRadius:30,
            left:50
            }}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <FontAwesome5 name="calendar" size={24} color="#fff" />
            <Text style={{color:"#fff",marginLeft:7}}>Today</Text>
            </View>
            <FontAwesome5 name="clock" size={17} color="#fff" style={{marginLeft:7}}/>
            <Text style={{color:"#fff",marginLeft:10}}>14:30 - 15:30AM</Text>
           </TouchableOpacity>
           <View>
           </View>
          </View>
        </View>
            <Text style={{fontSize:20,fontWeight:"600",margin:15}}>Health Needs</Text>
        <View style={{margin:10}}>
           {/* Health Needs*/}
           <HealthNeeds />
            <View style={{margin:20,right:20}}>
                <Text style={{fontSize:20,fontWeight:"500"}}>Nearby Doctor</Text>
                {
                    doctors.map((doctor,i) =><Doctor  key={i} doctor={doctor}/>)
                }
            </View>
            
        </View>
        </ScrollView>
            <Divider width={0.5}/>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                {
                    bottomIcons.map((icon, i) => <BottomIcons key={i} icon={icon}/>)
                }
            </View>
            </SafeAreaView>
    )
}

export default  Home;


const Doctor = ({doctor}) => {
    return(
        <View style={{flexDirection:"row",margin:5}}>
            <Image 
             style={{width:90, height:90, borderRadius:10, }}
            source={doctor.src}/>
            <View style={{padding:10,justifyContent:"space-around"}}>
            <Text style={{ fontSize:20}}>{doctor.name}</Text>
            <Text style={{color:"grey",fontSize:15}}>General Practioner</Text>
            <Text>??? 4.0  (<Text style={{color:"grey"}}>191 Reviews</Text>)</Text>
            </View>
        </View>
    )
}

const BottomIcons = ({icon})=> (
   <TouchableOpacity style={{margin:10}}>
    <Feather name={icon.icon} size={30} color={icon.color}/>
   </TouchableOpacity>
)