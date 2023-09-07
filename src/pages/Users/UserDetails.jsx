import React, {useState, useEffect} from 'react'
import { SecButton } from '../../components/Button'
import noImage from '../../assets/images/no-image.svg'
import back from '../../assets/images/back.svg'
import { Link, useParams } from 'react-router-dom'
import { getRequest } from '../../utils/Api'
import { BounceLoader } from 'react-spinners'
import withScrollToTop from '../../utils/WithScrollToTop.'
import { FaStar, FaStarHalf } from 'react-icons/fa'

const UserDetails = () => {
    const { id } = useParams()
    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = () => {
        try{
          const response = getRequest(process.env.REACT_APP_USERS_URL+id)
          response.then( res => {
            setUserData(res.data)
            setIsLoading(false)
          }); 
        } catch(error){
          console.log(error)
        }
      }

      useEffect(() => {
        fetchData()
      }, [])


  return (
      <div className='userDetails'> 
    {isLoading ? 
        <div className="loader">
            <BounceLoader loading color="#213F7D" />
        </div>
    :
    <>
        <div>
            <p className='backButton'>
                <Link to="/"><img src={back} alt="back" />Back to Users</Link>
            </p>
            <div className='userDetailsHeader'>
                <h2>User Details</h2>
                <div>
                    <SecButton className='red'>Blacklist User</SecButton>
                    <SecButton className='grey'>Activate User</SecButton>
                </div>
            </div>
        </div>

        <div className='userDetailsBasicInfo'>
            <div className='userPreview'>
                <div className='userPreviewName'>
                    <img src={noImage} alt="no-img" />
                    <div>
                        <h3>{`${userData.profile.firstName} ${userData.profile.lastName}`}</h3>
                        <p>{userData.email}</p>
                    </div>
                </div>
                <div className='userTier'>
                    <p>User's Tier</p>
                    <p><FaStar /> <FaStarHalf /> <FaStarHalf /></p>
                </div>
                <div>
                    <h3>{userData.accountBalance}</h3>
                    <p>{userData.accountNumber}</p>
                </div>
            </div>
            <div className='miniNav'>
                <ul>
                    <li className='activeli'>General Details</li>
                    <li>Documents</li>
                    <li>Bank Details</li>
                    <li>Loans</li>
                    <li>Savings</li>
                    <li>App and System</li>
                </ul>
            </div>
        </div>

        {/* ======== User Details======= */}
        <div className='userOtherInfo'>
            <div className='detailsSection'>
                <h3>Personal Information</h3>
                <div className='detailsSectionGrid'>
                    <div className='detailsInfo'>
                        <span>Full name</span>
                        <p>{`${userData.profile.firstName} ${userData.profile.lastName}`}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Phone Number</span>
                        <p>{userData.profile.phoneNumber.split(' ')[0]}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Email Address</span>
                        <p>{userData.email}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>BVN</span>
                        <p>{userData.profile.bvn}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Marital Status</span>
                        <p>Single</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Children</span>
                        <p>None</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Type of residence</span>
                        <p>Parent's Home</p>
                    </div>
                </div>
            </div>
            <div className='detailsSection'>
                <h3>Education and Employment</h3>
                <div className='detailsSectionGrid'>
                    <div className='detailsInfo'>
                        <span>Level of Education</span>
                        <p>{userData.education.level}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Employment Status</span>
                        <p>{userData.education.employmentStatus}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Sector of Employment</span>
                        <p>{userData.education.sector}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Duration</span>
                        <p>{userData.education.duration}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Office email</span>
                        <p>{userData.education.officeEmail}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Monthly Income</span>
                        <p>{`N${userData.education.monthlyIncome.sort((a,b) => a-b)[0]} - ${userData.education.monthlyIncome.sort((a,b) => a-b)[1]}`}</p> 
                    </div>
                    <div className='detailsInfo'>
                        <span>Loan Repayment</span>
                        <p>{userData.education.loanRepayment}</p>
                    </div>
                </div>
            </div>
            <div className='detailsSection'>
                <h3>Socials</h3>
                <div className='detailsSectionGrid'>
                    <div className='detailsInfo'>
                        <span>Twitter</span>
                        <p>{userData.socials.facebook}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Facebook</span>
                        <p>{userData.socials.facebook}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Instagram</span>
                        <p>{userData.socials.facebook}</p>
                    </div>
                </div>
            </div>
            <div className='detailsSection'>
                <h3>Guarantor</h3>
                <div className='detailsSectionGrid'>
                    <div className='detailsInfo'>
                        <span>Full Name</span>
                        <p>{`${userData.guarantor.firstName} ${userData.guarantor.lastName}`}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Phone Number</span>
                        <p>{userData.guarantor.phoneNumber.split(' x')[0]}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Email Address</span>
                        <p>{`${userData.guarantor.firstName}@gmail.com`}</p>
                    </div>
                    <div className='detailsInfo'>
                        <span>Relationship</span>
                        <p>{userData.guarantor.gender === "Male" ? "Uncle" : "Aunt"}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    }
    </div>
  )
}

export default withScrollToTop(UserDetails)