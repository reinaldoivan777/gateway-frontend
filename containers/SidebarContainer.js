import React, { Component } from 'react';
import { Sidebar, SidebarMenu, SidebarHeader, SidebarLogout } from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faUser,
  faHistory,
  faFileInvoice,
  faBook,
  faReceipt,
  faCalendarAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth';
import { Link } from '../routes';

export class SidebarContainer extends Component {
  render() {
    const { profile } = this.props;
    const tipe = profile.tipe || 'import';

    return (
      <Sidebar>
        <SidebarMenu>
          <SidebarHeader>Gateway</SidebarHeader>
          <li>
            <Link to='tracking'>
              <a>
                <FontAwesomeIcon icon={faCompass} className='fa-fw mr-3' />
                Track and Trace
              </a>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarAlt} className='fa-fw mr-3' />
            Schedule
          </li>
          {tipe !== 'import' && (
            <React.Fragment>
              <li>
                <FontAwesomeIcon icon={faReceipt} className='fa-fw mr-3' />
                E-Quotation
              </li>
              <li>
                <FontAwesomeIcon icon={faBook} className='fa-fw mr-3' />
                E-Booking
              </li>
            </React.Fragment>
          )}
          <li>
            <FontAwesomeIcon icon={faFileInvoice} className='fa-fw mr-3' />
            E-Invoice
          </li>
          <li>
            <FontAwesomeIcon icon={faHistory} className='fa-fw mr-3' />
            History
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className='fa-fw mr-3' />
            Profile
          </li>
        </SidebarMenu>
        <SidebarLogout onClick={() => logout()}>
          <FontAwesomeIcon icon={faSignOutAlt} className='fa-fw mr-3' />
          Logout
        </SidebarLogout>
      </Sidebar>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile
});

export default connect(mapStateToProps)(SidebarContainer);
