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
        <Route path="/lifts/:liftName" element={<LiftsByType />}/>
      </Routes>
    </>
  )
}

const Navigation = () => {
  const [liftTypes, setLiftTypes] = useState<{id: number, name: string}[]>([]); 

  useEffect(() => {
    fetch('http://localhost:3000/lift-type')
    .then(res => res.json())
    .then(data => setLiftTypes(data))
    .catch(err => console.error(err)); 
  }, []);

  return (
    <NavigationMenu viewport={false} className="flex flex-row">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/home">Dashboard</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Lifts</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {liftTypes.map((liftType) => (
              <li key={liftType.id} className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link to={`lifts/${liftType.name}`}>
                {liftType.name.toUpperCase()}
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
