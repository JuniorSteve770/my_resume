import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaWater } from 'react-icons/fa';

function ThemeSwitcher() {
    // Always default to navy; reset 'light' back to 'navy' on load
    const savedTheme = localStorage.getItem('resume-theme');
    const initialTheme = (savedTheme && savedTheme !== 'light') ? savedTheme : 'navy';
    const [theme, setTheme] = useState(initialTheme);

    const location = useLocation();
    const isAiProjectsPage = location.pathname === '/ai-projects';

    useEffect(() => {
        // If the user navigates to the AI projects page while in light mode, switch them to Navy
        if (isAiProjectsPage && theme === 'light') {
            setTheme('navy');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('resume-theme', theme);
        }
    }, [theme, isAiProjectsPage]);

    return (
        <div className="position-fixed" style={{ top: '20px', left: '20px', zIndex: 9999 }}>
            <ButtonGroup className="shadow-lg rounded-pill bg-dark" style={{ border: '2px solid var(--border-color)' }}>
                <Button
                    variant={theme === 'navy' ? 'primary' : 'dark'}
                    className="rounded-circle m-1"
                    style={{ width: '40px', height: '40px', padding: 0 }}
                    onClick={() => setTheme('navy')}
                    title="Navy Blue Theme (Default)"
                >
                    <FaWater />
                </Button>
                <Button
                    variant={theme === 'dark' ? 'secondary' : 'dark'}
                    className="rounded-circle m-1"
                    style={{ width: '40px', height: '40px', padding: 0 }}
                    onClick={() => setTheme('dark')}
                    title="Dark Theme"
                >
                    <FaMoon />
                </Button>
                
                {/* Conditionally render the Light Theme button: Hidden on AI Projects page */}
                {!isAiProjectsPage && (
                    <Button
                        variant={theme === 'light' ? 'light' : 'dark'}
                        className="rounded-circle m-1"
                        style={{ width: '40px', height: '40px', padding: 0, color: theme === 'light' ? '#000' : '#fff' }}
                        onClick={() => setTheme('light')}
                        title="Light Theme"
                    >
                        <FaSun color={theme === 'light' ? '#000' : '#fff'} />
                    </Button>
                )}
            </ButtonGroup>
        </div>
    );
}

export default ThemeSwitcher;
