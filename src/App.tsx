import { Link, Route, Routes } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Dashboard from './tabs/Dashboard';
import DOTS from './tabs/DOTS';
import User from './tabs/User';
import LiftsByType from './tabs/LiftsByType';
import { fetchLiftTypes } from './services/fetching';
import { useEffect, useState } from 'react';


function App() {
  
  return (
    <>
      <Navigation />    
      <Routes>
        <Route path="/home" element={<Dashboard />}
        />
        <Route path="/dots" element={<DOTS />}
        />
        <Route path="/user" element={<User />}
        />
        <Route path="/lifts/:liftTypeName/:liftTypeId" element={<LiftsByType />}/>
      </Routes>
    </>
  )
}

const Navigation = () => {
  const [liftTypes, setLiftTypes] = useState<{id: number, name: string}[]>([]); 

  useEffect(() => {
    fetchLiftTypes()
    .then(data => setLiftTypes(data))
  }, []);

  return (
    <NavigationMenu
      viewport={false}
      className="flex flex-row justify-center items-center w-full align-top"
      style={{ margin: "0 auto" }}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/home">Dashboard</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Lifts</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-full top-0 ml-2 w-56 bg-white rounded shadow-lg p-2">
            <ul>
              {liftTypes.map((liftType) => (
              <li key={liftType.id} className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link to={`lifts/${liftType.name}/${liftType.id}`}>
                {liftType.name}
                  </Link>
                </NavigationMenuLink>
              </li>
              ))}
            </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/dots">DOTS Score</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/user">Profile</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

    </NavigationMenu>
  )
}

export default App; 
