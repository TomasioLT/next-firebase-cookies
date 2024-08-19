import React from "react";
import {UserRecord} from "firebase-admin/auth";

interface DashboardPageProps {
  currentUser?: UserRecord;
  handleSignOut: () => void;
  buttonStyle: string;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  currentUser,
  handleSignOut,
  buttonStyle,
}) => {
  return (
    <>
      <h1>Dashboard Page</h1>
      <p>Welcome, {currentUser?.displayName}</p>
      <button className={buttonStyle} onClick={handleSignOut}>
        Sign Out
      </button>
    </>
  );
};

export default DashboardPage;
