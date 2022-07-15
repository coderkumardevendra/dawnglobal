import React from 'react'
import {useQuery} from 'react-query'
import {getHomepageTeam} from "../queries/queries";
import TeamCard from './TeamCard';

export default function Team() {
    const {data: team, isSuccess} = useQuery("team", async () => await getHomepageTeam())

    return (
        <div className='teams wrapper px-70'>
            <h4>Meet the <span>Team</span></h4>
            <div className='card-wrapper'>{isSuccess && team.map(t => <TeamCard name={t.name} position={t.position} profile_image={t.profile_image.id} intro={t.intro} key={t.id} />)}</div>
        </div>
    )
}
