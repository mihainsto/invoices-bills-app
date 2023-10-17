import {useMeQuery} from "../genearted/graphql";
import AccountElementsList from "../components/AccountElementsList";
import {useEffect} from "react";
import Navigation from "../components/Navigation";
import {Box} from "@mui/material";

const Bills = () => {

    const {data} = useMeQuery()

    useEffect(() => {
        console.log({data})
    }, [data])

    return(
        <div>
            <Navigation/>
            <Box sx={{ m: 2 }} />
            Bills Page
            <Box sx={{ m: 2 }} />
            {data?.me?.bills &&
                <AccountElementsList accountElements={data?.me?.bills}/>
            }
        </div>
    )
}

export default Bills