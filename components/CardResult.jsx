import React from 'react';
import { Card, Table } from 'react-bootstrap';
import styled from 'styled-components';

const Paragraph = styled.div`
  margin-bottom: 8px;
  display: flex;
`;

const Label = styled.div`
  width: 18%;
`;

const Data = styled.div`
  width: 78%;
`;

export const CardResultImport = ({ result }) => {
  const { tracking } = result;
  return (
    <Card>
      <Card.Body>
        <Paragraph>
          <Label className='text-muted'>MBL Number:</Label> <Data>{tracking.mbl_no}</Data>
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>Port of Destination:</Label> <Data>{tracking.port_of_destination}</Data>
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>Vessel:</Label> <Data>{tracking.vessel}</Data>
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>ETD:</Label> <Data>{tracking.etd}</Data>
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>ETA:</Label> <Data>{tracking.eta}</Data>
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>Container Number:</Label> <Data>{tracking.container_no}</Data>
        </Paragraph>
        <TableStatusImport status={tracking.status} />
      </Card.Body>
    </Card>
  );
};

export const CardResultExport = ({ result }) => {
  const { tracking } = result;
  return (
    <Card>
      <Card.Body>
        <Paragraph>
          <Label className='text-muted'>HBL Number:</Label> <Data>{tracking.hbl_no}</Data>
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>Shipper:</Label> <Data>{tracking.shipper}</Data>
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>Consignee:</Label> <Data>{tracking.consignee}</Data>
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>ETD:</Label> <Data>{tracking.etd}</Data>
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>ETA:</Label> <Data>{tracking.eta}</Data>
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>Vessel:</Label> <Data>{tracking.vessel}</Data>
        </Paragraph>
        <TableStatusExport status={tracking.status} />
      </Card.Body>
    </Card>
  );
};

const TableStatusImport = ({ status }) => (
  <Table responsive striped bordered>
    <thead>
      <tr>
        <td>No.</td>
        <td>HBL</td>
        <td>Shipper</td>
        <td>Consignee</td>
        <td>Port of Origin</td>
        <td>Actual Time of Arrival</td>
        <td>Pickup Do</td>
        <td>Pickup Cargo</td>
      </tr>
    </thead>
    <tbody>
      {status.map((data, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{data[0].hbl_no}</td>
          <td>{data[1].shipper}</td>
          <td>{data[2].consignee}</td>
          <td>{data[3].port_of_origin}</td>
          <td>{data[4].ata}</td>
          <td>{data[5].pickup_do}</td>
          <td>{data[6].pickup_cargo}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const TableStatusExport = ({ status }) => (
  <Table responsive striped bordered>
    <thead>
      <tr>
        <td>No.</td>
        <td>Status</td>
        <td>Date</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Pickup Cargo</td>
        <td>{status[0].pickup_cargo}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Departure from Port of Loading</td>
        <td>{status[1].atd}</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Arrival at Transhipment Port</td>
        <td>{status[2].aot}</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Departure from Transhipment Port</td>
        <td>{status[3].dpt}</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Arrival from Transhipment Port</td>
        <td>{status[4].atd}</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Pickup Do</td>
        <td>{status[5].pickup_do}</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Cargo Delivery</td>
        <td>{status[6].cargo_delivery}</td>
      </tr>
    </tbody>
  </Table>
);
