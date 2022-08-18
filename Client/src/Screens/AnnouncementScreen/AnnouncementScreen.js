import * as React from 'react';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar'
import './AnnouncementScreen.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AnnouncementItems } from './AnnouncementItems'
import { PinnedMessage } from './AnnouncementItems'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import {Announcement} from '../../Actions/AnnouncementAction'


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function AnnouncementScreen() {


    const dispatch = useDispatch()
    const announcementState = useSelector(state => state.announcementReducer)

    const { announcement, loading, error } = announcementState

    useEffect(() => { dispatch(Announcement()) }, [])

    const [displayBasic, setDisplayBasic] = useState(false);


    return (
        <div className="announcement-container">
            <div className="announcement-navbar">
                <Navbar />
            </div>
            <div className="announcement-body">
                <h1>Announcements</h1>
                <div className="messages">
                    <div className="highlight-messages">

                        {loading ? (<h1>Loading...</h1>) : error ? (<h1>Something Went Wrong!!!</h1>) : (

                            <ul>
                                {announcement.map(Announcement => {

                                    
                                    const dialogFuncMap = {
                                        'displayBasic': setDisplayBasic
                                    }
                                    const onClick = (name, position) => {
                                        dialogFuncMap[`${name}`](true);
                                    }
                                    const onHide = (name) => {
                                        dialogFuncMap[`${name}`](false);
                                    }

                                    const renderFooter = (name) => {
                                        return (
                                            <div>
                                                <Button label="Close" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                                            </div>
                                        );
                                    }
                                    return (

                                        <li>
                                            <Card sx={{ maxWidth: 275, borderTop: 5, backgroundColor: 'lightblue' }}>
                                                <CardContent>
                                                    <Typography variant="h5" component="div" sx={{ color: 'purple' }} >
                                                        {Announcement.title}
                                                    </Typography>
                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                        {Announcement.subtitle}
                                                    </Typography>
                                                    <Typography className="body2" variant="body2">
                                                        {Announcement.message}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button className="p-button-sm p-button-raised" label="View" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} />

                                                </CardActions>

                                                <Dialog header={Announcement.title} visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                                                    <h3>{Announcement.subtitle}</h3>
                                                    <p>{Announcement.message}</p>
                                                </Dialog>


                                            </Card>
                                        </li>
                                    )
                                })}
                            </ul>

                        )}

                    </div>
                    <div className="pinned-message">
                        <h2>Pinned Message</h2>
                        {PinnedMessage.map(pinnedMessage => {

                            const [displayBasic, setDisplayBasic] = useState(false);
                            const dialogFuncMap = {
                                'displayBasic': setDisplayBasic
                            }
                            const onClick = (name, position) => {
                                dialogFuncMap[`${name}`](true);
                            }
                            const onHide = (name) => {
                                dialogFuncMap[`${name}`](false);
                            }

                            const renderFooter = (name) => {
                                return (
                                    <div>
                                        <Button label="Close" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                                    </div>
                                );
                            }

                            return (
                                <Card sx={{ width: 270 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {pinnedMessage.title}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {pinnedMessage.subtitle}
                                        </Typography>
                                        <Typography variant="body2">
                                            {pinnedMessage.message}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button className="p-button-sm p-button-raised" label="View" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} />
                                    </CardActions>

                                    <Dialog header={pinnedMessage.title} visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                                        <h3>{pinnedMessage.subtitle}</h3>
                                        <p>{pinnedMessage.message}</p>
                                    </Dialog>

                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default AnnouncementScreen