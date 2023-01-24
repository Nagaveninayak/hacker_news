import { useEffect, useState } from "react";
import { getCommentById } from "../Api/apiCalls";

const CommentPage = () => {
    const [story, setStory] = useState(false);

    const getComment = async (objectId) => {
        const result = await getCommentById(objectId);
        setStory(result);
    }

    useEffect(() => {
        getComment('14568468');
    }, [])

    console.log("🚀 ~ file: CommentPage.jsx:6 ~ CommentPage ~ story", story)
    return (
        <div>
            <h1>Post detail screen</h1>
            <div>{JSON.stringify(story)}</div>
        </div>
    )

}

export default CommentPage;