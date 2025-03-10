import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/Sidebar/Sidebar';
import { ToastProvider } from '@/contexts/ToastProvider';

function App() {
    return (
        <ToastProvider>
            <SideBarProvider>
                <SideBar />

                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            {routers.map((item, index) => {
                                return (
                                    <Route
                                        path={item.path}
                                        element={<item.component />}
                                        key={index}
                                    />
                                );
                            })}
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </SideBarProvider>
        </ToastProvider>
    );
}

export default App;
