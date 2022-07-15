import React from 'react'
import {useQuery} from 'react-query'
import {getHomepageTeam} from "../queries/queries";
import TeamCard from './TeamCard';

export default function Team() {
    const {data: team, isSuccess} = useQuery("team", async () => await getHomepageTeam())

    return (
        <div className='teams wrapper px-70'>
            <h4>Meet the <span>Team</span></h4>
            
        </div>
    )
}
