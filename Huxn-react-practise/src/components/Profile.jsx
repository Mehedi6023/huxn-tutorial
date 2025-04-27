import React, { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        age: ''
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setProfile((pre) => ({
            ...pre, [name]: value

        }))
    }
  return (
    <div>
        <h1>Profile</h1>
        <form>
            <label>
                Name:
                <input type="text" placeholder='Enter your name' onChange={handleChange} name='name' value={profile.name} />
            </label>
            <label>
                Age:
                <input type="number" placeholder='Enter your age' onChange={handleChange} name='age' value={profile.age} />
            </label>
        </form>

        <div>
            <h1>Profile Info</h1>
            <h3>Name: {profile.name}</h3>
            <h3>Age: {profile.age}</h3>
        </div>
    </div>
  )
}

export default Profile

