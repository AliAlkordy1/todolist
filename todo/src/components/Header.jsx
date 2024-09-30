import { Icon } from '@iconify-icon/react';
import { useState } from "react";
export default function Header({OnaddTask}) {
    const [title, setTitle] = useState("");




    function handleSubmit(e) {
        e.preventDefault()
        OnaddTask(title)
        setTitle("")
    }

    function titleChange(e) {
        setTitle(e.target.value);
    }

    return <>
        <div className="header-container" >
        <img src="../public/Logo.svg" alt="logo" />
            <form action="" className="input-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a new task" value={title}  onChange={titleChange}/>
                <button>Create <Icon icon="gala:add" width="15" height="15" /></button>

            </form>


        </div>
    
    
    </>
}