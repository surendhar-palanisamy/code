import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query';

import React, { useState } from 'react'
import HorizontalBar from './HorizontalBar';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c7fa8235d3msh1ddce5b747c5aa0p1da4e0jsne5df34823909',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
const fetchExercises = async () => {
    const fetched_data = await fetch('https://exercisedb.p.rapidapi.com/exercises', options)
    const json_data = await fetched_data.json()
    console.log('printing data from api', json_data)
    return json_data
}
const fetchBodyparts = async () => {
    const fetched_data = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
    const json_data = await fetched_data.json()
    console.log('printing data from bodypats', json_data)
    return json_data
}
function SearchExercise() {
    const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
    const [search, setsearch] = useState('')
    const { data, refetch } = useQuery(['exercises'], fetchExercises, { enabled: false })
    const { data: bodyparts, isFetching } = useQuery(['bodyparts'], fetchBodyparts, {
        staleTime: twentyFourHoursInMs,
    })
    return (
        <Box>
            <Stack
                sx={{

                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography

                    sx={{

                        fontWeight: '700',
                        fontSize: { lg: 32 },
                    }}
                >Awesome Exercise You
                </Typography>
                <Typography

                    sx={{

                        fontWeight: '700',
                        fontSize: { lg: 32 },
                    }}
                >
                    Should Know</Typography>


                <Stack
                    sx={{

                    }} direction={'row'}>
                    <TextField
                        value={search}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            console.log(search)
                            setsearch(e.target.value.toLowerCase())
                        }}
                        size='small'
                        sx={{
                            input: {
                                border: 'none',
                                borderRadius: '200px'
                            },
                            width: {
                                lg: '900px',

                            },

                        }} placeholder='Search Exercises'>

                    </TextField>
                    <Button onClick={() => { refetch() }} variant='contained' color='error'>Search</Button>
                </Stack>
                {!isFetching && <HorizontalBar data={bodyparts} />}
            </Stack>
        </Box>
    )
}

export default SearchExercise