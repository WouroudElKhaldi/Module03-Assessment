import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Table = ( ) =>{

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        const newWidth = window.innerWidth;
        setScreenWidth(newWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    // return(
        // <>
        // <Box sx={{ height: 707, mt: "3rem", mb: "3rem", fontFamily: "outfit" }}>
        // <DataGrid
        // //   columns={columns}
        // //   rows={data}
        //   getRowId={(row) => row.id}
        //   pageSizeOptions={[5, 10, 20, 100]}
        //   initialState={{
        //     pagination: {
        //       paginationModel: {
        //         pageSize: 5,
        //       },
        //     },
        //   }}
        //   slots={{ toolbar: GridToolbar }}
        //   slotProps={{
        //     toolbar: {
        //       showQuickFilter: true,
        //     },
        //   }}
        //   sx={{
        //     marginBottom: "4rem",
        //     width: "98%",
        //     bgcolor: "#212936",
        //     border: 0,
        //     "& .MuiToolbar-root , .MuiInputBase-input , .MuiDataGrid-columnHeaderTitleContainer , .MuiDataGrid-cell":
        //       {
        //         color: "white",
        //       },
        //     "& .MuiButtonBase-root .MuiSvgIcon-root ,  .MuiSvgIcon-root": {
        //       color: "#2D99EF",
        //     },
        //     "& .MuiDataGrid-root , .MuiDataGrid-colCell, .MuiDataGrid-root , .MuiDataGrid-cell":
        //       {
        //         maxHeight: "100px !important",
        //       },
        //     "& .MuiInputBase-root , & .MuiInputBase-input": {
        //       color: "#000",
        //     },
        //     "& .MuiDataGrid-row Mui-selected , &.MuiDataGrid-row Mui-hovered": {
        //       bgcolor: "#17456E",
        //     },
        //     "& .MuiDataGrid-row": {
        //       height: "90px !important",
        //       maxHeight: "90px !important",
        //     },
        //     "& .Mui-hovered": {
        //       bgcolor: "#444654 !important",
        //     },
        //     "& .Mui-selected": {
        //       bgcolor: "#17456E",
        //     },
        //     "& .MuiDataGrid-columnHeaders , & .MuiDataGrid-toolbarContainer , & .MuiDataGrid-footerContainer":
        //       {
        //         height: "90px !important",
        //         maxHeight: "90px !important",
        //         fontSize: "1.2rem",
        //         mb: screenWidth < 500 ? "1rem" : "0",
        //       },
        //     "& .MuiDataGrid-columnHeaderTitleContainer": {
        //       color: "#2D99EF !important",
        //     },
        //     ".MuiDataGrid-cell": {
        //       width: "8rem",
        //     },
        //     "& .MuiSelect-select , & .MuiTablePagination-select , & .MuiSelect-standard MuiInputBase-input css-194a1fa-MuiSelect-select-MuiInputBase-input":
        //       {
        //         color: "#2D99EF !important",
        //       },
        //   }}
        // />
    //   </Box>
    //   </>
    // )
}

export default Table