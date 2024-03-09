import { createSchema } from 'sanity'

import category from './category'
import restaurant from './restaurant'
import dish from './dish'
import featured from './featured'


export const schemaTypes = [restaurant, dish, category,featured]

export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        restaurant,
        category,
        dish,
        featured
    ])
})
