import React, { useState } from "react";
import styled from "styled-components";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export const Table = () => {

    return (
        <>

            <CDBContainer>
                <CDBTable responsive>

                    <CDBTableHeader>
                        <tr style={{backgroundColor: "lightgrey"}}>
                            <th>VEHICLE TYPE</th>
                            <th>VEHICLE NUMBER</th>
                            <th>DATE/TIME</th>
                            <th>TOLL NAME</th>
                            <th>TARIFF</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                        <tr style={{fontSize: "12px", fontWeight: ""}}>
                            <th>Car/Jeep/Van</th>
                            <th>G56GJGG</th>
                            <th>9/9/22 14:00pm</th>
                            <th>Chengalapatty</th>
                            <th>60</th>
                        </tr>
                        <tr style={{fontSize: "12px", fontWeight: ""}}>
                            <th>Heavy</th>
                            <th>GHGFJF7</th>
                            <th>9/9/22 14:00pm</th>
                            <th>Patliputra</th>
                            <th>75</th>
                        </tr>
                        <tr style={{fontSize: "12px", fontWeight: ""}}>
                            <th>Car/Jeep/Van</th>
                            <th>HGIT787</th>
                            <th>9/9/22 14:00pm</th>
                            <th>Darbhanga</th>
                            <th>400</th>
                        </tr>
                    </CDBTableBody>
                </CDBTable>
            </CDBContainer>
        </>

    );
};

