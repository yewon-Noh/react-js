import React from "react";
import Comment from "./Comment";

const comments = [
    {
        avatar: "https://avatars.githubusercontent.com/u/80824750?v=4",
        name: "노예원",
        comment: "리액트 재밌어요~!"
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/83394485?v=4",
        name: "이성호",
        comment: "리액트 재밌어요~!!"
    },
]

function CommentList() {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment avatar={comment.avatar} name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
       
    );
}

export default CommentList;