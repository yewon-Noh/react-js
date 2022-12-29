import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 15.
    },
    userInfo: {
        marginLeft: 8,
        fontSize: 12,
    },
    comment: {
        marginLeft: 8,
    }
}

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <img className="Avatar"
                    src={props.avatar}
                    style={styles.image}
                />
            <div>  
                <div className="User" style={styles.userInfo}>
                    {props.name}
                </div>
                <div className="Comment" style={styles.comment}>
                    {props.comment}
                </div>
            </div>
        </div>
    )
}

export default Comment;