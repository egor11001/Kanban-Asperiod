import React from 'react';
import styled from '@emotion/styled';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { primaryGrey2 } from '../../../shared/colors';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import GroupIcon from '@mui/icons-material/Group';

const MembersIcon = styled(GroupIcon)`
  align-self: center;
  color: ${primaryGrey2};
  margin-right: 0.5rem;
`;

const ReturnIcon = styled(KeyboardReturnIcon)`
  align-self: center;
  color: ${primaryGrey2};
  margin-right: 0.5rem;
`;

const KanbanIcon = styled(DashboardIcon)`
  align-self: center;
  color: ${primaryGrey2};
  margin-right: 0.5rem;
`;

const PropertiesIcon = styled(SettingsIcon)`
  align-self: center;
  color: ${primaryGrey2};
  margin-right: 0.5rem;
`;

const ProjectIcon = styled(ListAltIcon)`
  align-self: center;
  color: ${primaryGrey2};
  margin-right: 0.5rem;
`;

const SidebarParent = styled.div`
  background: white;
  display: block;
  min-width: 250px;
  min-height: 93vh;
  border-right: 4px solid #f2f2f2;
`;

const SidebarItem = styled.div`
  padding: 8px 28px;
  transition: all 0.15s ease-in-out;
  display: flex;
  flex-direction: row;
  p {
    display: inline-block;
    color: grey;
    font-weight: 500;
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
    background: #f2f2f2;
  }
`;

const Line = styled.div`
  border-top: 4px solid #f2f2f2;
  position: relative;
  padding: 12%;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  color: #737373;
`;

const MyNavLink = styled(NavLink)`
  text-decoration: none;
`;

const sidebarItems = [
  {
    name: 'All projects',
    route: '/',
  }
];

let returnToBoards = null;
let returnToKanban = null;

const boardItems = [
  {
    name: 'Kanban',
    route: '/kanban',
  },
  {
    name: 'Return to boards',
    route: '/project',
  },
  {
    name: 'Members',
    route: '/members',
  },
];

function Sidebar() {
  let { pathname } = useLocation();
  let params = useParams();

  let currentSidebarItems = sidebarItems;
  if (pathname.includes('/kanban')) {
    currentSidebarItems = sidebarItems.concat(boardItems);
  }

  return (
    <SidebarParent>
      {currentSidebarItems.map((item, index) => {
        if (pathname.includes('/project')) {
          returnToBoards = `/project/${params.id}`;
          boardItems[1].route = returnToBoards;
        }
        if (pathname.includes('/kanban')) {
          returnToKanban = `/kanban/${params.id}`;
          boardItems[0].route = returnToKanban;
        }

        return (
          <div key={index}>
            {item.name === 'Kanban' ? <Line>CURRENT BOARD MENU</Line> : null}
            <MyNavLink to={`${item.route}`}>
              <SidebarItem key={item.name}>
                {item.name === 'All projects' ? (
                  <ProjectIcon />
                ) : item.name === 'Settings' ? (
                  <PropertiesIcon />
                ) : item.name === 'Kanban' ? (
                  <KanbanIcon />
                ) : item.name === 'Return to boards' ? (
                  <ReturnIcon />
                ) : item.name === 'Members' ? (
                  <MembersIcon />
                ) : null}
                <p>{item.name}</p>
              </SidebarItem>
            </MyNavLink>
          </div>
        );
      })}
    </SidebarParent>
  );
}

export default Sidebar;
