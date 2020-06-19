import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ minHeight: '70%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh', width: '100vw' }}>
                        <div><h1 className="text-center">I'm just a useless ErrorBoundary page</h1></div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

