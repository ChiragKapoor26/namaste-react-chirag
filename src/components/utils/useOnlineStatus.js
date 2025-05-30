import { useEffect,useState} from "react"
const useOnlineStatus = () => {
    const [Onlinestatus,setOnlinestatus] = useState(true);
    useEffect(()=> {
        window.addEventListener("offline",()=> {
            setOnlinestatus(false);
        });
        window.addEventListener("online",()=> {
            setOnlinestatus(true);
        })
    },[]);
    return Onlinestatus;
}
export default useOnlineStatus;