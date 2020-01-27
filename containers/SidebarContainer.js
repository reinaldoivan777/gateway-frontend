import React, { Component } from 'react';
import { Sidebar, SidebarMenu, SidebarHeader } from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faUser,
  faHistory,
  faFileInvoice,
  faBook,
  faReceipt,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link } from '../routes';

export class SidebarContainer extends Component {
  render() {
    return (
      <Sidebar>
        <SidebarMenu>
          <SidebarHeader>Gateway</SidebarHeader>
          <li>
            <Link to='tracking'>
              <a>
                <FontAwesomeIcon icon={faCompass} className='fa-fw mr-2' />
                Track and Trace
              </a>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarAlt} className='fa-fw mr-2' />
            Schedule
          </li>
          <li>
            <FontAwesomeIcon icon={faReceipt} className='fa-fw mr-2' />
            E-Quotation
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} className='fa-fw mr-2' />
            E-Booking
          </li>
          <li>
            <FontAwesomeIcon icon={faFileInvoice} className='fa-fw mr-2' />
            E-Invoice
          </li>
          <li>
            <FontAwesomeIcon icon={faHistory} className='fa-fw mr-2' />
            History
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className='fa-fw mr-2' />
            Profile
          </li>
        </SidebarMenu>
      </Sidebar>
    );
  }
}

export default SidebarContainer;
