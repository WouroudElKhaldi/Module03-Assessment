import { useEffect , useState  } from "react";
import axios from "axios";
// import { Box } from "@mui/material";
// import Button from "@mui/material/Button";
// import Table from "../../Components/Table/Table";

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [networkError, setNetworkError] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [successAdd, setSuccessAdd] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const [successEdit, setSuccessEdit] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleEditOpen = () => setOpenEdit(true);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleClose = () => {
      setOpen(false);
      setOpenEdit(false);
      setOpenDelete(false);
    };

    useEffect(() => {
        const handleResize = () => {
          const newWid = window.innerWidth;
          setScreenWidth(newWid);
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      useEffect(() => {
        const handleOffline = () => {
          setNetworkError(true);
        };
        window.addEventListener("offline", handleOffline);
        return () => {
          window.removeEventListener("offline", handleOffline);
        };
      });


      useEffect(()=>{
        const fetchData = async () => {
            await axios.get('http:localhost')
        }
      },[])
      return(
        <>

        </>
      )
}

export default Dashboard