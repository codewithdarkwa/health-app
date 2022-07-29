import {View, Text,Image,ScrollView, SafeAreaView} from 'react-native'
import { TouchableOpacity } from 'react-native'
import {FontAwesome5,Feather} from 'react-native-vector-icons'
import {Divider} from 'react-native-elements'
import  Svg,{Path} from 'react-native-svg'

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
                <TouchableOpacity>
                <FontAwesome5 name="bell" size={22} style={{margin:5,padding:12,borderRadius:'100%',borderWidth:0.5}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <FontAwesome5 name="search" size={22} style={{margin:5,padding:12,borderRadius:'100%',borderWidth:0.5}}/>
                </TouchableOpacity>
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
  {/* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={50} height={50}>
            <Path fill="#E8E8E8" d="M10.199 166.175h403.95v313.931H10.199z" />
            <Path fill="#F07057" d="M343.749 31.894H82.91L10.199 166.175h403.954z" />
            <Path fill="#84B3D2" d="M156.772 318.521h110.804v161.586H156.772z" />
            <Path
              fill="#F07057"
              d="M402.784 300.203c-14.987 11.968-40.611 20.003-69.912 20.491a86.593 86.593 0 0 0-4.558 27.741c0 81.231 86.743 131.515 86.743 131.515s86.744-50.283 86.744-131.514a86.582 86.582 0 0 0-4.556-27.734c-29.549-.396-55.416-8.466-70.493-20.521-6.975-5.576-16.99-5.55-23.968.022z"
            />
            <Path d="M46.341 337.311c-5.633 0-10.199 4.567-10.199 10.199v3.396c0 5.632 4.566 10.199 10.199 10.199s10.199-4.567 10.199-10.199v-3.396c0-5.633-4.567-10.199-10.199-10.199zm0 32.266c-5.633 0-10.199 4.567-10.199 10.199v67.081c0 5.632 4.566 10.199 10.199 10.199s10.199-4.567 10.199-10.199v-67.081c0-5.632-4.567-10.199-10.199-10.199z" />
            <Path d="M506.909 317.442a10.2 10.2 0 0 0-9.527-6.939c-26.358-.354-50.38-7.19-64.261-18.289a28.88 28.88 0 0 0-8.769-4.791V166.175a10.14 10.14 0 0 0-1.165-4.724c-.002-.004.001-.008-.001-.012l-.052-.1-.02-.039-70.332-134.141a10.198 10.198 0 0 0-9.032-5.463H82.911a10.2 10.2 0 0 0-8.968 5.342L1.251 161.279A10.163 10.163 0 0 0 0 166.175v313.929c0 5.632 4.566 10.199 10.199 10.199h403.953c.746 0 1.47-.085 2.169-.237a10.194 10.194 0 0 0 3.85-1.293c.936-.543 23.203-13.571 45.635-37.078C496.027 420.029 512 384.322 512 348.436a96.744 96.744 0 0 0-5.091-30.994zM88.987 42.094h248.594l59.708 113.881H27.321L88.987 42.094zm-68.589 134.28h383.554v111.543c-2.669 1.045-5.218 2.467-7.533 4.316-13.774 11.001-37.594 17.828-63.719 18.264a10.198 10.198 0 0 0-9.493 6.938 96.766 96.766 0 0 0-5.093 31.001c0 35.887 15.973 71.593 46.192 103.26 6.705 7.026 13.392 13.109 19.502 18.21H277.774V318.524c0-5.632-4.566-10.199-10.199-10.199H156.776c-5.633 0-10.199 4.567-10.199 10.199v151.382H20.398V176.374zm146.577 293.531V328.723h90.401v141.182h-90.401zm248.083-2.052c-17.906-12.008-76.545-56.173-76.545-119.417 0-6.022.707-11.993 2.106-17.827 27.857-1.635 52.532-9.661 68.529-22.435 3.267-2.608 7.99-2.619 11.234-.025 15.867 12.686 41.302 20.891 69.118 22.485a76.336 76.336 0 0 1 2.101 17.804c.001 63.247-58.648 107.414-76.543 119.415z" />
          </Svg> */}
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