// src/pages/NotAuthorized.jsx
function NotAuthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">403 - Not Authorized</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          You don't have permission to access this page.
        </p>
      </div>
    </div>
  );
}

export default NotAuthorized;
