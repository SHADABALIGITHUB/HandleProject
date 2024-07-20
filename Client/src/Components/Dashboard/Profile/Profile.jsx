import React,{useEffect,useState,useContext} from 'react'
import ProfilePersonalInformation from './ProfilePersonalInformation'
import { UserDetails } from '../../../Context/User'
import ProfileReadmeFile from './ProfileReadmeFile'
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const { displayName } = useContext(UserDetails);
    const history = useNavigate();


    console.log(displayName);


    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await fetch(`http://localhost:3000/profile/${username}`);
            if (!response.ok) {
              // throw new Error('Network response was not ok');
              history('*');
            }
            const data = await response.json();
             setUser(data);
          } catch (err) {
             console.log(err);
          }
        };
    
        fetchUser();
      }, [username]);
    return (
        <div className={`container mx-auto gap-10 p-4 font-serif flex justify-center items-center font-bold text-mytext`}>
            <div className="bg-copy_secondary min-w-[90%] md:min-w-[50%] rounded px-4 md:px-8 pt-6 pb-8 mb-4">
                <ProfilePersonalInformation username={user?user.username:"No found"} email={user?user.email:"No email"} />

                <ProfileReadmeFile />




                
                   
                </div>

            </div>


       
    )
}

export default Profile
