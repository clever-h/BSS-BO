import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  Settings,
  Search,
  Menu,
  Fullscreen,
  LightMode,
  FullscreenExit,
  DarkMode,
  ArrowForward,
  Dashboard,
  KeyboardArrowDown,
  Analytics,
  ArrowUpward,
  Close,
  RotateLeft,
  MovingOutlined,
  PermIdentityOutlined,
  ChatBubbleOutlineOutlined,
  LoginOutlined,
} from '@mui/icons-material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import ContactsIcon from '@mui/icons-material/Contacts';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import BugReportIcon from '@mui/icons-material/BugReport';
import AddBoxIcon from '@mui/icons-material/AddBox';

import CRM from './Pages/Dashboard/CRM/CRM';
import DataAccess from './Pages/Dashboard/DataAccess';
import DataEmployee from './Pages/Dashboard/DataEmployee';
import DataZitel from './Pages/Dashboard/DataZitel';
import CreateIssues from './Pages/Issues/CreateIssues';
import SettingsSiteSetting from './Pages/Settings/SiteSetting/SiteSetting';
import Login from './Pages/Account/Login';
import TableIssues from './Pages/Issues/TableIssues';
import PageIssues from './Pages/Issues/PageIssues';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let MpTheme = sessionStorage.getItem('MpTheme');
    let MpThemeOther = sessionStorage.getItem('MpThemeOther');
    let MpThemeDropdownMenu = sessionStorage.getItem('MpThemeDropdownMenu');
    let MpThemeColor = sessionStorage.getItem('MpThemeColor');
    let MpThemeOtherHover = sessionStorage.getItem('MpThemeOtherHover');
    let Root = document.querySelector(':root');

    this.state = {
      StateIconDarkLightMode: true,
      IconDarkLightMode: <LightMode titleAccess="تم روشن" />,
      StateFullScreen: false,
      StateIconFullScreen: true,
      IconFullScreen: <Fullscreen titleAccess="رفتن به حالت تمام صفحه" />,
      StateHeaderPanel: true,
      StateMenuPanel: true,
      StateIconMenuPanel: false,
      MpTheme: `${MpTheme}`,
      MpThemeOther: `${MpThemeOther}`,
      MpThemeOtherHover: `${MpThemeOtherHover}`,
      MpThemeDropdownMenu: `${MpThemeDropdownMenu}`,
      MpThemeColor: `${MpThemeColor}`,
    };

    Root.style.setProperty('--mp-theme', `${MpTheme}`);
    Root.style.setProperty('--mp-theme-other', `${MpThemeOther}`);
    Root.style.setProperty('--mp-theme-other-hover', `${MpThemeOtherHover}`);
    Root.style.setProperty(
      '--mp-theme-dropdown-menu',
      `${MpThemeDropdownMenu}`
    );
    Root.style.setProperty('--mp-theme-color', `${MpThemeColor}`);

    if (
      !MpTheme &&
      !MpThemeOther &&
      !MpThemeOtherHover &&
      !MpThemeDropdownMenu &&
      !MpThemeColor
    ) {
      this.FuncResetSetting();
    }

    setTimeout(() => {
      this.FuncSetActivateMenuSidebar();
    }, 100);
  }
  //////////////////////////////////////////////////////////////////////

  FuncResetSetting = () => {
    let Root = document.querySelector(':root');
    Root.style.setProperty('--mp-theme', '#232a3b');
    Root.style.setProperty('--mp-theme-other', '#283144');
    Root.style.setProperty('--mp-theme-other-hover', '#666cff');
    Root.style.setProperty('--mp-theme-dropdown-menu', '#1c222f');
    Root.style.setProperty('--mp-theme-color', '#d8deea');

    sessionStorage.setItem('MpTheme', '#232a3b');
    sessionStorage.setItem('MpThemeOther', '#283144');
    sessionStorage.setItem('MpThemeOtherHover', '#666cff');
    sessionStorage.setItem('MpThemeDropdownMenu', '#1c222f');
    sessionStorage.setItem('MpThemeColor', '#d8deea');

    this.setState({
      MpTheme: '#232a3b',
      MpThemeOther: '#283144',
      MpThemeOtherHover: '#666cff',
      MpThemeDropdownMenu: '#1c222f',
      MpThemeColor: '#d8deea',
    });
  };

  FuncOpenCloseSetting = () => {
    let Setting = document.querySelector('.setting');
    let Profile = document.querySelector('.profile');
    let Search = document.querySelector('.search-box');

    Profile.style.display = '';
    Search.style.display = '';

    if (Setting.style.left === '' || Setting.style.left === '-270px') {
      Setting.style.left = '0';
    } else {
      Setting.style.left = '';
    }
  };

  FuncOpenCloseProfile = () => {
    let Setting = document.querySelector('.setting');
    let Profile = document.querySelector('.profile');
    let Search = document.querySelector('.search-box');

    Setting.style.left = '';
    Search.style.display = '';

    if (Profile.style.display === '' || Profile.style.display === 'none') {
      Profile.style.display = 'block';
    } else {
      Profile.style.display = '';
    }
  };

  FuncOpenCloseFullscreen = () => {
    if (this.state.StateIconFullScreen === true) {
      this.setState({
        IconFullScreen: <FullscreenExit titleAccess="خروج از حالت تمام صفحه" />,
        StateIconFullScreen: false,
      });
    } else {
      this.setState({
        IconFullScreen: <Fullscreen titleAccess="رفتن به حالت تمام صفحه" />,
        StateIconFullScreen: true,
      });
    }

    if (this.state.StateFullScreen === false) {
      this.setState({
        StateFullScreen: true,
      });
      document.body.requestFullscreen();
    } else if (this.state.StateFullScreen === true) {
      this.setState({
        StateFullScreen: false,
      });
      document.exitFullscreen();
    }
  };

  FuncOpenCloseSearch = () => {
    let Setting = document.querySelector('.setting');
    let Profile = document.querySelector('.profile');
    let Search = document.querySelector('.search-box');

    Setting.style.left = '';
    Profile.style.display = '';

    if (Search.style.display === '' || Search.style.display === 'none') {
      Search.style.display = 'block';
    } else {
      Search.style.display = '';
    }
  };

  FuncDarkLightMode = () => {
    let Root = document.querySelector(':root');
    if (this.state.StateIconDarkLightMode === true) {
      Root.style.setProperty('--mp-theme', '#e9eef9');
      Root.style.setProperty('--mp-theme-other', '#fff');
      Root.style.setProperty('--mp-theme-other-hover', '#666cff');
      Root.style.setProperty('--mp-theme-dropdown-menu', '#f3f4f4');
      Root.style.setProperty('--mp-theme-color', '#516377');
      this.setState({
        IconDarkLightMode: <DarkMode titleAccess="تم تیره" />,
        StateIconDarkLightMode: false,
      });
    } else {
      Root.style.setProperty('--mp-theme', '#232a3b');
      Root.style.setProperty('--mp-theme-other', '#283144');
      Root.style.setProperty('--mp-theme-other-hover', '#666cff');
      Root.style.setProperty('--mp-theme-dropdown-menu', '#1c222f');
      Root.style.setProperty('--mp-theme-color', '#d8deea');
      this.setState({
        IconDarkLightMode: <LightMode titleAccess="تم روشن" />,
        StateIconDarkLightMode: true,
      });
    }
  };

  FuncOpenCloseMenuSideBar = () => {
    let Sidebar = document.querySelector('.sidebar');
    let Header = document.querySelector('.header');
    let Content = document.querySelector('.content');

    if (Sidebar.style.right === '' || Sidebar.style.right === '240px') {
      Sidebar.style.right = '-240px';
      Header.style.right = '0';
      Content.style.right = '0';
    } else {
      Sidebar.style.right = '';
      Header.style.right = '';
      Content.style.right = '';
    }
  };

  FuncSetActivateMenuSidebar = () => {
    let MenuSidebarAll = document.querySelectorAll(
      '.section-menu-sidebar-inner'
    );
    let MenuSidebarItemsAll = document.querySelectorAll(
      '.section-menu-sidebar-items'
    );
    MenuSidebarAll.forEach((item) => {
      item.style.display = 'none';
      item.classList.remove('active');
    });
    MenuSidebarItemsAll.forEach((item) => {
      item.classList.remove('active');
    });

    let LengthSplit = window.location.href.split('/').length;
    let SplitedHref = window.location.href.split('/')[LengthSplit - 1];

    if (SplitedHref !== '') {
      let LinkItems = document.querySelectorAll('.link-items');
      let Link = document.querySelector(
        `.link-items[aria-label=${SplitedHref}]`
      );

      if (Link) {
        LinkItems.forEach((item) => {
          item.classList.remove('active-sub');
        });
        Link.classList.add('active-sub');

        let ListUlActive = document.querySelector('.active-sub');
        ListUlActive.parentNode.style.display = 'block';
        ListUlActive.parentNode.classList.add('active');
        ListUlActive.parentNode.parentNode.firstChild.classList.add('active');
        ListUlActive.parentNode.parentNode.firstChild.lastChild.style.transform =
          'rotate(-180deg)';
        document.querySelector('.sidebar').scrollTo({
          top: ListUlActive.parentNode.parentNode.offsetTop - 120,
        });
      }
    } else {
      let LinkItems = document.querySelectorAll('.link-items');
      let Link = document.querySelector(".link-items[aria-label='']");
      LinkItems.forEach((item) => {
        item.classList.remove('active-sub');
      });
      Link.classList.add('active-sub');

      let ListUlActive = document.querySelector('.active-sub');
      ListUlActive.parentNode.style.display = 'block';
      ListUlActive.parentNode.classList.add('active');
      ListUlActive.parentNode.parentNode.firstChild.classList.add('active');
      ListUlActive.parentNode.parentNode.firstChild.lastChild.style.transform =
        'rotate(-180deg)';
    }
  };

  FuncSetActiveSubMenus = (Id) => {
    setTimeout(() => {
      let LinkItemsAll = document.querySelectorAll('.link-items');
      let LinkItems = document.querySelector(`.link-item${Id}`);

      LinkItemsAll.forEach((item) => {
        item.classList.remove('active-sub');
      });
      LinkItems.classList.add('active-sub');
      this.FuncSetActivateMenuSidebar();
      this.FuncToTopPage();
    }, 100);
  };

  FuncCloseAllBox = () => {
    let Setting = document.querySelector('.setting');
    let Profile = document.querySelector('.profile');
    let Search = document.querySelector('.search-box');

    Setting.style.left = '';
    Profile.style.display = '';
    Search.style.display = '';
  };

  FuncToTopPage = () => {
    document.querySelector('.content').scrollTo({
      top: 0,
    });
  };

  FuncCloseMenuSideBar = () => {
    let Sidebar = document.querySelector('.sidebar');
    let Header = document.querySelector('.header');
    let Content = document.querySelector('.content');

    Sidebar.style.right = '-240px';
    Header.style.right = '0';
    Content.style.right = '0';
  };

  FuncActiveInActiveSidebarMenu = (Id) => {
    let MenuSidebarAll = document.querySelectorAll(
      '.section-menu-sidebar-inner'
    );
    let MenuSidebarItemsAll = document.querySelectorAll(
      '.section-menu-sidebar-items'
    );
    let IconMenuSidebarItemsAll = document.querySelectorAll(
      '.icon-menu-sidebar-items'
    );
    let MenuSidebar = document.querySelector(
      `.section-menu-sidebar-inner${Id}`
    );
    let MenuSidebarItems = document.querySelector(
      `.section-menu-sidebar-items${Id}`
    );
    let IconMenuSidebarItems = document.querySelector(
      `.icon-menu-sidebar-items${Id}`
    );

    MenuSidebarAll.forEach((item) => {
      item.style.display = 'none';
      item.classList.remove('active');
    });
    MenuSidebarItemsAll.forEach((item) => {
      item.classList.remove('active');
    });
    IconMenuSidebarItemsAll.forEach((item) => {
      item.style.transform = '';
    });

    if (
      MenuSidebar.style.display === '' ||
      MenuSidebar.style.display === 'none'
    ) {
      MenuSidebar.style.display = 'block';
      MenuSidebarItems.classList.add('active');
      MenuSidebar.classList.add('active');
      IconMenuSidebarItems.style.transform = 'rotate(-180deg)';
      document.querySelector('.sidebar').scrollTo({
        top:
          document.querySelector(`.section-menu-sidebar-items${Id}`).parentNode
            .offsetTop - 120,
      });
    } else {
      MenuSidebar.style.display = 'none';
      MenuSidebar.classList.remove('active');
      MenuSidebarItems.classList.remove('active');
      IconMenuSidebarItems.style.transform = '';
    }
  };

  FuncHiddenMenu = () => {
    let Menu = document.querySelector('.sidebar');
    let Content = document.querySelector('.content');
    let Header = document.querySelector('.header');
    if (this.state.StateMenuPanel) {
      this.setState({
        StateMenuPanel: false,
      });
      Menu.style.right = '-240px';
      Content.style.right = '0';
      Header.style.right = '0';
    } else {
      this.setState({
        StateMenuPanel: true,
      });
      Menu.style.right = '';
      Content.style.right = '';
      Header.style.right = '';
    }
  };

  FuncChangeMpTheme = () => {
    let Root = document.querySelector(':root');
    let ValueInput = document.querySelector('.input-color-mp-theme');
    this.setState({
      MpTheme: ValueInput.value,
    });
    Root.style.setProperty('--mp-theme', this.state.MpTheme);
    sessionStorage.setItem('MpTheme', this.state.MpTheme);
  };

  FuncChangeMpThemeOther = () => {
    let Root = document.querySelector(':root');
    let ValueInput = document.querySelector('.input-color-mp-theme-other');
    this.setState({
      MpThemeOther: ValueInput.value,
    });
    Root.style.setProperty('--mp-theme-other', this.state.MpThemeOther);
    sessionStorage.setItem('MpThemeOther', this.state.MpThemeOther);
  };

  FuncChangeMpThemeDropdownMenu = () => {
    let Root = document.querySelector(':root');
    let ValueInput = document.querySelector(
      '.input-color-mp-theme-dropdown-menu'
    );
    this.setState({
      MpThemeDropdownMenu: ValueInput.value,
    });
    Root.style.setProperty(
      '--mp-theme-dropdown-menu',
      this.state.MpThemeDropdownMenu
    );
    sessionStorage.setItem(
      'MpThemeDropdownMenu',
      this.state.MpThemeDropdownMenu
    );
  };

  FuncChangeMpThemeColor = () => {
    let Root = document.querySelector(':root');
    let ValueInput = document.querySelector('.input-color-mp-theme-color');
    this.setState({
      MpThemeColor: ValueInput.value,
    });
    Root.style.setProperty('--mp-theme-color', this.state.MpThemeColor);
    sessionStorage.setItem('MpThemeColor', this.state.MpThemeColor);
  };

  FuncChangeMpThemeOtherHover = () => {
    let Root = document.querySelector(':root');
    let ValueInput = document.querySelector(
      '.input-color-mp-theme-other-hover'
    );
    this.setState({
      MpThemeOtherHover: ValueInput.value,
    });
    Root.style.setProperty(
      '--mp-theme-other-hover',
      this.state.MpThemeOtherHover
    );
    sessionStorage.setItem('MpThemeOtherHover', this.state.MpThemeOtherHover);
  };

  render() {
    return (
      <BrowserRouter>
        <section className="app_main">
          <header className="header row">
            <section className="col-sm-12 d-flex align-items-center justify-content-between flex-row-reverse pl-5">
              <section className="d-flex flex-row-reverse section-menu-header">
                <section
                  className="icon-box rotation-infinite"
                  onClick={() => {
                    this.FuncOpenCloseSetting();
                  }}
                >
                  <Settings titleAccess="تنظیمات قالب" />
                </section>

                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseProfile();
                  }}
                >
                  <img
                    alt="Profile"
                    loading="lazy"
                    src="/Assets/Images/Profiles/Profile.png"
                    className="image-profile"
                  />
                </section>

                <section
                  className="icon-box rotation-infinite"
                  onClick={() => {
                    this.FuncOpenCloseFullscreen();
                  }}
                >
                  {this.state.IconFullScreen}
                </section>

                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseSearch();
                  }}
                >
                  <Search titleAccess="جستجوی کلمه مورد نظر شما" />
                </section>

                <section
                  className="icon-box rotation-infinite"
                  onClick={() => {
                    this.FuncDarkLightMode();
                  }}
                >
                  {this.state.IconDarkLightMode}
                </section>
              </section>

              <section className="align-items-center justify-content-center section-menu">
                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseMenuSideBar();
                  }}
                >
                  <Menu titleAccess="منو کناری ساید بار" />
                </section>
              </section>
            </section>
          </header>

          <section
            className="content"
            onClick={() => {
              this.FuncCloseAllBox();
            }}
          >
            <Routes>
              <Route path="/" element={<CRM />} />
              <Route path="/DataAccess" element={<DataAccess />} />
              <Route path="/DataEmployee" element={<DataEmployee />} />
              <Route path="/DataZitel" element={<DataZitel />} />
              <Route path="/TableIssues" element={<TableIssues />} />
              <Route path="/PageIssues" element={<PageIssues />} />

              <Route path="/CreateIssues" element={<CreateIssues />} />
              <Route path="/SiteSetting" element={<SettingsSiteSetting />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </section>

          {/* Start Section Side Bar */}
          <section
            className="sidebar"
            onClick={() => {
              this.FuncCloseAllBox();
            }}
          >
            <section className="d-flex align-items-center justify-content-around section-header-navigation">
              <Link
                to="/"
                onClick={() => {
                  this.FuncSetActiveSubMenus('1');
                }}
              >
                <img
                  alt="Logo"
                  loading="lazy"
                  src="/Assets/Images/Logo.png"
                  className="image-logo-sidebar"
                />
              </Link>

              <section
                className="icon-box rotation section-icon-minimize-menu"
                onClick={() => {
                  this.FuncCloseMenuSideBar();
                }}
              >
                <ArrowForward titleAccess="کوچک کردن منو" />
              </section>
            </section>

            <ul className="section-menu-sidebar">
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items1"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu('1');
                  }}
                >
                  <section>
                    <Dashboard />

                    <span>داشبورد</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items1" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner1">
                  <li
                    className="link-items link-item1 active-sub"
                    aria-label=""
                    onClick={() => {
                      this.FuncSetActiveSubMenus('1');
                    }}
                  >
                    <Link to="/">
                      <Analytics />
                      <span>تجزیه و تحلیل کار</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item2"
                    aria-label="DataAccess"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('2');
                    }}
                  >
                    <Link to="/DataAccess">
                      <WysiwygIcon />
                      <span>اطلاعات دسترسی سیستم</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item3"
                    aria-label="DataEmployee"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('3');
                    }}
                  >
                    <Link to="/DataEmployee">
                      <ContactsIcon />
                      <span>اطلاعات دسترسی کارمند</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item4"
                    aria-label="DataZitel"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('4');
                    }}
                  >
                    <Link to="/DataZitel">
                      <FolderSharedIcon />
                      <span>اطلاعات کارمند</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item5"
                    aria-label="TableIssues"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('5');
                    }}
                  >
                    <Link to="/TableIssues">
                      <BugReportIcon />
                      <span>نمایش ISSUE</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items2"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu('2');
                  }}
                >
                  <section>
                    <NoteAddIcon />

                    <span>ثبت گزارش کار</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items2" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner2">
                  <li
                    className="link-items link-item6"
                    aria-label="CreateIssues"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('6');
                    }}
                  >
                    <Link to="/CreateIssues">
                      <AddBoxIcon />
                      <span>افزودن مشکل</span>
                    </Link>
                  </li>
                </ul>
              </section>
            </ul>

            {/* Start Section Setting */}
            <section className="setting">
              <section className="d-flex align-items-center justify-content-between p-2 divider">
                <span>تنظیمات </span>

                <Close
                  onClick={() => {
                    this.FuncOpenCloseSetting();
                  }}
                  titleAccess="بستن تنظیمات"
                />
              </section>

              <section className="section-button-setting">
                <Link
                  to="/"
                  onClick={() => {
                    this.FuncSetActiveSubMenus('9');
                  }}
                >
                  صفحه اصلی پنل
                </Link>
              </section>

              <section className="divider"></section>

              <section className="d-flex align-items-center justify-content-between p-2 divider">
                <span>عوض کردن تم پنل</span>

                <section
                  className="form-check form-switch"
                  title="عوض کردن تم پنل"
                >
                  <input
                    className="form-check-input cursor-pointer"
                    type="checkbox"
                    id="StateIconDarkLightMode"
                    checked={this.state.StateIconDarkLightMode}
                    onChange={() => {
                      this.FuncDarkLightMode();
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="StateIconDarkLightMode"
                  ></label>
                </section>
              </section>

              <section className="d-flex align-items-center justify-content-between p-2 divider">
                <span>حذف کردن هدر پنل</span>

                <section
                  className="form-check form-switch"
                  title="حذف کردن هدر پنل"
                >
                  <input
                    className="form-check-input cursor-pointer"
                    type="checkbox"
                    id="StateHeaderPanel"
                    checked={this.state.StateHeaderPanel}
                    onChange={() => {
                      this.FuncHiddenHeader();
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="StateHeaderPanel"
                  ></label>
                </section>
              </section>

              <section className="d-flex align-items-center justify-content-between p-2 divider">
                <span>حذف کردن منو کناری</span>

                <section
                  className="form-check form-switch"
                  title="حذف کردن منو کناری"
                >
                  <input
                    className="form-check-input cursor-pointer"
                    type="checkbox"
                    id="StateMenuPanel"
                    checked={this.state.StateMenuPanel}
                    onChange={() => {
                      this.FuncHiddenMenu();
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="StateMenuPanel"
                  ></label>
                </section>
              </section>

              <section className="d-flex align-items-center justify-content-between p-2 divider">
                <span>عوض کردن رنگ پس زمینه</span>

                <section
                  className="d-flex align-items-center justify-content-center"
                  title="عوض کردن رنگ پس زمینه"
                >
                  <input
                    type="color"
                    className="input-color-mp-theme"
                    value={this.state.MpTheme}
                    onChange={() => {
                      this.FuncChangeMpTheme();
                    }}
                    onFocus={() => {
                      this.FuncChangeMpTheme();
                    }}
                  />
                </section>
              </section>

              <section className="d-flex align-items-center justify-content-between p-2 divider">
                <span>عوض کردن رنگ منو و هدر</span>

                <section
                  className="d-flex align-items-center justify-content-center"
                  title="عوض کردن رنگ منو و هدر"
                >
                  <input
                    type="color"
                    className="input-color-mp-theme-other"
                    value={this.state.MpThemeOther}
                    onChange={() => {
                      this.FuncChangeMpThemeOther();
                    }}
                    onFocus={() => {
                      this.FuncChangeMpThemeOther();
                    }}
                  />
                </section>
              </section>

              <section className="d-flex align-items-center justify-content-between p-2 divider">
                <span>عوض کردن رنگ مودال ها</span>

                <section
                  className="d-flex align-items-center justify-content-center"
                  title="عوض کردن رنگ مودال ها"
                >
                  <input
                    type="color"
                    className="input-color-mp-theme-dropdown-menu"
                    value={this.state.MpThemeDropdownMenu}
                    onChange={() => {
                      this.FuncChangeMpThemeDropdownMenu();
                    }}
                    onFocus={() => {
                      this.FuncChangeMpThemeDropdownMenu();
                    }}
                  />
                </section>
              </section>

              <section className="d-flex align-items-center justify-content-between p-2 divider">
                <span>عوض کردن رنگ متن و ایکون</span>

                <section
                  className="d-flex align-items-center justify-content-center"
                  title="عوض کردن رنگ متن و ایکون"
                >
                  <input
                    type="color"
                    className="input-color-mp-theme-color"
                    value={this.state.MpThemeColor}
                    onChange={() => {
                      this.FuncChangeMpThemeColor();
                    }}
                    onFocus={() => {
                      this.FuncChangeMpThemeColor();
                    }}
                  />
                </section>
              </section>

              <section className="d-flex align-items-center justify-content-between p-2 divider">
                <span>عوض کردن رنگ هاور</span>

                <section
                  className="d-flex align-items-center justify-content-center"
                  title="عوض کردن رنگ هاور"
                >
                  <input
                    type="color"
                    className="input-color-mp-theme-other-hover"
                    value={this.state.MpThemeOtherHover}
                    onChange={() => {
                      this.FuncChangeMpThemeOtherHover();
                    }}
                    onFocus={() => {
                      this.FuncChangeMpThemeOtherHover();
                    }}
                  />
                </section>
              </section>

              <section className="d-flex align-items-center justify-content-between p-2 divider">
                <span>ریست تنظیمات</span>

                <section title="عوض کردن تم پنل">
                  <button
                    onClick={() => {
                      this.FuncResetSetting();
                    }}
                    className="btn btn-primary"
                  >
                    <RotateLeft />
                  </button>
                </section>
              </section>
            </section>

            <section className="button-go-to-todo-list divider">
              <Link
                to="/SiteSetting"
                onClick={() => {
                  this.FuncSetActiveSubMenus('140');
                }}
              >
                رفتن به تنظیمات
              </Link>
            </section>

            {/* End Section Setting */}
            {/* Start Section Profile */}
            <section className="profile">
              <ul
                onClick={() => {
                  this.FuncCloseAllBox();
                }}
              >
                <li className="divider li-profile">
                  <Link
                    to="/PagesAdditionAccountSetting"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('177');
                    }}
                  >
                    <img
                      alt="Profile"
                      loading="lazy"
                      src="/Assets/Images/Profiles/Profile.png"
                      className="image-profile-inner"
                    />
                    <section className="text-profile">
                      <p>حمیدرضا رفیعی</p>
                      <p>توسعه دهنده وب</p>
                    </section>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/PagesAdditionAccountSetting"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('177');
                    }}
                  >
                    <PermIdentityOutlined />
                    <span>پروفایل</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/OthersChat"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('159');
                    }}
                  >
                    <ChatBubbleOutlineOutlined />
                    <span>پیام ها</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/SiteSetting"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('140');
                    }}
                  >
                    <Settings />
                    <span>تنظیمات</span>
                  </Link>
                </li>

                <li className="divider">
                  <Link
                    to="/OthersActivity"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('158');
                    }}
                  >
                    <MovingOutlined />
                    <span>نوتیفیکیشن</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/LogOut"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('168');
                    }}
                  >
                    <LoginOutlined />
                    <span>خروج از سیستم</span>
                  </Link>
                </li>
              </ul>
            </section>
            {/* End Section Profile */}
            {/* Start Section Search Box */}
            <section className="search-box">
              <form className="form-search" method="GET">
                <input
                  placeholder="جستجو"
                  className="input-form-search"
                  name="Search"
                  required={true}
                />

                <button type="submit" className="button-form-search">
                  <Search titleAccess="جستجوی کلمه مورد نظر" />
                </button>
              </form>
            </section>
            {/* End Section Search Box */}
          </section>

          {/* Start Section Footer */}
          <footer
            className="footer"
            onClick={() => {
              this.FuncCloseAllBox();
            }}
          >
            <section className="row w-100 h-100 d-flex align-items-center justify-content-center mr-5 pr-5">
              <span className="text-center mr-5 pr-5">
                حق چاپ © 2023 درست شده توسط{' '}
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  title="تیم لیدر پشتیبانی"
                >
                  حمیدرضا رفیعی
                </a>
              </span>
            </section>
          </footer>
          {/* End Section Footer */}
        </section>

        {/* Start Section Back To Top */}
        <section
          className="section-to-top-page"
          onClick={() => {
            this.FuncToTopPage();
          }}
        >
          <ArrowUpward titleAccess="رفتن به بالا" />
        </section>
        {/* End Section Back To Top */}
      </BrowserRouter>
    );
  }
}
