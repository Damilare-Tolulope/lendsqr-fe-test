import React, { useRef, useState } from 'react'
import more from '../assets/images/icons/more.svg'
import filter from '../assets/images/icons/filter.svg'
import moment from 'moment'
import { usePopper } from 'react-popper'
import { Link, useNavigate } from 'react-router-dom'
import Pagination from './Pagination'

const Table = ({headings, bodyData}) => {
        const [popperElement, setPopperElement] = useState(null);
        const [referrenceElement, setReferrenceElement] = useState(null);
        const { styles, attributes } = usePopper(referrenceElement, popperElement, { placement: "bottom-end" });
    
        const [isOpen, setIsOpen] = useState(false);
        const domNode = useRef();
        const [showModal, setshowModal] = useState(false);

        const navigate = useNavigate();
    
        const open = () => {
            document.body.style.overflow = "hidden";
            setshowModal(true);
        };
        const close = e => {
            setshowModal(false);
            document.body.style.overflow = "scroll";
        };

        // Pagination

        const pageSize = 6;
        const [currentPage, setCurrentPage] = useState(1);
      
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
      
        const currentData = bodyData.slice(startIndex, endIndex);
      
        const totalPages = Math.ceil(bodyData.length / pageSize);
      
        const handlePageChange = (newPage) => {
          setCurrentPage(newPage);
        };
        

  return (
    <>
    <div>
        { !bodyData ? <p>Unable to load data</p> :  
            <table>
                <thead>
                    <tr>
                        {headings.map((head, index) => <td key={index}>{head} <img src={filter} alt="filter" /></td>)}
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentData.map(({orgName, userName, email, phoneNumber, createdAt, id }) => {
                            return (
                                <tr onClick={() => navigate(`/${id}`)} key={id}>
                                    <td>{orgName}</td>
                                    <td>{userName}</td>
                                    <td>{email}</td>
                                    <td>{phoneNumber.split(' x')[0]}</td>
                                    <td>{moment(createdAt).format('lll')}</td>
                                    <td><img ref={setReferrenceElement} src={more} alt="more" /></td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        }
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
    <div ref={setPopperElement} {...attributes.popper}
        style={{ ...styles.popper, position: "absolute", zIndex: "30", background: "#fff", marginTop: "1rem", padding: "1rem" }}
    >
        Popper Element
    </div>
    </>
  )
}

export default Table