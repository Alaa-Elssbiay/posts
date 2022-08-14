import { memo } from "react";

const Post = ({id , title , body }) => {
    return (<>
        <div className='content'>
         <h3> Post id : {id} </h3>
         <hr/>
         <h4>{title}</h4>
         <p>{body}</p>
       </div>
       </> )
}
export default memo(Post);
