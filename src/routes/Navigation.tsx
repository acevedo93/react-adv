import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { LazyPage1, LazyPage3, LazyPage2 } from '../01-lazyLoad/pages';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/LazyActive1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>LazyActive1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/LazyActive2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>LazyActive2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/LazyActive3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>LazyActive3</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="LazyActive1" element={ <LazyPage1 /> } />
                    <Route path="LazyActive2" element={ <LazyPage2/> } />
                    <Route path="LazyActive3" element={ <LazyPage3 /> } />
                    <Route path="/*" element={ <Navigate to="/lazyActive1" replace/>  } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
