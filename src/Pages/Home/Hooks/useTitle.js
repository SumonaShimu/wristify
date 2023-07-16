import { useEffect } from "react";

const useTitle = title => {
    useEffect(()=>{
        document.title=`${title} | wristify`;
    },[title])
};

export default useTitle;