import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

const MatchDetails = () => {
  const { id } = useParams();
  const [matchData, setMatchData] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    ref.current = setInterval(async () => {
      try {
        let response = await fetch(
          `https://fancy.betpro.gold/api/Odds/fancy/${id}`
        );
        response = await response.json();
        console.log("response", response[response.length - 1]);
        setMatchData(response[response.length - 1]);
      } catch (error) {
        console.error(error);
        return error;
      }
    }, 1000);
    return () => {
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  }, [id]);

  return (
    // <div>
    //   <TableContainer component={Paper}>
    //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //       <TableHead>
    //         <TableRow>
    //           <TableCell style={{ fontWeight: "bold", fontSize: "20px" }} >SelectionId</TableCell>
    //           <TableCell align="left" style={{ fontWeight: "bold", fontSize: "20px" }}>RunnerName</TableCell>
    //           <TableCell align="right" style={{ fontWeight: "bold", fontSize: "20px" }}>MK Type</TableCell>
    //           <TableCell align="right" style={{ fontWeight: "bold", fontSize: "20px" }}>Type</TableCell>
    //           <TableCell align="right" style={{ fontWeight: "bold", fontSize: "20px" }}>LayPrice1</TableCell>
    //           <TableCell align="right" style={{ fontWeight: "bold", fontSize: "20px" }}>LaySize1</TableCell>
    //           <TableCell align="right" style={{ fontWeight: "bold", fontSize: "20px" }}>BackPrice1</TableCell>
    //           <TableCell align="right" style={{ fontWeight: "bold", fontSize: "20px" }}>BackSize1</TableCell>
    //           <TableCell align="right" style={{ fontWeight: "bold", fontSize: "20px" }}>GameStatus</TableCell>
    //           <TableCell align="right" style={{ fontWeight: "bold", fontSize: "20px" }}>FinalStatus</TableCell>
    //           <TableCell align="right" style={{ fontWeight: "bold", fontSize: "20px" }}>Is Active</TableCell>
    //           <TableCell align="right" style={{ fontWeight: "bold", fontSize: "20px" }}>Min</TableCell>
    //           <TableCell align="right" style={{ fontWeight: "bold", fontSize: "20px" }}>Max</TableCell>

    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {matchData.map((matchItem, index) => (
    //           <TableRow
    //             key={index}
    //             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //           >
    //             <TableCell>{matchItem.SelectionId}</TableCell>
    //             <TableCell align="left">{matchItem.RunnerName}</TableCell>
    //             <TableCell align="right">{matchItem.mktype}</TableCell>
    //             <TableCell align="right">{matchItem.type}</TableCell>
    //             <TableCell align="right">{matchItem.LayPrice1}</TableCell>
    //             <TableCell align="right">{matchItem.LaySize1}</TableCell>
    //             <TableCell align="right">{matchItem.BackPrice1}</TableCell>
    //             <TableCell align="right">{matchItem.BackSize1}</TableCell>
    //             <TableCell align="right">{matchItem.GameStatus}</TableCell>
    //             <TableCell align="right">{matchItem.FinalStatus}</TableCell>
    //             <TableCell align="right">{matchItem.isActive}</TableCell>
    //             <TableCell align="right">{matchItem.min}</TableCell>
    //             <TableCell align="right">{matchItem.max}</TableCell>

    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>

    //   {/* <table style={{ width: "25%" }}>
    //           <tr>
    //             <th>Company</th>
    //             <th>{id}</th>
    //           </tr>
    //           <tr>
    //             <td>Alfreds Futterkiste</td>
    //             <td>Maria Anders</td>
    //           </tr>
    //           <tr>
    //             <td>Centro comercial Moctezuma</td>
    //             <td>Francisco Chang</td>
    //           </tr>
    //         </table> */}

    // </div>
    <>
      <div class="box box-left">
        <div className="container">
          <div class="item">
            <table>
              <tr>
                <th>BackPrice1</th>
                <td>
                  {matchData && matchData?.BackPrice1
                    ? matchData?.BackPrice1
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>BackSize1</th>
                <td>
                  {matchData && matchData?.BackSize1
                    ? matchData?.BackSize1
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>FinalStatus</th>
                <td>
                  {matchData && matchData?.FinalStatus
                    ? matchData?.FinalStatus
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>GameStatus</th>
                <td>
                  {matchData && matchData?.GameStatus
                    ? matchData?.GameStatus
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>LayPrice1</th>
                <td>
                  {matchData && matchData?.LayPrice1
                    ? matchData?.LayPrice1
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>LaySize1</th>
                <td>
                  {matchData && matchData?.LaySize1 ? matchData?.LaySize1 : "-"}
                </td>
              </tr>
              <tr>
                <th>RunnerName</th>
                <td>
                  {matchData && matchData?.RunnerName
                    ? matchData?.RunnerName
                    : "-"}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="box box-right">
        <div className="container">
          <div class="item">
            <table>
              <tr>
                <th>SelectionId</th>
                <td>
                  {matchData && matchData?.SelectionId
                    ? matchData?.SelectionId
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>isActive</th>
                <td>
                  {matchData && matchData?.isActive
                    ? matchData?.isActive
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>max</th>
                <td>
                  {matchData && matchData?.max
                    ? matchData?.max
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>min</th>
                <td>
                  {matchData && matchData?.min
                    ? matchData?.min
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>mktype</th>
                <td>
                  {matchData && matchData?.mktype
                    ? matchData?.mktype
                    : "-"}
                </td>
              </tr>
              <tr>
                <th>type</th>
                <td>
                  {matchData && matchData?.type ? matchData?.type : "-"}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchDetails;
