import React from 'react';
import Menu from 'rc-menu';
// import AuthenticatedComponent from './../component-authenticated';

var SubMenu = Menu.SubMenu;
var MenuItem = Menu.Item;

var ProfileUsername = React.createClass({
  render: function() {
    return (
      <span className="username">
        {this.props.username}
      </span>
    );
  }
});

export default class TopMastHead extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu className="rc-top-menu">
        <SubMenu title="More from The Economist" key="1" className="rc-menu-submenu-pull-down">
          <MenuItem key="1-1"><a href="http://www.economist.com/digital">The Economist digital editions</a></MenuItem>
          <MenuItem key="1-2"><a href="http://www.economist.com/newsletters">Newsletters</a></MenuItem>
          <MenuItem key="1-3"><a href="http://www.economist.com/events">Events</a></MenuItem>
          <MenuItem key="1-4"><a href="http://jobs.economist.com">Jobs.Economist.com</a></MenuItem>
          <MenuItem key="1-5"><a href="http://store.economist.com/">The Economist Store</a></MenuItem>
          <MenuItem key="1-6"><a href="http://www.economist.com/bookmarks" html="1">Timekeeper reading list</a></MenuItem>
        </SubMenu>
        <SubMenu title="My subscription" key="2"  className="rc-menu-submenu-pull-down">
          <MenuItem key="2-1"><a href="http://www.economist.com/products/subscribe">Subscribe to The Economist</a></MenuItem>
          <MenuItem key="2-2"><a href="http://www.economist.com/activate">Activate my digital subscription</a></MenuItem>
          <MenuItem key="2-3"><a href="http://www.economist.com/user">Manage my subscription</a></MenuItem>
          <MenuItem key="2-4"><a href="http://www.economist.com/products/renew">Renew</a></MenuItem>
        </SubMenu>
        <MenuItem key="3"><a href="https://subscriptions.economist.com/GLB/MAST/T1" target="_blank">Subscribe</a></MenuItem>
        <SubMenu showIfLoggedIn="true" title="You" key="4" className="rc-menu-submenu-pull-down">
          <MenuItem key="4-1"><a href="/user">My account</a></MenuItem>
          <MenuItem key="4-2"><a href="/bookmarks">Timekeeper reading list</a></MenuItem>
          <MenuItem key="4-3"><a href="/admin">Administer</a></MenuItem>
          <MenuItem key="4-4"><a href="/logout">Log out</a></MenuItem>
        </SubMenu>
        <MenuItem showIfNotLoggedIn="true" key="5">
            <a  href="https://www.economist.com/user/login?destination=node%2F21555491">Log in or register</a>
        </MenuItem>
      </Menu>
    );
  }
}