import React, { useRef, useState } from 'react'
import more from '../assets/images/icons/more.svg'
import filter from '../assets/images/icons/filter.svg'
import moment from 'moment'
import { usePopper } from 'react-popper'
import { Link } from 'react-router-dom'

const Table = ({headings, bodyData}) => {
        const [popperElement, setPopperElement] = useState(null);
        const [referrenceElement, setReferrenceElement] = useState(null);
        const { styles, attributes } = usePopper(referrenceElement, popperElement, { placement: "bottom-end" });
    
        const [isOpen, setIsOpen] = useState(false);
        const domNode = useRef();
        // useOnClickOutside(domNode, () => {
        //     setIsOpen(false);
        // });
    
        // const navigate = useNavigate();
    
        const [showModal, setshowModal] = useState(false);
        const open = () => {
            document.body.style.overflow = "hidden";
            setshowModal(true);
        };
        const close = e => {
            setshowModal(false);
            document.body.style.overflow = "scroll";
        };
        // return (
        //     <span onClick={() => setIsOpen(prev => !prev)} style={{ position: "relative" }}>
        //         <div className="three-dot" ref={setReferrenceElement}>
        //             <span className="three-dot">
        //                 <FaEllipsisH />
        //             </span>
        //         </div>
        //         {showModal && <Modal close={close} modalJsx={<UploadPhotoModal close={close} img1={value} />} heading_text="Documents" />}
    
        //         {isOpen && (
        //             <div ref={domNode}>
        //                 <ul
        //                     className="ra absolute z-20 bg-white shadow-lg rounded-md"
        //                     ref={setPopperElement}
        //                     {...attributes.popper}
        //                     style={{ ...styles.popper, position: "absolute", zIndex: "30", background: "#fff", marginTop: "1rem", padding: "1rem" }}>
        //                     {/* <li className="mb-1">
        //                     <span className="hard" onClick={ () => {
        //                        navigate("/investors/a")
        //                     }}><img src={eye} alt="eyeIcon"/>VIEW DETAILS</span>
        //                 </li> */}
        //                     <li className="mb-1">
        //                         <span
        //                             className="hard"
        //                             onClick={() => {
        //                                 open();
        //                             }}>
        //                             {" "}
        //                             <img src={eye} alt="emailIcon" />
        //                             VIEW DOCS
        //                         </span>
        //                     </li>
        //                     <li className="mb-1">
        //                         <span className="hard">
        //                             <img src={double_arrow} alt="eyeIcon" />
        //                             APPROVE
        //                         </span>
        //                     </li>
        //                     <li className="mb-1">
        //                         <span className="hard">
        //                             <img src={cross} alt="eyeIcon" />
        //                             REJECT
        //                         </span>
        //                     </li>
        //                 </ul>
        //             </div>
        //         )}
        //     </span>
        // );

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
                            <Link to={`/${id}`}>
                            <tr key={id}>
                                <td>{orgName}</td>
                                <td>{userName}</td>
                                <td>{email}</td>
                                <td>{phoneNumber}</td>
                                <td>{moment(createdAt).format('lll')}</td>
                                <td>Pending</td>
                                <td><img ref={setReferrenceElement} src={more} alt="more" /></td>
                            </tr>
                            </Link>
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