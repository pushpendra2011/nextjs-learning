import { Menu } from 'antd';
import Link from 'next/link'
const { SubMenu } = Menu;
function Nav() {
    return (
         <Menu mode="horizontal">
        <Menu.Item key="mail" >
          <Link href="/">List</Link>
        </Menu.Item>
        <Menu.Item  >
        <Link href="/new-meetup">Add a new meetup</Link>
        </Menu.Item>
      </Menu>)
}
export default Nav