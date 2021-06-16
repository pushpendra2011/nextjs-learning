import MeetupForm from '../../components/meetupForm'
import {useRouter} from 'next/router'
function NewMeetupPage() {
    const router = useRouter();
    const meetUpInfo = async (data) => {
        const response = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const respData = await response.json()
        console.log(respData)
        router.push('/')
    }
    return <MeetupForm saveMeetupInfo = {meetUpInfo}/>
    }
    
    export default NewMeetupPage;