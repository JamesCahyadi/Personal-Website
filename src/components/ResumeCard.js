import React from 'react';
import InfoSnippet from './InfoSnippet';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import ComputerIcon from '@material-ui/icons/Computer';
import SchoolIcon from '@material-ui/icons/School';
import ReceiptIcon from '@material-ui/icons/Receipt';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import me from '../assets/me.jpg';
import resume from '../assets/resume.pdf';

const useStyles = makeStyles({
    root: {
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center'
    },
    img: {
        boxSizing: 'border-box',
        height: 450,
        width: '100%',
        borderRadius: 4,
        padding: 5,
        backgroundSize: 'cover'
    },
    icon: {
        display: 'inline-block',
        marginBottom: -5,
        marginRight: 5
    },
    paper: {
        padding: 5,
    }
});

const ResumeCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root} raised>
            <CardHeader
                titleTypographyProps={{ variant: 'h3' }}
                title='James Cahyadi'
                subheaderTypographyProps={{ variant: 'subtitle1' }}
                subheader='JavaScript, Python, Java, C, SQL' />
            <CardMedia
                className={classes.img}
                image={me}
                title='James Cahyadi'
            />
            <CardContent>
                <InfoSnippet
                    url='https://uwaterloo.ca/'
                    info='University of Waterloo'
                    icon={<SchoolIcon className={classes.icon} />}
                />
                <InfoSnippet
                    url='https://uwaterloo.ca/computing-financial-management/'
                    info='2A Computing and Financial Management'
                    icon={<ComputerIcon className={classes.icon} />}
                />
                <InfoSnippet
                    url={'mailto:jcahyadi@uwaterloo.ca'}
                    info='jcahyadi@uwaterloo.ca'
                    icon={<EmailIcon className={classes.icon} />}
                />
                <InfoSnippet
                    url={resume}
                    info='Resume'
                    icon={<ReceiptIcon className={classes.icon} />}
                />
                <InfoSnippet
                    url='https://github.com/JamesCahyadi'
                    info='GitHub'
                    icon={<GitHubIcon className={classes.icon} />}
                />
                <InfoSnippet
                    url='https://www.linkedin.com/in/j-cahyadi'
                    info='LinkedIn'
                    icon={<LinkedInIcon className={classes.icon} />}
                />
            </CardContent>
        </Card>
    );
}

export default ResumeCard;