import { useState, useEffect } from 'react';

import { View, Text, ScrollView} from 'react-native';
import CategoryCard from '../components/CategoryCard'
import createClient, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    createClient.fetch(`
    *[_type == 'category']`)
    .then ( ( data) => {
      setCategories(data)
    })
  },[])

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        justifyContent: 'space-evenly'
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
          style={{ margin:10, width:200 }} // Add margin right here
        />
      ))}
    </ScrollView>
  );
}

export default Categories