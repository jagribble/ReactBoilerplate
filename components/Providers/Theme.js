import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const ThemeContext = React.createContext();

export function ThemeContextProvider(props) {
    const localDarkMode = localStorage.getItem('darkMode');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [theme, setTheme] = React.useState(createMuiTheme({ palette: { type: 'dark' } }));
    const [type, setType] = React.useState(true);
    const [primary, setPrimary] = React.useState(theme.palette.primary.main);
    const [secondary, setSecondary] = React.useState(theme.palette.secondary.main);
    const [error, setError] = React.useState(theme.palette.error.main);
    const value = React.useMemo(() => {
        return {
            theme, setTheme, type, setType, primary, setPrimary, secondary, setSecondary, error, setError
        };
    }, [theme, type]);

    React.useEffect(() => {
        if(localDarkMode !== null){

            setType(localDarkMode === 'true');
        } else{
            setType(prefersDarkMode);
        }
    }, [prefersDarkMode, localDarkMode]);

    React.useEffect(() => {
        setTheme(createMuiTheme({
            palette: {
                type: type ? 'dark' : 'light',
                primary: { main: primary },
                secondary: { main: secondary },
                error: { main: error }
            }
        }));
    }, [type, primary, secondary, error]);

    return <ThemeContext.Provider value={value} {...props} />;
}

export function useThemeContextProvider() {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error('useToolBarProvider must be used within a ToolBarProvider');
    }
    const {
        theme, setTheme, type, setType, primary, setPrimary, secondary, setSecondary, error, setError
    } = context;

    const getTheme = React.useCallback(() => theme, [theme]);

    const getType = React.useCallback(() => type, [type]);

    const getPrimary = React.useCallback(() => primary, [primary]);

    const getSecondary = React.useCallback(() => secondary, [secondary]);

    const getError = React.useCallback(() => error, [error]);

    const toggleType = React.useCallback(() => {
        localStorage.setItem('darkMode', !type);
        setType(!type);
    }, [setType, type]);

    return {
        getTheme,
        setTheme,
        getType,
        toggleType,
        getPrimary,
        getSecondary,
        getError,
        setError,
        setSecondary,
        setPrimary,
    };
}
