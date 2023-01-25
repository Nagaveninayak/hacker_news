import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentById } from "../Api/apiCalls";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListDisplay from "../Helpers/ListDisplay";
import List from '@mui/material/List';

const CommentPage = () => {
    const [story, setStory] = useState(false);
    const [comment, setComment] = useState(false);

    const { objectID } = useParams();
    console.log("🚀 ~ file: CommentPage.jsx:13 ~ CommentPage ~ objectID", objectID)


    const getComment = async (objectId) => {
        const result = await getCommentById(objectId);
        console.log("🚀 ~ file: CommentPage.jsx:16 ~ getComment ~ result", result)
        setStory(result);
        setComment(result.children);
    }

    useEffect(() => {
        getComment(objectID);
    }, [])

    console.log("🚀 ~ file: CommentPage.jsx:6 ~ CommentPage ~ story", story)
    return (
        <div>
            <h1>Post detail screen</h1>
            {
                story &&
                <Box component="span" >
                    <Typography variant="h4" gutterBottom>
                        {story.title}
                    </Typography>
                    <Typography variant="h6" gutterBottom >
                        by - {story.author}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <a href={story.url} target="_blank" rel="noreferrer">{story.url}</a>
                    </Typography>
                    <Typography variant="body2" gutterBottom sx={{ textAlign: "left", m: 1 }} >
                        Comments
                    </Typography>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        {comment.map((item) => {
                            return (
                                <List key={item.created_at}>
                                    <ListDisplay item={item} />
                                </List>
                            )
                        })}
                    </List>
                </Box>
            }
        </div>
    )

}

export default CommentPage;