import {Fragment} from 'react';
import MeetupCard from '../components/meetupItem'
import {MongoClient} from 'mongodb'
import Head from 'next/head'
function HomePage(props) {
return <Fragment>
    <Head>
        <title>Meetups page</title>
        <meta name="description" content="Browse a huge list..."></meta>
    </Head>
    <MeetupCard meetupInfo={props.meetups}></MeetupCard>
</Fragment>
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