import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen items-center justify-center bg-system-bg p-4">
          <div className="w-full max-w-lg p-8 bg-gray-900/80 border border-red-900/50 rounded-2xl backdrop-blur-md">
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-mono">SYSTEM_FAILURE</h2>
            <div className="text-gray-400 mb-6 font-mono text-sm">
              <p>An unexpected error occurred in the component tree.</p>
            </div>
            
            <div className="bg-black/50 p-4 rounded-lg overflow-x-auto border border-gray-800 mb-6">
              <pre className="text-xs font-mono text-red-400">
                {this.state.error?.toString()}
              </pre>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 bg-red-900/20 hover:bg-red-900/40 text-red-400 border border-red-900/50 rounded-lg font-mono text-sm transition-colors"
            >
              REBOOT_SYSTEM
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
