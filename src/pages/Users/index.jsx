
import React, { useEffect, useState } from 'react'
import { cardData } from '../../common/CardData'
import Card from '../../components/Card'
import Paginate from '../../components/Pagination'
import Table from '../../components/Table'
import { getRequest } from '../../utils/Api'
import withScrollToTop from '../../utils/WithScrollToTop.'

const Users = () => {
  const [userData, setUserData] = useState([])
  const [dataCards] = useState(cardData)

  // Table Paginate
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [records, setRecords] = useState(0);

  const fetchData = () => {
    try{
      const response = getRequest(process.env.REACT_APP_USERS_URL)
      response.then( res => {
        setUserData(res.data)
        setPageCount(userData.length/10)
        console.log(userData.length/10)
      });
    } catch(error){
      console.log(error)
    }
  }

  const handlePageClick = event => {
      setCurrentPage(event.selected + 1);
};

  const headings = [
    'Organization', 'username', 'email', 'phone number', 'date joined', 'status'
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

        <Paginate pageCount={pageCount} setPageCount={setPageCount} records={userData} />

    </div>
  )
}

export default withScrollToTop(Users)