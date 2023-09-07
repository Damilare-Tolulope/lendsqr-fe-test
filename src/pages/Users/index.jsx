
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Table from '../../components/Table'
import { getRequest } from '../../utils/Api'
import withScrollToTop from '../../utils/WithScrollToTop.'

import img1 from '../../assets/images/icons/user.svg';
import img2 from '../../assets/images/icons/users.svg';
import img3 from '../../assets/images/icons/loans.svg';
import img4 from '../../assets/images/icons/savings.svg';
import moment from 'moment'

const Users = () => {
  const [userData, setUserData] = useState([]);

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

  const currentDate = moment();

  const headings = [
    'Organization', 'username', 'email', 'phone number', 'date joined',
  ];

  const userWithLoans = userData.filter(data => parseInt(data?.education?.loanRepayment) > 0).length
  const userWithSavings = userData.filter(data => parseInt(data?.accountBalance) > 500).length
  const activeUsers = userData.filter(data => moment(data?.lastActiveDate).diff(currentDate, 'days') > 7).length
  
  const cardData = [
    {
      icon: img1,
      title: 'Users',
      value: userData.length
    },
    {
      icon: img2,
      title: 'Active Users',
      value: activeUsers,
    },
    {
      icon: img3,
      title: 'Users with Loans',
      value: userWithLoans,
    },
    {
      icon: img4,
      title: 'Users with Savings',
      value: userWithSavings,
    }
  ];

  useEffect(() => {
    fetchData()
  }, [])

  
  return (
    <div>
      <h2>Users</h2>

      <div className='dataCards'>
        {cardData.map((dataCard, index) => {
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