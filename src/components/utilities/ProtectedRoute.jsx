import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ allowedRoles = ['buyer', 'seller', 'admin'] }) => {
    const { user, profile, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-blue"></div>
            </div>
        );
    }

    // Not logged in
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Check roles (if profile exists and role matches, or if no specific roles required)
    if (profile && !allowedRoles.includes(profile.role)) {
        // Has account, but no permission for this route
        return <Navigate to="/" replace />;
    }

    // Authorized
    return <Outlet />;
};

export const PublicRoute = () => {
    const { user, loading } = useAuth();
    if (loading) return null;
    return user ? <Navigate to="/" replace /> : <Outlet />;
}
