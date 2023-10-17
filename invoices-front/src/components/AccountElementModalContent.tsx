import {Box, Typography} from "@mui/material";
import {format} from "date-fns";

type AccountElement = {amount: number, dueDate: never, details?: string}
type AccountElementModalContentProps = {
    accountElement: AccountElement
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AccountElementModalContent = ({accountElement}: AccountElementModalContentProps) => {
    return(
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                More info modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {accountElement.details}
                <br/>
                {format(new Date(accountElement.dueDate), 'MM/dd/yyyy')}
                <br/>
                {accountElement.amount}
            </Typography>
        </Box>
    )
}

export default AccountElementModalContent