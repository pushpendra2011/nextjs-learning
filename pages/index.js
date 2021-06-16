import MeetupCard from '../components/meetupItem'
import {MongoClient} from 'mongodb'
const MEET_INFO = [
    {id:"1",
    title:"meet up 1",
    url:"https://images.trvl-media.com/hotels/1000000/850000/848900/848864/bd3cade4.jpg",
    details:"lorem ipsum"
    },
    {id:"2",
    title:"meet up 2",
    url:"https://images.trvl-media.com/hotels/1000000/850000/848900/848864/bd3cade4.jpg",
    details:"lorem ipsum 2"
    }
]

function HomePage(props) {
return <MeetupCard meetupInfo={props.meetups}></MeetupCard>
}
export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://pushpendray2011:mypassword@cluster0.wy8gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const db = client.db();
    const meetupCollection = db.collection('meetups')
    const meetups = await meetupCollection.find().toArray()
    console.log('****************',meetups)
    client.close()

    return {    
        props: {
            meetups: meetups.map(({title, imgUrl, _id})=>({
                title,
                url: imgUrl,
                id: _id.toString()
            }))
            // meetups: MEET_INFO
        }
    }
}

export default HomePage;