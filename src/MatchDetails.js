import { width } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./App.css";

const MatchDetails = () => {
  const { id, filter } = useParams();

  const [matchData, setMatchData] = useState([]);
  const ref = useRef(null);

  const match = localStorage.getItem("match_data");

  useEffect(() => {
    matchIdAPI();

    ref.current = setInterval(matchIdAPI, 2000);

    return () => {
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  }, [id]);

  const matchIdAPI = async () => {
    try {
      let response = await axios.post(
        `https://fancy.betpro.gold/api/Odds/fancy/${id}`
      );
      setMatchData(response?.data);
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <table style={{ position: "absolute", top: 60, right: 20 }}>
          <tbody>
            <tr>
              <td
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                }}
              >
                {match?.split(" v ")?.[0]}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                }}
              >
                {match?.split(" v ")?.[1]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
                ?.filter((item) =>
                  filter !== undefined
                    ? filter
                        ?.split("-")
                        ?.some((val) => item?.RunnerName?.includes(val))
                    : item
                )
                ?.map((data) => {
                  return (
                    <tr>
                      {(data?.LayPrice1 != 0 || data?.LaySize1 != 0) && (
                        <td className="orange">
                          <span
                            style={{
                              fontSize: "26px",
                              fontWeight: 900,
                              textAlign: "center",
                            }}
                          >
                            {data?.LayPrice1}
                          </span>
                          <br />
                          <span style={{ fontSize: "18px", fontWeight: 700 }}>
                            {data?.LaySize1}
                          </span>
                        </td>
                      )}
                      {(data?.BackPrice1 != 0 || data?.BackSize1 != 0) && (
                        <td className="blue">
                          <span
                            style={{
                              fontSize: "26px",
                              fontWeight: 900,
                              textAlign: "center",
                            }}
                          >
                            {data?.BackPrice1}
                          </span>
                          <br />
                          <span style={{ fontSize: "18px", fontWeight: 700 }}>
                            {data?.BackSize1}
                          </span>
                        </td>
                      )}
                      {(data?.BackPrice1 != 0 ||
                        data?.BackSize1 != 0 ||
                        data?.LayPrice1 != 0 ||
                        data?.LaySize1 != 0) && (
                        <td
                          style={{
                            fontWeight: 900,
                            fontSize: "24px",
                            textShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          {data?.RunnerName}
                        </td>
                      )}
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
