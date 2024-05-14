import {createClient} from '@sanity/client'
import imageUelBuilder from '@sanity/image-url'

const client = createClient({
    projectId: 'fqplo8ay',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-06-12'
})

const builder = imageUelBuilder(client);
export const urlFor = (source) => builder.image(source)

export default client