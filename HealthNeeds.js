import {View,TouchableOpacity,Text} from 'react-native'
import { Health,House,VirusIcon,Apps, } from './SvgIcons'

export default function(){
    return(
       
<View style={{flexDirection:"row",justifyContent:"space-between",}}>
    <TouchableOpacity style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <Health />
        <Text style={{alignSelf:"center"}}>Appointment</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{flexDirection:"column",alignItems:"center"}}>
        <House />
        <Text style={{alignSelf:"center"}}>Hospital</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{flexDirection:"column",alignItems:"center"}}>
        <VirusIcon />
        <Text style={{alignSelf:"center"}}>Covid 19</Text>
    </TouchableOpacity>
     <TouchableOpacity style={{flexDirection:"column",alignItems:"center"}}>
        <Apps />
        <Text style={{alignSelf:"center"}}>More</Text>
     </TouchableOpacity>
    </View>
    )
}