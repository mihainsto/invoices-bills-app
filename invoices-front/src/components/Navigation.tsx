import {useNavigate} from "react-router-dom";
import {Typography} from "@mui/material";
import {useMeQuery} from "../genearted/graphql";


const Navigation = () => {
    const navigate = useNavigate();
    const {data} = useMeQuery()


    return(
        <div>
            {data?.me &&
                <Typography>
                    Hello {data.me.firstname}, here is your private accountancy details!
                </Typography>
            }
            <Typography>
                Switch tabs here
            </Typography>
            <button onClick={() => navigate('/invoices')}>Invoices</button>
            <button onClick={() => navigate('/bills')}>Bills</button>
        </div>
    )
}

export default Navigation