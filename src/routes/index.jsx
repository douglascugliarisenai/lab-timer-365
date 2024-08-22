import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { HistoryPage } from '../pages/history';
import { Layout } from '../template';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/history',
                element: <HistoryPage />
            }        
        ]
    }
    
])

