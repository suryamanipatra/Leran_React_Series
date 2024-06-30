import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState([]);

    const userData = useLoaderData()
    useEffect(() => {
    //     fetch('https://api.github.com/users/suryamanipatra ')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setUserData(data);
    //         });

        fetch('https://api.github.com/users/suryamanipatra/repos')
            .then(response => response.json())
            .then(reposData => {
                console.log(reposData);
                setRepos(reposData);
            });
    }, []);

    const handleRepoChange = (event) => {
        const selectedRepoUrl = event.target.value;
        if (selectedRepoUrl) {
            window.open(selectedRepoUrl, '_blank');
        }
    };

    return (
        <div className='text-center m-4 bg-gray-700 text-white p-6 rounded-lg shadow-lg'>
            <div className='text-4xl font-bold mb-4'>Github Followers: {userData.followers}</div>
            <div className='flex justify-center items-center mt-4'>
                <img src={userData.avatar_url} alt='Github Profile Image' width={300} className='rounded-full shadow-lg' />
                <div className='text-left ml-8'>
                    <div className='text-2xl font-semibold'>Name: {userData.name}</div>
                    <div className='text-2xl font-semibold'>Id: {userData.id}</div>
                    <div className='text-xl'>Bio: {userData.bio}</div>
                    <div className='text-xl'>Company: {userData.company}</div>
                    <div className='text-xl'>Location: {userData.location}</div>
                </div>
            </div>
            <div className='mt-8'>
                <h2 className='text-3xl font-bold mb-4'>Repositories</h2>
                <select onChange={handleRepoChange} className='text-black p-2 rounded-lg'>
                    <option value='' disabled selected>Select a repository</option>
                    {repos.map(repo => (
                        <option key={repo.id} value={repo.html_url}>
                            {repo.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Github;
export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/suryamanipatra')
    return response.json()
}
