import React, { useCallback, useState } from 'react';
import NewsPage from './pages/NewsPage';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<NewsPage/>}/>
            <Route path='/:category' element={<NewsPage/>}/>
        </Routes>
    );
};

export default App;
