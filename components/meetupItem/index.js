import { Card, Col, Row } from 'antd';
import Image from 'next/image'
import {useRouter} from 'next/router'
function MeetupCard({meetupInfo}) {
  const router = useRouter(); 
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
    const { Meta } = Card;
    
  const handleShowDetails = (val) => {
    router.push(`/${val}`)
  }
    return <div className="site-card-wrapper">
    <Row gutter={16}>
      {
        meetupInfo.map((item)=><Col key={item.id} span={8}>
        <Card onClick={()=>handleShowDetails(item.id)} hoverable cover={<img alt="example" src={item.url} />} title={item.title}>
          {item.details}
        </Card>
      </Col>)
      }
   
   

    </Row>
  </div>
     
}

export default MeetupCard