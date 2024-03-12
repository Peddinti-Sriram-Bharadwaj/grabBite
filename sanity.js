import Sanity, { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: '6xxur8e1',
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-03-10"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


export default client;
