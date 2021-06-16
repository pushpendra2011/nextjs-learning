import {useRouter} from 'next/router'
import {MongoClient, ObjectId} from 'mongodb'
import MeetupDetails from '../../components/meetupDetails'
function DetailsPage(props) {
    console.log('detials',props)
    return <MeetupDetails title={props.meetupData.title} url={props.meetupData.imgUrl}
    details={props.meetupData.details}
    ></MeetupDetails>
    }
export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://pushpendray2011:mypassword@cluster0.wy8gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const db = client.db();
    const meetupCollection = db.collection('meetups')
    const meetups = await meetupCollection.find({}, {_id:1}).toArray()
    console.log('/////meetups/////', meetups)
    return {
        fallback: false,
        paths: meetups.map(meetup=>({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log('meetupId', meetupId)
    const client = await MongoClient.connect('mongodb+srv://pushpendray2011:mypassword@cluster0.wy8gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const db = client.db();
    const meetupCollection = db.collection('meetups')
    // console.log('##############################',await meetupCollection.find().toArray())
    const selectedMeetup = await meetupCollection.findOne({ _id: ObjectId(meetupId)});
    client.close()
    console.log('*****selectedID*******', selectedMeetup)
    return {
        props: {
            meetupData:{
                title: selectedMeetup.title,
                imgUrl: selectedMeetup.imgUrl,
                details: selectedMeetup.details
        }
    }
}}
export default DetailsPage;