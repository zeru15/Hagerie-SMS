import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './ProfileScreen.css'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ManIcon from '@mui/icons-material/Man';
import EventIcon from '@mui/icons-material/Event';
import WcIcon from '@mui/icons-material/Wc';
import LanguageIcon from '@mui/icons-material/Language';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { studentProfile } from '../../Actions/StudentProfileAction';
import { parentProfile } from '../../Actions/parentProfileAction';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



// Functions Of Tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Functions Of Table
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(height, weight, bloodType, eyeColor, currentMedication) {
//   return { height, weight, bloodType, eyeColor, currentMedication };
// }

// const rows = [
//   createData(height, weight, bloodType, eyeColor, currentMedication)
// ];



// Main Function
function ProfileScreen() {

  const dispatch = useDispatch()

  const studentInfoState = useSelector(state => state.studentProfileReducer)
  const parentInfoState = useSelector(state => state.parentProfileReducer)

  const { studentInfo, loading, error } = studentInfoState
  const { parentInfo } = parentInfoState

  useEffect(() => { dispatch(studentProfile()) }, [])
  useEffect(() => { dispatch(parentProfile()) }, [])




  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className='profile-container'>
      <div className='profile-navbar'>
        <Navbar />
      </div>
      <div className='profile-body'>
        <h1>Profile</h1>
        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Personal Information" {...a11yProps(0)} />
              <Tab label="Medical Information" {...a11yProps(1)} />
              <Tab label="Parent Detail" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >

            {loading ? (<h1>Loading...</h1>) : error ? (<h1>Something Went Wrong!!!</h1>) : (


              
                
                  < TabPanel value={value} index={0} dir={theme.direction} /*key={StudentInfo.id}*/ >
                    {studentInfo.map(StudentInfo => {
                    return (
                      <div>
                    <p className='personal-info-heading'>
                      <img src={StudentInfo.img} alt='image' height='200px' width='200px' />
                      <h2>{`${StudentInfo.firstname}` + ` ` + `${StudentInfo.lastname}`}</h2>
                    </p><hr />
                    <div className='personal-info'>
                      <ul>
                        <li><EmailIcon /> Email <br /> {StudentInfo.email} </li>
                        <li><PhoneAndroidIcon />Phone no <br />{StudentInfo.phone} </li>
                        <li><ManIcon />Age <br /> {StudentInfo.age} </li>
                        <li><EventIcon />Date Of Birth <br /> {StudentInfo.dateOfBirth} </li>
                        <li><WcIcon />Sex <br /> {StudentInfo.sex} </li>
                        <li><LanguageIcon />Nationality <br /> {StudentInfo.nationality} </li>
                        <li><LanguageIcon />Region<br /> {StudentInfo.region} </li>
                        <li><LocationCityIcon />City <br /> {StudentInfo.city} </li>
                      </ul>

                    </div>
                    </div>
                    )
                  })
                }

                  </TabPanel>
                
              


            )}

            {loading ? (<h1>Loading...</h1>) : error ? (<h1>Something Went Wrong!!!</h1>) : (

                  <TabPanel value={value} index={1} dir={theme.direction}>

                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Height (C.M)</StyledTableCell>
                            <StyledTableCell align="right">Weight&nbsp;(Kg)</StyledTableCell>
                            <StyledTableCell align="right">Blood Type</StyledTableCell>
                            <StyledTableCell align="right">Eye Color</StyledTableCell>
                            <StyledTableCell align="right">Current Medication</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                        {studentInfo.map(StudentInfo => {
                        return (
                            <StyledTableRow key={StudentInfo.name}>
                              <StyledTableCell component="th" scope="row">
                                {StudentInfo.height}
                              </StyledTableCell>
                              <StyledTableCell align="right">{StudentInfo.weight}</StyledTableCell>
                              <StyledTableCell align="right">{StudentInfo.bloodType}</StyledTableCell>
                              <StyledTableCell align="right">{StudentInfo.eyeColor}</StyledTableCell>
                              <StyledTableCell align="right">{StudentInfo.currentMedication}</StyledTableCell>
                            </StyledTableRow>
                            )
                          })
                          }
                        </TableBody>
                      </Table>
                    </TableContainer>

                  </TabPanel>

                
              


            )}


            {loading ? (<h1>Loading...</h1>) : error ? (<h1>Something Went Wrong!!!</h1>) : (

              
                

                  <TabPanel value={value} index={2} dir={theme.direction}>
                    {parentInfo.map(parentInfo => {
                    return (
                      <div>
                    <p className='personal-info-heading'>
                      <img src={parentInfo.pImg} alt='image' height='200px' width='200px' />
                      <h2>{`${parentInfo.pFirstName}` + ` ` + `${parentInfo.pLastName}`}</h2>
                    </p><hr />
                    <div className='personal-info'>
                      <ul>
                        <li><EmailIcon /> Email <br /> {parentInfo.pEmail} </li>
                        <li><PhoneAndroidIcon />Phone no <br />{parentInfo.pPhone} </li>
                        <li><WcIcon />Postal Code <br /> {parentInfo.pPostalCode} </li>
                        <li><LanguageIcon />Street Address <br /> {parentInfo.pStreetAddress} </li>
                        <li><LanguageIcon />Region<br /> {parentInfo.pRegion} </li>
                        <li><LocationCityIcon />City <br /> {parentInfo.pCity} </li>
                      </ul>
                    </div>
                    </div>
                    )
                  })
                }
                  </TabPanel>

                
              


            )}



          </SwipeableViews>
        </Box>
      </div>
    </div >
  )
}

export default ProfileScreen