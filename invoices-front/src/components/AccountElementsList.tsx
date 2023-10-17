import {Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useState} from "react";
import AccountElementModalContent from "./AccountElementModalContent";
import { format } from 'date-fns'

type AccountElement = {amount: number, dueDate: never, details?: string}
type AccountElementsListProps = {
    accountElements: AccountElement[]
}
type TableRowProps = {
    accountElement: AccountElement
}

const TableAccountRow = ({accountElement}: TableRowProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return(
        <TableRow>
            <TableCell align="left">{accountElement.amount}</TableCell>
            <TableCell align="left">{format(new Date(accountElement.dueDate), 'MM/dd/yyyy')
                }</TableCell>
            <TableCell>
                <button onClick={handleOpen}>More Info</button>
            </TableCell>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <AccountElementModalContent accountElement={accountElement}/>
            </Modal>
        </TableRow>
    )
}




const AccountElementsList = ({accountElements}: AccountElementsListProps) => {
    return(
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Amount</TableCell>
                        <TableCell align="left">DueDate</TableCell>
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accountElements.map((el) => (
                       <TableAccountRow accountElement={el}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default AccountElementsList