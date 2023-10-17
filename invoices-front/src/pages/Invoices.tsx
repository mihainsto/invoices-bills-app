import {useMeQuery} from "../genearted/graphql";
import AccountElementsList from "../components/AccountElementsList";
import {useEffect} from "react";
import Navigation from "../components/Navigation";
import {Box} from "@mui/material";

const Invoices = () => {

    const {data} = useMeQuery()

    useEffect(() => {
        console.log({data})
    }, [data])

    return(
        <div>
            <Navigation/>
            <Box sx={{ m: 2 }} />
            Invoices Page
            <Box sx={{ m: 2 }} />
            {data?.me?.invoices &&
                    <AccountElementsList accountElements={data?.me?.invoices}/>
            }
        </div>
    )
}

export default Invoices