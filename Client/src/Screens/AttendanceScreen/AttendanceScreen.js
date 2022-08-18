import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './AttendanceScreen.css'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



const columns = [
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        align: 'right',
        format: (value) => value,
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'right',
        format: (value) => value,
    },
    {
        id: 'attendanceTime',
        label: 'Attendance Time',
        minWidth: 170,
        align: 'right',
        format: (value) => value,
    },
];

function createData(date, status, attendanceTime) {
    return { date, status, attendanceTime };
}

const rows = [
    createData('01-01-2022', 'P', '02:35:45'),
    createData('01-02-2022', 'A', '02:35:45'),
    createData('01-03-2022', 'P', '02:35:45'),
    createData('01-04-2022', 'P', '02:35:45'),
    createData('01-05-2022', 'P', '02:35:45'),
    createData('01-06-2022', 'P', '02:35:45'),
    createData('01-07-2022', 'P', '02:35:45'),
    createData('01-08-2022', 'P', '02:35:45'),
    createData('01-09-2022', 'P', '02:35:45'),
    createData('01-10-2022', 'A', '02:35:45'),
    createData('01-11-2022', 'P', '02:35:45'),
    createData('01-12-2022', 'P', '02:35:45'),
    createData('01-13-2022', 'P', '02:35:45'),
    createData('01-14-2022', 'P', '02:35:45'),
    createData('01-15-2022', 'P', '02:35:45'),
];

// Main Function
function AttendanceScreen() {



    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    return (
        <div className="attendance-container">
            <div className="attendance-navbar">
                <Navbar />
            </div>
            <div className="attendance-body">
                <h1>My attendance</h1>
                <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 p-3 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">Absent</span>
                                        <div className="text-900 font-medium text-xl">Today</div>
                                    </div>
                                    <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                        <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                    </div>
                                </div>
                                <span className="text-green-500 font-medium">0 </span>
                                {/* <span className="text-500">since last visit</span> */}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 p-3 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">Absent</span>
                                        <div className="text-900 font-medium text-xl">This Week</div>
                                    </div>
                                    <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                        <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                                    </div>
                                </div>
                                <span className="text-green-500 font-medium">1 </span>
                                {/* <span className="text-500">since last week</span> */}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 p-3 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">Absent</span>
                                        <div className="text-900 font-medium text-xl">This Month</div>
                                    </div>
                                    <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                        <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                                    </div>
                                </div>
                                <span className="text-green-500 font-medium">3 </span>
                                {/* <span className="text-500">newly registered</span> */}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="surface-card shadow-2 p-3 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">Absent</span>
                                        <div className="text-900 font-medium text-xl">This Year</div>
                                    </div>
                                    <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                        <i className="pi pi-comment text-purple-500 text-xl"></i>
                                    </div>
                                </div>
                                <span className="text-green-500 font-medium">12 </span>
                                {/* <span className="text-500">responded</span> */}
                            </div>
                        </div>
                    </div>
                </div>

                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>

            </div>
        </div>
    )
}

export default AttendanceScreen