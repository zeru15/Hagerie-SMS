import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './RegisterStudent.css'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';



function AddStudent() {

    /*const [state, setState] = useState({

        img: null,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        sex: "",
        age: "",
        nationality: "",
        date: "",
        address: "",
        region: "",
        contactName: "",
        contactAddress: "",
        contactPhone: "",
        semester: "",
        grade: "",
        entryYear: "",
        whatYear: "",
        city: "",
        streetAddress: "",
        postalCode: "",
        pFirstName: "",
        pLastName: "",
        pEmail: "",
        pRegion: "",
        pCity: "",
        pStreetAddress: "",
        pPostalCode: "",
        pPhone: "",
        height: "",
        weight: "",
        bloodType: "",
        eyeColor: "",
        medication: ""
    });
*/
    const [img, setImg] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [sex, setSex] = useState('')
    const [age, setAge] = useState('')
    const [nationality, setNationality] = useState('')
    const [date, setDate] = useState('')
    //const [address, setAddress] = useState('')
    const [region, setRegion] = useState('')
    const [semester, setSemester] = useState('')
    const [grade, setGrade] = useState('')
    const [entryYear, setEntryYear] = useState('')
    const [whatYear, setWhatYear] = useState('')
    const [city, setCity] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [postalCode, setpostalCode] = useState('')
    const [pimg, setPImg] = useState('')
    const [pFirstName, setPFirstName] = useState('')
    const [pLastName, setPLastName] = useState('')
    const [pEmail, setPEmail] = useState('')
    const [pRegion, setPRegion] = useState('')
    const [pCity, setPCity] = useState('')
    const [pStreetAddress, setPStreetAddress] = useState('')
    const [pPostalCode, setpPostalCode] = useState('')
    const [pPhone, setPPhone] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bloodType, setBloodType] = useState('')
    const [eyeColor, setEyeColor] = useState('')
    const [medication, setMedication] = useState('')


    const Input = styled('input')({
        display: 'none',
    });



    return (

        <div className='add-student-container'>
            <div className='add-student-navbar'>
                <Navbar />
            </div>
            <div className='add-student-body'>
                <h1>Register</h1>
                <div className="add-student-form">
                    <form className='personal-info'>
                        <Divider><h2>Student Information</h2></Divider>
                        <label> <strong>Photo: </strong> </label><br /><br/>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                <Button variant="contained" component="span">
                                    Upload
                                </Button>
                            </label>
                            <label htmlFor="icon-button-file">
                                <Input accept="image/*" id="icon-button-file" type="file" />
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </Stack><br/>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Firstname </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="firstname"
                                    placeholder="Enter Firstname"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Lastname </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="lastname"
                                    placeholder="Enter Lastname"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <label> <strong>Email </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="email"
                                    placeholder="Email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Age </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="age"
                                    placeholder="18"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label><strong>Date of birth </strong></label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="date"
                                    name="dateofbirth"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label><strong>sex </strong></label><br /><br />
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-label">sex</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={sex}
                                        label="sex"
                                        onChange={(e) => setSex(e.target.value)}
                                    >
                                        <MenuItem value={"Male"}>Male</MenuItem>
                                        <MenuItem value={"Female"}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Nationality </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="nationality"
                                    placeholder="Ethiopian"
                                    value={nationality}
                                    onChange={(e) => setNationality(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label> <strong>Entry Year </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="entryyear"
                                    placeholder="2000"
                                    value={entryYear}
                                    onChange={(e) => setEntryYear(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label> <strong>Grade </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="grade"
                                    placeholder="Grade"
                                    value={grade}
                                    onChange={(e) => setGrade(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label> <strong>Semester </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="semester"
                                    placeholder="Semester"
                                    value={semester}
                                    onChange={(e) => setSemester(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">
                                        Have you previously applied to or attended this school?</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="no"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <label> <strong>If yes, what year? </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="whatyear"
                                    placeholder="2000"
                                    value={whatYear}
                                    onChange={(e) => setWhatYear(e.target.value)}
                                />
                                <br />
                                <br />
                            </Grid>


                            <Grid item xs={12} sm={12}>
                                <Divider><h2>Address</h2></Divider>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <label> <strong>Street Address </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    fullWidth
                                    type="text"
                                    name="street"
                                    placeholder="Bole, Rwanda"
                                    value={streetAddress}
                                    onChange={(e) => setStreetAddress(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Region </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="region"
                                    placeholder="Addis Ababa"
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>City </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="city"
                                    placeholder="Addis Ababa"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <label> <strong>Postal / Zip Code </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    fullWidth
                                    type="text"
                                    name="postalCode"
                                    placeholder=""
                                    value={postalCode}
                                    onChange={(e) => setpostalCode(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <label> <strong>Phone Number </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="phone"
                                    placeholder="0911238745"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Divider><h2>Parent / Guardian Information</h2></Divider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Firstname </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="pfirstname"
                                    placeholder="Enter Firstname"
                                    value={pFirstName}
                                    onChange={(e) => setPFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Lastname </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="plastname"
                                    placeholder="Enter Lastname"
                                    value={pLastName}
                                    onChange={(e) => setPLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <label> <strong>Email </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="pemail"
                                    placeholder="Email@example.com"
                                    value={pEmail}
                                    onChange={(e) => setPEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <label> <strong>Street Address </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    fullWidth
                                    type="text"
                                    name="street"
                                    placeholder="Bole, Rwanda"
                                    value={pStreetAddress}
                                    onChange={(e) => setPStreetAddress(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Region </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="region"
                                    placeholder="Addis Ababa"
                                    value={pRegion}
                                    onChange={(e) => setPRegion(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>City </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="city"
                                    placeholder="Addis Ababa"
                                    value={pCity}
                                    onChange={(e) => setPCity(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <label> <strong>Postal / Zip Code </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    fullWidth
                                    type="text"
                                    name="postalcode"
                                    placeholder=""
                                    value={pPostalCode}
                                    onChange={(e) => setpPostalCode(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <label> <strong>Phone Number </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="phone"
                                    placeholder="0911238745"
                                    value={pPhone}
                                    onChange={(e) => setPPhone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Divider><h2>Medical Information</h2></Divider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Height </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="height"
                                    placeholder=""
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Weight </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="weight"
                                    placeholder=""
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Blood Type </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="bloodtype"
                                    placeholder=""
                                    value={bloodType}
                                    onChange={(e) => setBloodType(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label> <strong>Eye Color </strong> </label><br /><br />
                                <TextField id="outlined-basic" variant="outlined" size="small"
                                    type="text"
                                    name="eyecolor"
                                    placeholder=""
                                    value={eyeColor}
                                    onChange={(e) => setEyeColor(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <label> <strong>Please list any of the following:
                                    Current medications, Medication allergies,
                                    Food allergies, Chronic health concerns.
                                </strong> </label><br /><br />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Enter Here"
                                    multiline
                                    rows={4}
                                    type="text"
                                    name="medication"
                                    placeholder=""
                                    value={medication}
                                    onChange={(e) => setMedication(e.target.value)}
                                />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </Grid>

                            <Button variant="contained" type="submit" name="submit"
                                sx={{ margin: 5 }}>
                                Submit</Button>

                        </Grid>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddStudent