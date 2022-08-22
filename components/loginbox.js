import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'


function Loginbox() {

    const { data: session } = useSession();
 
    if (session) {
        return (
            <div>
                <p>Welcome, {session.user.email}</p>
                <img src={session.user.image} alt="user image" />
                <button onClick={() => signOut()}>Sign out</button>
            </div>
          )
    } else {
        return (
            <div>
                <p>You aint signed in buddy</p>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
          )
    }
  
  
}

export default Loginbox