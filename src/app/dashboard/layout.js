import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import SidebarLayout from './sidebarLayout/sidebarLayout';
import './sidebarLayout/sidebarLayout.css';

export default function DashboardLayout({ children }) {
  const empleadoCookie = cookies().get('empleadoKey')?.value
  if (!empleadoCookie) {
    redirect('/login')
  }
  
  return <SidebarLayout>{children}</SidebarLayout>;
}
