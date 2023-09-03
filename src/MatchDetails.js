import { width } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./App.css";

const MatchDetails = () => {
  const { id } = useParams();

  const [matchData, setMatchData] = useState([]);
  const [match, setMatchInfo] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let matchName = params.get("matchName");
    setMatchInfo(matchName.split(" v "));

    ref.current = setInterval(async () => {
      try {
        let response = await axios.post(
          `https://fancy.betpro.gold/api/Odds/fancy/${id}`,
          {
            add_filter:
              "1 to 25 Balls Runs LS W,1 to 50 Balls Runs LS W,1 to 75 Balls Runs LS W,1 to 100 Balls Runs LS W,1 to 25 Balls Runs NS W,1 to 50 balls run NS W,1 to 75 balls run NS W,1 to 100 Balls Runs NS W,Super over run DA,50 over run SL,5 over run ENG,10 over runs ENG,15 over run ENG,20 over run ENG,25 over run AFG,30 over run AFG,35 over run AFG,40 over run AFG,45 over run AFG,50 over runs AFG",
            remove_filter:
              "(LS W vs NS W)adv,1 to 75 balls run TR 2,100 balls run TR 2,6 over run DA 2,10 over run DA 2,15 over run DA 2,20 over run DA 2,16 over run DA,25 over run AFG 2,30 over run AFG 2,35 over run AFG 2,40 over run AFG 2,45 over run AFG 2,50 over run SL 2,run,runs,Runs,:,Run,e,s",
          }
        );
        // response = await response.json();
        console.log("response", response?.data);
        setMatchData(response?.data);
      } catch (error) {
        console.error(error);
        return error;
      }
    }, 2000);

    return () => {
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  }, [id]);

  return (
    <>
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "space-between",
      //   marginTop: "6%",
      //   marginLeft: "4%",
      //   marginRight: "4%",
      //   fontSize: "18px",
      // }}
      >
        <div style={{ width: "100%" }}>
          <table style={{ position: "absolute", top: 60, left: 30 }}>
            <tbody>
              {matchData
                ?.filter((item) => item.RunnerName.includes("over runs"))
                ?.map((data) => {
                  return (
                    <tr>
                      <td className="orange">
                        {data.BackPrice1}
                        <br />
                        {data.BackSize1}
                      </td>
                      <td className="blue">
                        {data.LayPrice1}
                        <br />
                        {data.LaySize1}
                      </td>
                      <td style={{ fontWeight: 700, fontSize: "18px" }}>
                        {data.RunnerName}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "6%",
        marginLeft: "4%",
        marginRight: "4%",
        fontSize: "18px",
      }}>
      <div className="box box-left">
        <div className="container">
          <div className="item">
            <table>
            <thead></thead>
              <tbody>
              <tr>
                <th style={{ textAlign: "right" }}>BackPrice1</th>
                <td>
                  {matchData && matchData?.BackPrice1
                    ? matchData?.BackPrice1
                    : "-"}
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: "right" }}>BackSize1</th>
                <td>
                  {matchData && matchData?.BackSize1
                    ? matchData?.BackSize1
                    : "-"}
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: "right" }}>FinalStatus</th>
                <td>
                  {matchData && matchData?.FinalStatus
                    ? matchData?.FinalStatus
                    : "-"}
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: "right" }}>GameStatus</th>
                <td>
                  {matchData && matchData?.GameStatus
                    ? matchData?.GameStatus
                    : "-"}
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: "right" }}>LayPrice1</th>
                <td>
                  {matchData && matchData?.LayPrice1
                    ? matchData?.LayPrice1
                    : "-"}
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: "right" }}>LaySize1</th>
                <td>
                  {matchData && matchData?.LaySize1 ? matchData?.LaySize1 : "-"}
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: "right" }}>RunnerName</th>
                <td>
                  {matchData && matchData?.RunnerName
                    ? matchData?.RunnerName
                    : "-"}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="box box-right">
        <div className="container">
          <div className="item">
            <table>
              <tr>
                <td>
                  {matchData && matchData?.SelectionId
                    ? matchData?.SelectionId
                    : "-"}
                </td>
                <th style={{ textAlign: "left" }}>SelectionId</th>
              </tr>
              <tr>
                <td>
                  {matchData && matchData?.isActive ? matchData?.isActive : "-"}
                </td>
                <th style={{ textAlign: "left" }}>isActive</th>
              </tr>
              <tr>
                <td>{matchData && matchData?.max ? matchData?.max : "-"}</td>
                <th style={{ textAlign: "left" }}>max</th>
              </tr>
              <tr>
                <td>{matchData && matchData?.min ? matchData?.min : "-"}</td>
                <th style={{ textAlign: "left" }}>min</th>
              </tr>
              <tr>
                <td>
                  {matchData && matchData?.mktype ? matchData?.mktype : "-"}
                </td>
                <th style={{ textAlign: "left" }}>mktype</th>
              </tr>
              <tr>
                <td>{matchData && matchData?.type ? matchData?.type : "-"}</td>
                <th style={{ textAlign: "left" }}>type</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default MatchDetails;
