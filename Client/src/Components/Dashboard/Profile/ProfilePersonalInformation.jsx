import React, { useContext } from 'react'
import { UserDetails } from '../../../Context/User'
import { Link } from 'react-router-dom';

const ProfilePersonalInformation = ({username,email}) => {
    // const { displayName, profilePhoto, email } = useContext(UserDetails);


    
    return (





        <div

            className="w-full text-sm text-mytext bg-copy_secondary border border-mytext/50 rounded-lg p-4 md:p-8 mb-4"
        >

            <div className="flex items-center justify-around gap-20 mb-2">
                <Link to="/settings/profile">
                    <div className='w-48 h-48 border border-btntext relative flex  items-center justify-center rounded-full'>
                        <img className='w-full h-full rounded-full p-2' src="https://pics.craiyon.com/2023-05-29/69d183130848490eae6fbb912c584b36.webp" alt="" />

                        {/* <span className='text-xs absolute bottom-0 bg-btnbackground p-1 rounded-lg'>click to changes</span> */}

                    </div>

                </Link>
                <div >
                    <p className="text-base font-semibold leading-none text-mytext">
                        {/* {displayName ? displayName : "Kaisen user"} */}
                        {username}
                    </p>
                    <p className="mb-3 text-sm font-normal">
                        {/* {email ? email : "@kaisen"} */}
                        {email}
                    </p>
                    <p className="mb-4 text-sm my-text">
                        Open-source contributor.
                       
                    </p>
                    <ul className="flex text-sm">
                        <li className="me-2">
                            <a href="#" className="hover:underline">
                                <span className="font-semibold text-mytext">
                                    79
                                </span>
                                <span>Following</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                <span className="font-semibold my-text">
                                    758
                                </span>
                                <span>Followers</span>
                            </a>
                        </li>

                    </ul>
                    <button
                        type="button"
                        className="text-btntext bg-btnbackground hover:bg-btnbackground/50 font-medium rounded-lg text-xs px-3 py-1.5"
                    >
                        Follow
                    </button>
                </div>

            </div>

        </div>







    )
}

export default ProfilePersonalInformation
