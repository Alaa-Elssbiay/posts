import { memo, useCallback } from "react";

const AddPost = ({onAdd}) => {
    const handleOnSubmit=useCallback((e)=>{

        e.preventDefault();
        onAdd(e.target.title.value,e.target.body.value);
        e.target.title.value='';
        e.target.body.value=''; 

    },[onAdd])
    return (
        <form onSubmit={handleOnSubmit}>
        <div className='postAndSearch'>
        <button onSubmit={handleOnSubmit} className='btnPost' id='btnPost'>Add Post</button>
        <input required  type='text' name='title' className='btnPost' placeholder='Add Title Post'/>
        <input required type='text' name='body' className='inptAdd btnPost' placeholder='Add Body Post'/>
     </div>
     </form>
    );
}
export default memo(AddPost);
