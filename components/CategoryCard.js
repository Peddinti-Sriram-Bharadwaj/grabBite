import { View, Text, TouchableOpacity, Image } from 'react-native'

const CategoryCard = ({imgUrl, title }) => {
  return (
    <TouchableOpacity >
        <Image 
        source = {{
            uri: imgUrl,
        }}
        className= 'h-20 w-20 mx-1 rounded'
        
        /> 
        <View>
            <Text className = 'absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
        </View>

    </TouchableOpacity>

  )
}

export default CategoryCard