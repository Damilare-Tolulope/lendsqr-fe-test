
import { useEffect, useState } from 'react'
import { cardData } from '../../common/CardData'
import Card from '../../components/Card'
import Table from '../../components/Table'
import { getRequest } from '../../utils/Api'
import withScrollToTop from '../../utils/WithScrollToTop.'

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [dataCards] = useState(cardData);

  const fetchData = () => {
    try{
      const response = getRequest(process.env.REACT_APP_USERS_URL)
      response.then( res => {
        setUserData(res.data)
      });
    } catch(error){
      console.log(error)
    }
  }


  const headings = [
    'Organization', 'username', 'email', 'phone number', 'date joined',
  ]


  useEffect(() => {
    fetchData()
  }, [])

  
  return (
    <div>
      <h2>Users</h2>

      <div className='dataCards'>
        {dataCards.map((dataCard, index) => {
          return <Card key={index} dataOptions={dataCard} />
        })}
      </div>

      <div>
        <Table headings={headings} bodyData={userData} />
      </div>

    </div>
  )
}

export default withScrollToTop(Users)