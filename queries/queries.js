import fetchData from "../helpers/fetchData";

export const getHomepageTeam = async () => {
    const data = await fetchData(
        `
        query HomepageTeam {
            team {
                id
                name
                position
                intro
                profile_image
            }
        }

        `,
        {
            variables: {}
        }
    )

    return data.data.team
}