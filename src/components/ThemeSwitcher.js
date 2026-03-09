import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaWater } from 'react-icons/fa';

function ThemeSwitcher() {
    // Always default to light
    const savedTheme = localStorage.getItem('resume-theme');
    const initialTheme = savedTheme ? savedTheme : 'light';
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
            <ButtonGroup className="shadow-lg rounded-pill bg-dark" style={{ border: '2px solid #2b3035' }}>
                <Button
                    variant="primary"
                    className="rounded-circle m-1"
                    style={{ width: '40px', height: '40px', padding: 0, opacity: theme === 'navy' ? 1 : 0.5, transition: 'opacity 0.2s' }}
                    onClick={() => setTheme('navy')}
                    title="Navy Blue Theme (Default)"
                >
                    <FaWater color="#fff" />
                </Button>
                <Button
                    variant="secondary"
                    className="rounded-circle m-1"
                    style={{ width: '40px', height: '40px', padding: 0, opacity: theme === 'dark' ? 1 : 0.5, transition: 'opacity 0.2s' }}
                    onClick={() => setTheme('dark')}
                    title="Dark Theme"
                >
                    <FaMoon color="#fff" />
                </Button>
                
                {/* Conditionally render the Light Theme button: Hidden on AI Projects page */}
                {!isAiProjectsPage && (
                    <Button
                        variant="light"
                        className="rounded-circle m-1"
                        style={{ width: '40px', height: '40px', padding: 0, color: '#000', opacity: theme === 'light' ? 1 : 0.5, transition: 'opacity 0.2s' }}
                        onClick={() => setTheme('light')}
                        title="Light Theme"
                    >
                        <FaSun color="#000" />
                    </Button>
                )}
            </ButtonGroup>
        </div>
    );
}

export default ThemeSwitcher;
