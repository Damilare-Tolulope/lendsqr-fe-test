import React, { useRef, useState } from 'react'
import more from '../assets/images/icons/more.svg'
import filter from '../assets/images/icons/filter.svg'
import moment from 'moment'
import { usePopper } from 'react-popper'
import { Link, useNavigate } from 'react-router-dom'

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

  return (
    <>
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
                    bodyData.map(({orgName, userName, email, phoneNumber, createdAt, id }, index) => {
                        return (
                            <tr onClick={() => navigate(`/${id}`)} key={id}>
                                <td>{orgName}</td>
                                <td>{userName}</td>
                                <td>{email}</td>
                                <td>{phoneNumber}</td>
                                <td>{moment(createdAt).format('lll')}</td>
                                <td>Pending</td>
                                <td><img ref={setReferrenceElement} src={more} alt="more" /></td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    }
    <div ref={setPopperElement} {...attributes.popper}
        style={{ ...styles.popper, position: "absolute", zIndex: "30", background: "#fff", marginTop: "1rem", padding: "1rem" }}
    >
        Popper Element
    </div>
    </>
  )
}

export default Table