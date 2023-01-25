import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { Link } from "react-router-dom";

const CardDisplay = (props) => {

    const { author, created_at, title, url, num_comments, objectID } = props.items;

    return (
        <Card sx={{ maxWidth: 400, height: "auto" }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {author[0].toUpperCase()}
                    </Avatar>
                }
                title={author}
                subheader={created_at}
            />
            <CardContent >
                <Typography variant="h6">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {url}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="comments">
                    <SmsOutlinedIcon color="blue" />: {num_comments}
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                    <Link to={{
                        pathname: `/comments/${objectID}`
                    }}>Click here to see the comments</Link>
                </Typography>
            </CardActions>
        </Card >
    );
}

export default CardDisplay;