import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import "./App.css";

const columns = [
  { id: "EventName", label: "Match", minWidth: 170 },
  { id: "MarketId", label: "Match Id", minWidth: 100 },
];

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch("https://api.bullsoffer9.in/markets/4");
      response = await response.json();
      setData(response);
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  return (
    <div className="App">
      <h1>Match Data</h1>
      <Paper sx={{ width: "95%", overflow: "hidden", margin: "auto" }}>
        <TableContainer sx={{ maxHeight: 700 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns?.map((column) => (
                  <TableCell
                    key={column?.id}
                    align={column?.align}
                    style={{
                      minWidth: column?.minWidth,
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {column?.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((todoData, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    onClick={() => {
                      navigate({
                        pathname: `/${todoData?.MarketId}`,
                      });
                      localStorage.setItem("match_data", todoData?.EventName);
                    }}
                    sx={{ cursor: "pointer" }}
                  >
                    {columns?.map((column) => {
                      const value = todoData?.[column?.id];
                      return (
                        <TableCell key={column?.id} align={column.align}>
                          {column?.format && typeof value === "number"
                            ? column?.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default App;
